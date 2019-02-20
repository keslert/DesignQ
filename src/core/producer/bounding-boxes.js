import _ from 'lodash';
import { withGroups } from './';

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
}

function computeElementAutoWidths(template) {
  withGroups(template, g => g.elements.forEach(el => {
    el._computed.bb.autoW = el._computed.w;
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
    c.bb.w = (el.w === 'fill') ? c.maxW : c.bb.autoW;
  }))
}


function computeVertical(template) {
  computeGroupAutoHeights(template);
  computeContentAutoHeight(template);

  computeContentHeight(template);
  computeContentTop(template);
  
  computeGroupHeights(template);
  computeGroupTops(template);
}

function computeGroupAutoHeights(template) {
  withGroups(template, g => {
    const elementHeight = _.sum(g.elements.map(el => el._computed.h + el._computed.mb));
    const borderHeight = g.border._computed.t + g.border._computed.b;
    const padHeight = g._computed.pt + g._computed.pb;
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

function computeContentLeft(template) {
  const content = template.content;
  const c = content._computed;

  const diffW = c.maxW - c.bb.w;
  c.bb.l = calculateLeft(content.alignX, c.ml, diffW)
  const diffL = c.bb.l - c.ml;
  const diffR = diffW - diffL;
  const edgeUpdates = { l: diffL, r: diffR };

  withGroups(template, g => {
    updateEdges(g, 'flyer-padding', edgeUpdates);
    g.elements.forEach(el => updateEdges(el, 'flyer-padding', edgeUpdates));
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

  withGroups(template, g => {
    updateEdges(g, 'flyer-padding', edgeUpdates);
    // g.elements.forEach(el => updateEdges(el, 'flyer-padding', edgeUpdates));
  })

}

function computeGroupLefts(template) {
  withGroups(template, g => {
    const c = g._computed;
    const diffW = template._computed.bb.w - c.bb.w - c.ml - c.mr;
    g._computed.bb.l = calculateLeft(g.alignX, c.ml, diffW);
    const diffL = c.bb.l - c.ml;
    const diffR = diffW - diffL;
    const edgeUpdates = { l: diffL, r: diffR };

    g.elements.forEach(el => updateEdges(el, 'content-padding', edgeUpdates));
  })
}

function computeGroupTops(template) {
  const content = template.content;
  const c = content._computed;
  const { header=false, body, footer=false } = content;

  let start = _.sumBy(body._computed.edges.t, e => e.value);

  const bodyPadTop = 
      _.sum(getEdgeValues(body, ['t'], 'content-border'))
    + _.sum(getEdgeValues(body, ['t'], 'content-padding'))
  const bodyPadBot = 
      _.sum(getEdgeValues(body, ['b'], 'content-border'))
    + _.sum(getEdgeValues(body, ['b'], 'content-padding'))

  let space = c.bb.h - body._computed.bb.h - bodyPadTop - bodyPadBot;

  if(header) {
    computeHeaderTop(content, header);

    start = header._computed.bb.t + header._computed.bb.h + header._computed.mb;
    const end = c.bb.t + c.bb.h - bodyPadBot - body._computed.bb.h;
    space = end - start;
  }
  if(footer) {
    computeFooterTop(template, footer);
    const end = footer._computed.bb.t - body._computed.mb - body._computed.bb.h;
    space = end - start;
  }
  body._computed.bb.t = calculateTop(body.alignY, start, space);
}

function computeHeaderTop(template, header) {
  const mt = _.sumBy(header._computed.edges.t, e => e.value)
  header._computed.bb.t = mt
}

function computeFooterTop(template, footer) {
  const mb = _.sumBy(footer._computed.edges.b, e => e.value)
  footer._computed.bb.t = template._computed.size.h - footer._computed.bb.h - mb;
}

function computeElementLefts(template) {
  withGroups(template, g => g.elements.forEach(el => {
    el._computed.bb.l = el._computed.ml;
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

function updateEdges(item, type, edgeUpdates) {
  _.forEach(edgeUpdates, (v, side) => {
    const edge = getEdge(item, side, type);
    if(edge) {
      edge.value += v;
      if(item.isElement && item.background) {
        item._computed[`p${side}`] += v;
      }
      else {
        item._computed[`m${side}`] += v;
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