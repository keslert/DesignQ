import _ from 'lodash';
import { withGroups, produceFlyer } from '../producer';
import { extractColorStrsFromTemplate, PLACEHOLDER_IMAGE, generatePalette, fixAlpha, convertColorToPaletteColor } from './color-utils';

export function safeIncrement(obj, key, amount=1) {
  obj[key] = (obj[key] || 0) + amount;
}

export function safePush(obj, key, value) {
  if(obj[key]) {
    obj[key].push(value);
  } else {
    obj[key] = [value];
  }
}

export function mode(arr) {
  const counts = {};
  for (let i = 0; i < arr.length; i += 1) {
    counts[arr[i]] = (counts[arr[i]] || 0) + 1;
  }
  const max = _.max(Object.values(counts));
  return _.filter(Object.keys(counts), key => counts[key] === max);
}

export function linkTemplate(template) {
  console.log('Linking ' + template.title);
  template.kind = 'template';
  template._root = template;
  template._key = 'template';
  linkSurface(template);
  
  template.content.kind = 'content';
  template.content._parent = template;
  template.content._root = template;
  template.content._key = 'content';

  linkSurface(template.content);

  template._groups = withGroups(template, (group, groupType) => {
    group.type = groupType;
    group.kind = 'group';
    group._parent = template.content;
    group._root = template;
    group._key = groupType;
    linkSurface(group);
    return group;
  });

  template._elements = _.flatMap(template._groups, g => g.elements.map((el, i) => {
    el.kind = 'element';
    el._parent = g;
    el._root = template;
    el._key = 'elements.' + i;
    linkSurface(el);
    return el;
  }))
  template._textElements = _.filter(template._elements, el => el.lines);
  template._dominant = _.find(template._textElements, el => el.type === 'dominant');

  // Note: This ordering is important
  template._containers = [
    template,
    template.content,
    ...template._groups,
  ]

  template._surfaces = [
    ...template._containers,
    ...template._elements,
  ]

  template._decors = _.filter(_.map(template._surfaces, 'decor'))
  template._borders = _.filter(_.map(template._surfaces, 'border'));

  template._all = [
    ...template._surfaces,
    ...template._decors,
    ...template._borders,
  ]
}

function linkSurface(item) {
  if(item.decor) {
    item.decor._kind = 'decor';
    item.decor._root = item._root;
    item.decor._parent = item;
    item.decor._key = 'decor';
  }
  if(item.border) {
    item.border._kind = 'border';
    item.border._root = item._root;
    item.border._parent = item;
    item.border._key = 'border';
  }
}

export function getTemplateTextTypes(template, force) {
  if(!template._textTypes || force) {
    produceFlyer(template);
    const types = _.flatMap(template._elements, el => {

      // flatten lists
      const lines = _.flatMap(el.lines, (line, lineIndex) => (
        _.isArray(line)
          ? line.map((listItem, listIndex) => ({
              ...listItem, 
              lineIndex, 
              listIndex, 
              listId: `${el._parent.type}_${lineIndex}`
            }))
          : {...line, lineIndex}
      ))

      // build types
      const types = _.reduce(lines, (ret, line) => {
        const prev = _.last(ret) || {};
        if(prev.type === line.type) {
          prev.text += ' ' + line.text;
          prev.lines.push(line);
        } else {
          ret.push({
            type: line.type,
            elementId: el.id,
            elementType: el.type,
            groupType: el._parent.type,
            element: el, // TODO: Delete...
            elementIndex: el._computed.index,
            text: line.text,
            listId: line.listId,
            lines: [line],
            lineIndex: line.lineIndex,
            listIndex: line.listIndex,
          });
        }
        return ret;
      }, [])

      return types;
    })

    types.forEach(t => t.element._text = {text: t.text, type: t.type});
    template._textTypes = types;
  }

  return template._textTypes;
}

export function isCrudeEqual(a, b) {
  return _.isEqualWith(a, b, equalCustomizer)
}

function equalCustomizer(a, b, key) {
  return _.isString(key) && key.startsWith('_') ? true : undefined;
}

export function copyTemplate(flyer, noLink) {
  const clone = _.cloneDeepWith(flyer, copyCustomizer);
  if(!noLink) {
    linkTemplate(clone);
  }
  return clone;
}

// If customizer returns undefined, cloning is handled by the method instead
function copyCustomizer(value, key) {
  return _.isString(key) && key.startsWith('_') ? null : undefined;
}

function getPath(item) {
  let iter = item;
  const path = [];
  do {
    path.push(iter._key);
  } while(iter = iter._parent)
  
  return path;
}

export function getItemFromTemplate(item, flyer) {
  if(item.kind === 'template') return flyer;
  
  const path = getPath(item).reverse().slice(1).join('.');
  return _.get(flyer, path);
}

export function getDescendants(item) {
  switch(item.kind) {
    case 'template': return [item.content, ...item._groups, ...item._elements];
    case 'content': return [...item._root._groups, ...item._root._elements];
    case 'group': return [...item.elements];
    default: return [];
  }
}

export const TextToWidth = { max: 'fill', min: 'auto'}
export const WidthToText = { fill: 'max', auto: 'min'}
export function canControlHeight(surface) {
  return surface.kind === 'content'
    || (surface.type === 'body' && surface._parent._h === 'fill')
}
export function canControlWidth(surface) {
  return surface.kind === 'content'
    || (surface.kind === 'group' && surface._parent._w === 'fill')
    || (surface.kind === 'element' && surface._parent._w === 'fill')
}

export function convertV1Template(template, options={}) {
  const colorStrs = extractColorStrsFromTemplate(template);
  template.palette = generatePalette(colorStrs);

  // replace images and fix color overlays
  template._all.forEach(item => {
    const img = _.get(item, ['background', 'img'])
    if(img && !options.keepImages) {
      item.background.img = {...PLACEHOLDER_IMAGE};

      if(item.background.color) {
        fixAlpha(item.background.color);
      }
    }
  })
  
  // connect colors to palette
  template._all.forEach(item => {
    const paths = [['color'], ['background', 'color']];
    paths.forEach(path => {
      if(_.has(item, path)) {
        _.set(item, path, convertColorToPaletteColor(_.get(item, path), template.palette))
      }
    })
  })
}