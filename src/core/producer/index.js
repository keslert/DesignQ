import { computeSizes } from './sizes';
import { computeSpacing } from "./spacing";
import { computeBounds } from './bounds';
import { computeBorder } from './borders'
import _ from 'lodash';

// Intentions object
  // abstract description of flyer
  // can have many instantiations.
// Instantiation of intentions object
  // detailed description of flyer

export const GROUPS = ['content', 'footer', 'header']

// Line breaks have already been determined at this point.
export function computeFlyer(structure, size={w: 612, h:792}) {
  console.log(`Computing ${structure.title}`);

  initSetup(structure)
  structure._computed.bb = size;
  
  computeBorder(structure);
  computeBounds(structure)
  computeSizes(structure);
  computeSpacing(structure);
  
  // TODO: Need a better maxHeight calculation.
  const maxHeight = size.h - structure.border._computed.y - structure.pt - structure.pb;
  const height = calculateHeight(structure);
  const ratio = maxHeight / (height - structure.border._computed.y);
  if(ratio < 1) {
    computeSizes(structure, ratio);
    computeSpacing(structure);
  }
  
  
  
  return structure;
}

function initSetup(structure) {
  structure._computed = {};
  normalize(structure);

  initGroup(structure, structure.content);
  initGroup(structure, structure.header);
  initGroup(structure, structure.footer);
}

function initGroup(structure, group) {
  if(!group) return;
  group._computed = {};
  normalize(group);

  group.elements.forEach((el, i) => {
    el._computed = {};
    el._computed.index = i;
    el._computed.prev = group.elements[i - 1];
    el._computed.next = group.elements[i + 1];
    el._computed.group = group;
    normalize(el);

    if(el.lines) {
      el._computed.lines = el.lines.map(line => ({
        text: Array.isArray(line) 
          ? line.map(l => transformStr(l.text, el.font.transform))
          : transformStr(line.text, el.font.transform)
      }))
    }
  })
}

function normalize(item) {
  normalizeBorder(item);
  normalizeSpacing(item);
  normalizeBleed(item);
}

function normalizeBorder(item) {
  if(!item.border) return;

  item.border.left = getFirst(item.border, ['left', 'all'])
  item.border.right = getFirst(item.border, ['right', 'all'])
  item.border.top = getFirst(item.border, ['top', 'all'])
  item.border.bottom = getFirst(item.border, ['bottom', 'all'])
}

function normalizeBleed(item) {
  if(!item.bleed) return;

  item.bleed.left = getFirst(item.bleed, ['left', 'all'])
  item.bleed.right = getFirst(item.bleed, ['right', 'all'])
  item.bleed.top = getFirst(item.bleed, ['top', 'all'])
  item.bleed.bottom = getFirst(item.bleed, ['bottom', 'all'])
}

function normalizeSpacing(item) {
  item.pl = getFirst(item, ['pl', 'px']) || 1
  item.pr = getFirst(item, ['pr', 'px']) || 1
  item.pt = getFirst(item, ['pt', 'py']) || 1
  item.pb = getFirst(item, ['pb', 'py']) || 1
}


function getFirst(obj, arr) {
  return obj[_.find(arr, a => obj[a] !== undefined)]
}


function transformStr(str, transform) {
  return transform === 'uppercase' ? str.toUpperCase() : str;
}

function calculateHeight(structure) {
  const groups = [structure.header, structure.footer, structure.content];
  let height = _.sumBy(groups, g => {
    if(!g || !g.elements.length) return 0;

    const elementHeight = _.sumBy(g.elements, el => 
      _.sum([el._computed.h, el._computed.mt, el._computed.mb])
    )
    
    return elementHeight + structure.border._computed.y;
  })

  // height -= structure[structure.header ? 'header' : 'content'].elements[0]._computed.mt;
  // height -= _.last(structure[structure.footer ? 'footer' : 'content'].elements)._computed.mb;

  return height;
}



// Properties that effect size
  // [x] line breaks
  // [x] font size
  // [x] font family
  // [x] (font weight, font style)
  // padding & margins

  // base size
    // padding

  // line height is based on text size



// The algorithm doesn't know when to break rules. That requires an expert?