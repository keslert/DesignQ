import _ from 'lodash';
import { withSides, withGroups } from '.';
import { computeBorder } from './borders';

// for each nesting
// border
// decor
// edge padding

export function computeEdges(template) {
  const size = template._computed.size;
  const basePad = size.w * 0.07;
  const content = template.content;

  // template
  withSides(s => template._computed[`p${s}`] = basePad * template[`p${s}`]);
  computeBorder(template.border, size);
  computeBorder(template.decor, size);
  template._computed.maxW = size.w;

  // content
  withSides(s => content._computed[`p${s}`] = basePad * content[`p${s}`]);
  computeContentEdges(template);
  computeBorder(content.border, size);
  
  // groups
  withGroups(template, group => {
    withSides(s => group._computed[`p${s}`] = basePad * group[`p${s}`]);
    computeBorder(group.border, size);
    computeGroupEdges(template, group);
  })
  if(content.header) {
    content.header._computed.edges.b = [];
    content.body._computed.edges.t = [];
  }
  if(content.footer) { 
    content.body._computed.edges.b = []; 
    content.footer._computed.edges.t = [];
  }

  // elements
  withGroups(template, group => group.elements.forEach(el => {
    computeBorder(el.border, size);
    computeElementEdges(template, group, el)
  }))
}

function computeContentEdges(template) {
  const content = template.content;
  content._computed.edges = {};
  content._computed.canBleed = {};

  withSides(s => {
    const edges = [];
    if(template.border._computed[s]) {
      edges.push({
        value: template.border._computed[s],
        type: 'flyer-border',
      });
    }
    if(template.decor._computed[s]) {
      edges.push({
        value: template.decor._computed[s] - template.border._computed[s],
        type: 'flyer-decor',
      });
    }
    // template always has a background so push padding
    edges.push({
      value: template._computed[`p${s}`],
      type: 'flyer-padding',
    })
    
    const canBleed = canItemBleed(content, s);
    content._computed.canBleed[s] = canBleed;
    content._computed.edges[s] = spliceEdges(edges, canBleed ? content.bleed[s] : 0);
  });
  
  content._computed.maxW = getWidth(template._computed.size.w, content._computed.edges);
}

function computeGroupEdges(template, group) {
  const content = template.content;
  group._computed.edges = {};
  group._computed.canBleed = {};

  withSides(s => {
    // TODO for t,b if content has background or border, clear our 
    // flyer-[padding, decor, padding]
    const hasEdge = hasBackground(content) || content.border._computed[s];

    const edges = [...content._computed.edges[s]]

    if(content.border._computed[s]) {
      edges.push({
        value: content.border._computed[s],
        type: 'content-border',
      })
    }
    if(hasEdge) {
      edges.push({
        value: content._computed[`p${s}`],
        type: 'content-padding',
      });
    }

    const canBleed = canItemBleed(group, s);
    group._computed.canBleed[s] = canBleed;
    group._computed.edges[s] = spliceEdges(edges, canBleed ? group.bleed[s] : 0);
  });

  group._computed.maxW = getWidth(template._computed.size.w, group._computed.edges);
}

function computeElementEdges(template, group, el) {
  el._computed.edges = {};
  el._computed.canBleed = {};

  withSides(s => {
    const edges = [...group._computed.edges[s]];

    if(group.border._computed[s]) {
      edges.push({
        value: group.border._computed[s],
        type: 'group-border',
      })
    }
    if(group.border._computed[s] || hasBackground(group)) {
      edges.push({
        value: group._computed[`p${s}`],
        type: 'group-padding',
      });
    }

    // if the element has a background, we'll deal with the bleed later...
    // this might not be the right approach.
    // el._computed.edges[s] = el.background ? edges : spliceEdges(edges, el.bleed[s])

    const canBleed = canItemBleed(el, s);
    el._computed.canBleed[s] = canBleed;
    el._computed.edges[s] = spliceEdges(edges, canBleed ? el.bleed[s] : 0);
  });

  el._computed.maxW = getWidth(template._computed.size.w, el._computed.edges);
}

function spliceEdges(edges, bleed) {
  return edges.slice(0, Math.max(0, edges.length - bleed));
}

function getWidth(width, edges) {
  return width - _.sum([...edges.l, ...edges.r].map(e => e.value))
}


function canItemBleed(item, s) {
  return item[SideToWH[s]] === 'fill' 
    || isAlignedInDirection(item, s) 
    || isForemostInDirection(item, s);
}

function isAlignedInDirection(item, s) {
  if(item.kind === 'element') {
    return item._parent['itemsAlign' + SideToXY[s]] === SideToSide[s];
  }
  return item['align' + SideToXY[s]] === SideToSide[s];
}

function isForemostInDirection(item, s) {
  return SideToXY[s] === 'Y' && item.kind === 'group' && (
    (s === 't' && !item._computed.prev) ||
    (s === 'b' && !item._computed.next)
  )
}

function hasBackground(item) {
  return item.background && (item.background.color || item.background.img);
}

const SideToWH = {
  l: '_w',
  r: '_w',
  t: '_h',
  b: '_h',
}
const SideToXY = {
  l: 'X',
  r: 'X',
  t: 'Y',
  b: 'Y',
}
const SideToSide = {
  'l': 'left',
  'r': 'right',
  't': 'top',
  'b': 'bottom',
}