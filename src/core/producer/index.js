import { computeSizes } from './sizes';
import { computeSpacing } from "./spacing";
import { computeEdges } from './edges';
import { computeBorders } from './borders'
import { computeDecor } from './decor';
import { computeBoundingBoxes } from './bounding-boxes';
import { computeBackgrounds } from './backgrounds';
import { calculateHeightResize } from './height';
import _ from 'lodash';


let elementId = 100000;
// Note the order of these is important.
export const CONTENT_GROUPS = ['header', 'body', 'footer'];

// Line breaks have already been determined at this point.
export function produceFlyer(template) {
  const size = template.size;
  console.log(`Producing ${template.title}`);

  initSetup(template)
  template.background = template.background;
  if(!template.background.color && !template.background.img) {
    template.background.color = {type: 'solid', color: template.palette.light, paletteKey: 'light'}
  }
  template._computed.size = size;
  template._computed.template = template;
  
  computeBorders(template);
  computeDecor(template);
  computeEdges(template);

  // Initial attempt isn't height constrained
  computeSizes(template);
  computeSpacing(template);
  computeBoundingBoxes(template);
  
  // Is the height an issue? 
  const resize = calculateHeightResize(template);
  if(resize < 1) {
    computeEdges(template); // TODO: No need to recalculate this, but bounding box messes the edges up currently.
    computeSizes(template, resize);
    computeSpacing(template);
    computeBoundingBoxes(template);
  }

  computeBackgrounds(template);
  
  return template;
}

function initSetup(template) {
  template._computed = {};
  normalize(template);
  normalizeDecor(template);
  
  template.content.id = 'content';
  template.content._computed = {};
  template.content._computed.template = template;
  _.defaults(template.content, {
    w: 'fill',
    h: 'fill',
    alignX: 'center',
    alignY: 'center',
  })
  template.content._w = template.content.w;
  template.content._h = template.content.h;
  normalize(template.content);

  withGroups(template, (group, groupType) => {
    group.id = groupType;
    group._computed = {};
    group._computed.content = template.content;
    group._computed.template = template;
    initGroup(group, groupType);
  });
  
  template.content.body._computed.index = 0;
  if(template.content.header) {
    template.content.header._computed.next = template.content.body;
    template.content.body._computed.prev = template.content.header;
    template.content.header._computed.index = 0;
    template.content.body._computed.index = 1;
  }
  if(template.content.footer) {
    template.content.body._computed.next = template.content.footer;
    template.content.footer._computed.prev = template.content.body;
    template.content.footer._computed.index = template.content.body._computed.index + 1;
  }
}

function initGroup(group, groupType) {
  
  _.defaults(group, {
    w: 'fill',
    h: 'auto',
    type: groupType,
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
  })
  group._w = group._parent.w === 'auto' ? 'auto' : group.w;
  group._h = group._parent.h === 'auto' ? 'auto' : group.h;
  group.itemsAlignX = group.itemsAlignX || group.alignX;
  group.itemsAlignY = group.itemsAlignY || group.alignY;
  
  normalize(group);

  group.elements.forEach((el, i) => {
    el.id = el.id || elementId++;
    el.fullId = group._root.id + group.id + el.id;
    el._computed = {};
    el._computed.index = i;
    el._computed.isFirst = i === 0;
    el._computed.isLast = i === (group.elements.length - 1);
    el._computed.prev = group.elements[i - 1];
    el._computed.next = group.elements[i + 1];
    el._computed.group = group;
    el._computed.content = group._computed.content;
    el._computed.template = group._computed.template;
    normalize(el);
    _.defaults(el, {
      w: elementDefaultWidth(el),
      h: 'auto',
    })
    el._w = group._w === 'auto' ? 'auto' : el.w;

    _.defaults(el.font, {
      letterSpacing: 0,
      lineHeight: 1.4,
      size: 1,
      style: 'normal',
      transform: 'normal',
      weight: 400,
    })

    if(el.lines) {
      el._computed.lines = el.lines.map(line => ({
        text: Array.isArray(line) 
          ? line.map(l => transformStr(l.text, el.font.transform))
          : transformStr(line.text, el.font.transform)
      }))
      el._computed.maxCharacters = _.max(
        el._computed.lines.map(line => 
          (_.isArray(line.text) ? line.text : [line.text])
          .join(' | ').length
        )
      )

      el._text = el.lines.map(line => Array.isArray(line)
        ? line.map(l => l.text).join(' | ')
        : line.text
      ).join('\n');
      el._hasList = _.some(el.lines, line => Array.isArray(line));
      
      _.defaults(el, {
        divider: {
          type: 'line',
          size: 1,
          color: el.color,
        }
      })
    }
  })
}

