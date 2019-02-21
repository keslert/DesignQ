import _ from 'lodash';
import { withGroups, withSides } from './';

/*
w = 600
h = 800

- flyer
  - width: 100%
  - height: 100%
  - border
  - decor
  - padding
  - alignX
  - alignY

  content
    - width: auto | fill
    - height: auto | fill
    - border
    - padding
    - alignX
    - alignY

    group
      - width: auto | fill
      - height: auto | (body: fill)
      - border
      - padding
      - alignX
      - alignY
      - marginBottom

      element
      - width: auto | fill
      - height: auto;
      - border
      - textAlign
*/


// Who can bleed.t/b? Content, Top group, bottom group
// Siblings can't bleed across siblings. They can control spacing with mb of the first sibling.
// Elements will never bleed out of the top or bottom of the group. They may have an offset, but that's it.

// only body, can bleed top and bottom
// header and body




export function computeBoundingBoxes(template) {
  initBBs(template);

  computeVertical(template);
  computeHorizontal(template);
}

function initBBs(template) {
  template._computed.bb = {...template._computed.size, l: 0, t: 0};
  template.content._computed.bb = {};
  withGroups(template, g => g._computed.bb = {});
  withGroups(template, g => g.elements.forEach(el => el._computed.bb = {}));
}

function computeHorizontal(template) {
  computeElementAutoWidths(template);
  computeGroupAutoWidths(template);
  computeContentAutoWidth(template);

  computeContentWidth(template);
  computeContentLeft(template);

  computeGroupWidths(template);
  computeGroupLefts(template);

  computeElementWidths(template);
  computeElementLefts(template);

  computeElementPadBleeds(template);
}

function computeVertical(template) {
  computeElementAutoHeights(template);
  computeGroupAutoHeights(template);
  computeContentAutoHeight(template);

  computeContentHeight(template);
  computeContentTop(template);
  
  computeGroupHeights(template);
  computeGroupTops(template);

  computeElementHeights(template);
  computeElementTops(template);
}

function computeElementAutoWidths(template) {
  withGroups(template, g => g.elements.forEach(el => {
    el._computed.bb.autoW = el._computed.w + el._computed.pl + el._computed.pr;
  }))
}

function computeGroupAutoWidths(template) {
  withGroups(template, g => {
    const maxElementWidth = _.maxBy(g.elements, el => el._computed.bb.autoW)._computed.bb.autoW;
    const borderWidth = g.border._computed.l + g.border._computed.r;
    const padWidth = g._computed.pl + g._computed.pr;
    g._computed.bb.autoW = maxElementWidth + borderWidth + padWidth;
  })
}

function computeContentAutoWidth(template) {
  // group width + content border + content pad;
  const maxGroupWidth = _.max(withGroups(template, g => {
    const width = g._computed.bb.autoW
    const border = _.sum(getEdgeValues(g, ['l', 'r'], 'content-border'));
    const pad = _.sum(getEdgeValues(g, ['l', 'r'], 'content-padding'));
    
    return width + border + pad;
  }));

  template.content._computed.bb.autoW = maxGroupWidth;
}

function computeContentWidth(template) {
  const c = template.content._computed;
  c.bb.w = template.content.w === 'fill' ? c.maxW : c.bb.autoW;
}

function computeGroupWidths(template) {
  withGroups(template, g => {
    const c = g._computed;
    c.bb.w = (g.w === 'fill') 
      ? template._computed.size.w - c.ml - c.mr
      : c.bb.autoW
  })
}

function computeElementWidths(template) {
  withGroups(template, g => g.elements.forEach(el => {
    const c = el._computed;
    c.bb.w = (el.w === 'fill') 
      ? template._computed.size.w - c.ml - c.mr
      : c.bb.autoW
  }))
}

function computeElementAutoHeights(template) {
  withGroups(template, g => g.elements.forEach(el => {
    el._computed.bb.autoH = el._computed.h;
  }))
}

function computeGroupAutoHeights(template) {
  withGroups(template, g => {
    const elementHeight = _.sum(g.elements.map(el => el._computed.bb.autoH + el._computed.mb));
    const el = g.elements[0];
    const borderHeight = _.sum(getEdgeValues(el, ['t', 'b'], 'group-border'));
    const padHeight = _.sum(getEdgeValues(el, ['t', 'b'], 'group-padding'));

    g._computed.bb.autoH = elementHeight + borderHeight + padHeight;
  })
}

function computeContentAutoHeight(template) {
  const content = template.content;
  const totalHeight = _.sum(withGroups(template, g => {
    const { bb: { autoH }, mb } = g._computed;
    const borderHeight = _.sum(getEdgeValues(g, ['t', 'b'], 'content-border'));
    const padHeight = _.sum(getEdgeValues(g, ['t', 'b'], 'content-padding'));
    
    return autoH + mb + borderHeight + padHeight;
  }));
  
  content._computed.bb.autoH = totalHeight;
}

function computeContentHeight(template) {
  const c = template.content._computed;
  c.bb.h = (template.content.h === 'fill') 
    ? template._computed.size.h - c.mt - c.mb 
    : c.bb.autoH;
}

function computeGroupHeights(template) {
  const c = template.content._computed;
  withGroups(template, g => g._computed.bb.h = g._computed.bb.autoH);
  if(template.content.body.h === 'fill') {
    template.content.body._computed.bb.h += c.bb.h - c.bb.autoH;
  }
}

function computeElementHeights(template) {
  withGroups(template, g => g.elements.forEach(el => {
    el._computed.bb.h = el._computed.bb.autoH;
  }))
}