function normalize(item) {
  normalizeBorder(item);
  normalizeSpacing(item);
  normalizeBleed(item);
}

function normalizeBorder(item) {
  item.border = item.border || {};

  withSides(s => {
    item.border[s] = getFirst(item.border, [s, 'x', 'a'], 0);
    item.border[`${s}Offset`] = getFirst(item.border, [`${s}Offset`, 'xOffset', 'aOffset'], 0);
  }, ['l', 'r'])

  withSides(s => {
    item.border[s] = getFirst(item.border, [s, 'y', 'a'], 0);
    item.border[`${s}Offset`] = getFirst(item.border, [`${s}Offset`, 'yOffset', 'aOffset'], 0);
  }, ['t', 'b'])
}

function normalizeDecor(item) {
  item.decor = item.decor || {};

  withSides(s => {
    item.decor[s] = getFirst(item.decor, [s, 'x', 'a'], 0);
    item.decor[`${s}Offset`] = getFirst(item.decor, [`${s}Offset`, 'xOffset', 'aOffset'], 0);
  }, ['l', 'r'])

  withSides(s => {
    item.decor[s] = getFirst(item.decor, [s, 'y', 'a'], 0);
    item.decor[`${s}Offset`] = getFirst(item.decor, [`${s}Offset`, 'yOffset', 'aOffset'], 0);
  }, ['t', 'b'])
}

function normalizeBleed(item) {
  item.bleed = item.bleed || {};

  item.bleed.l = getFirst(item.bleed, ['l', 'x', 'a'], 0);
  item.bleed.r = getFirst(item.bleed, ['r', 'x', 'a'], 0);
  item.bleed.t = getFirst(item.bleed, ['t', 'y', 'a'], 0);
  item.bleed.b = getFirst(item.bleed, ['b', 'y', 'a'], 0);
}

function normalizeSpacing(item) {
  item.pl = getFirst(item, ['pl', 'px', 'pa'], 1)
  item.pr = getFirst(item, ['pr', 'px', 'pa'], 1)
  item.pt = getFirst(item, ['pt', 'py', 'pa'], 1)
  item.pb = getFirst(item, ['pb', 'py', 'pa'], 1)

  item.ml = getFirst(item, ['ml', 'mx', 'ma'], 1)
  item.mr = getFirst(item, ['mr', 'mx', 'ma'], 1)
  item.mt = getFirst(item, ['mt', 'my', 'ma'], 1)
  item.mb = getFirst(item, ['mb', 'my', 'ma'], 1)
}

function normalizeWidthAndHeight(item, width, height) {
  item.w = item.w || width;
  item.h = item.h || height;
}


function getFirst(obj, arr, _default) {
  const ret = _.find(arr, a => obj[a] !== undefined);
  return ret !== undefined ? obj[ret] : _default;
}


function transformStr(str, transform) {
  switch(transform) {
    case 'uppercase': return str.toUpperCase();
    case 'lowercase': return str.toLowerCase();
    case 'capitalize': return _.capitalize(str);
    default: return str;
  }
}

function elementDefaultWidth(element) {
  switch(element.type) {
    case 'icon':
    case 'bar':
      return 'auto';
    default: 
      return 'fill'
  }
}

export function getNormalizedValue(value, fullValue) {
  return value < 3 ? value * fullValue : value;
}

export function withSides(cb, sides=['l','r','t','b']) {
  return sides.map(cb);
}

export function withGroups(template, cb, groups=CONTENT_GROUPS) {
  return groups
    .filter(g => template.content[g])
    .map(g => cb(template.content[g], g))
}

// Intentions object
  // abstract description of flyer
  // can have many instantiations.
// Instantiation of intentions object
  // detailed description of flyer