function computeContentLeft(template) {
  const content = template.content;
  const c = content._computed;

  const diffW = c.maxW - c.bb.w;
  c.bb.l = calculateLeft(content.alignX, c.ml, diffW)
  const diffL = c.bb.l - c.ml;
  const diffR = diffW - diffL;
  const edgeUpdates = { l: diffL, r: diffR };

  withGroups(template, g => {
    const types = ['flyer-padding', 'content-padding']
    updatePriorityEdges(g, types, edgeUpdates);
    g.elements.forEach(el => updatePriorityEdges(el, types, edgeUpdates));
  })
}

function computeContentTop(template) {
  const size = template._computed.size;
  const c = template.content._computed;

  const diffH = size.h - c.mt - c.mb - c.bb.h;
  c.bb.t = calculateTop(template.content.alignY, c.mt, diffH)
  const diffT = c.bb.t - c.mt;
  const diffB = diffH - diffT;
  const edgeUpdates = { t: diffT, b: diffB };

  const types = ['flyer-padding', 'content-padding']
  withGroups(template, g => updatePriorityEdges(g, types, edgeUpdates))
}

function computeGroupLefts(template) {
  withGroups(template, g => {
    const c = g._computed;
    const diffW = template._computed.bb.w - c.bb.w - c.ml - c.mr;
    g._computed.bb.l = calculateLeft(g.alignX, c.ml, diffW);
    const diffL = c.bb.l - c.ml;
    const diffR = diffW - diffL;
    const edgeUpdates = { l: diffL, r: diffR };

    // TODO: I'm pretty sure this needs to update content-padding, but if
    // content-padding doesn't exist, then group-padding.
    const types = ['content-padding', 'group-padding']
    g.elements.forEach(el => updatePriorityEdges(el, types, edgeUpdates));
  })
}

function computeElementLefts(template) {
  withGroups(template, g => g.elements.forEach(el => {
    const c = el._computed;
    const diffW = template._computed.bb.w - c.bb.w - c.ml - c.mr;
    el._computed.bb.l = calculateLeft(g.itemsAlignX, c.ml, diffW);
  }))
}

function computeGroupTops(template) {
  const content = template.content;
  const c = content._computed;
  const { header=false, body, footer=false } = content;

  let start = _.sumBy(body._computed.edges.t, e => e.value);
  const bodyPadTop = _.sumBy(body._computed.edges.t, e => e.value);
  const bodyPadBot = _.sumBy(body._computed.edges.b, e => e.value);

  let space = template._computed.size.h - body._computed.bb.h - bodyPadTop - bodyPadBot;

  if(header) {
    computeHeaderTop(content, header);

    start = header._computed.bb.t + header._computed.bb.h + header._computed.mb;
    // const end = c.bb.t + c.bb.h - padBottom - padTop - body._computed.bb.h;
    const end = template._computed.size.h - body._computed.bb.h - bodyPadBot;
    space = end - start;
  }
  if(footer) {
    computeFooterTop(template, footer);
    const end = footer._computed.bb.t - body._computed.mb - body._computed.bb.h;
    space = end - start;
  }
  body._computed.bb.t = calculateTop(body.alignY, start, space);
}

function computeElementTops(template) {
  withGroups(template, g => {
    const el = g.elements[0];

    const pads = getEdgeValues(el, ['t', 'b'], 'group-padding');
    const borders = getEdgeValues(el, ['t', 'b'], 'group-border');
    const spaceTop = pads[0] + borders[0];
    const spaceBottom = pads[1] + borders[1];

    const totalAvailableSpace = g._computed.bb.h - spaceTop - spaceBottom;
    const totalElementHeight = _.sumBy(g.elements, el => el._computed.bb.h + el._computed.mb);

    const start = g._computed.bb.t + spaceTop;
    const space = totalAvailableSpace - totalElementHeight;
    
    let y = calculateTop(g.itemsAlignY, start, space);

    g.elements.forEach(el => {
      el._computed.bb.t = y;
      y += el._computed.bb.h + el._computed.mb;
    })
  })
}

function computeHeaderTop(template, header) {
  const mt = _.sumBy(header._computed.edges.t, e => e.value)
  header._computed.bb.t = mt
}

function computeFooterTop(template, footer) {
  const mb = _.sumBy(footer._computed.edges.b, e => e.value)
  footer._computed.bb.t = template._computed.size.h - footer._computed.bb.h - mb;
}

function computeElementPadBleeds(template) {
  withGroups(template, g => g.elements.forEach(el => {
    withSides(s => {
      const pd = 'p' + s;
      const edges = el.bleed[pd] ? el._computed.edges[s].slice(-el.bleed[pd]) : []
      const padBleed = _.sumBy(edges, e => e.value);

      if(padBleed) {
        el._computed[pd] = padBleed;
        if(s === 'l') {
          el._computed.bb.l -= padBleed;
        }
        el._computed.bb.w += padBleed;
      }

    }, ['l', 'r']);
  }))
}

function calculateTop(alignY, start, space) {
  if(alignY === 'top') return start;
  if(alignY === 'center') return start + space / 2;
  return start + space;
}

function calculateLeft(alignX, start, space) {
  if(alignX === 'left') return start;
  if(alignX === 'center') return start + space / 2;
  return start + space;
}


// Updates the first types 
function updatePriorityEdges(item, types, edgeUpdates) {
  _.forEach(edgeUpdates, (v, side) => {
    for(let i = 0; i < types.length; i++) {
      const edge = getEdge(item, side, types[i]);
      if(edge) {
        edge.value += v;
        item._computed[`m${side}`] += v;
        break;
      }
    }
  })
}

function getEdge(item, side, type) {
  return _.find(item._computed.edges[side], e => e.type === type);
}

function getEdgeValues(item, sides, type) {
  return sides.map(s => {
    const edge = getEdge(item, s, type)
    return edge ? edge.value : 0;
  })
}