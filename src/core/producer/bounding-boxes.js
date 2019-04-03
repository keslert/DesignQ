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
  
  // We have to compute body last because we 
  // don't know the fill height until body 
  // and footer are in place due to bleeds.
  computeHeaderFooterHeight(template);
  computeHeaderFooterTop(template);  
  computeBodyHeight(template);
  computeBodyTop(template);

  computeElementHeights(template);
  computeElementTops(template);

  computeElementOverlap(template);
}

function computeElementOverlap(template) {
  withGroups(template, g => {
    const el = g.elements[0];
    if(el && el.overlap) {
      const top = g._computed.bb.t - el._computed.bb.h * el.overlap;
      const diffT = el._computed.bb.t - top;
      
      g._computed.bb.h -= diffT;
      g.elements.forEach(el => el._computed.bb.t -= diffT)
      
      const offset = calculateTop(g.alignY, 0, diffT);

      g._computed.bb.t += offset;
      g.elements.forEach(el => el._computed.bb.t += offset)
    }
  })
}


function computeElementAutoWidths(template) {
  withGroups(template, g => g.elements.forEach(el => {
    // TODO: Add border?
    const ePad = el._computed.pl + el._computed.pr;
    el._computed.bb.autoW = el._computed.w + ePad;
  }))
}

function computeGroupAutoWidths(template) {
  withGroups(template, g => {
    const widths = g.elements.map(el => {
      const pad = _.sum(getEdgeValues(el, ['l', 'r'], 'group-padding'));
      return el._computed.bb.autoW + pad;
    })
    const maxElementWidth = _.max(widths) || 0;
    // const maxElementWidth = maxElement ? maxElement._computed.bb.autoW : 0;
    const border = g.border._computed.l + g.border._computed.r;
    // const pad = g._computed.pl + g._computed.pr;
    // const pad = _.sum(getEdgeValues(g, ['l', 'r'], 'content-padding'));
    g._computed.bb.autoW = maxElementWidth + border;
  })
}

function computeContentAutoWidth(template) {
  const content = template.content;
  const maxGroupWidth = _.max(withGroups(template, g => {
    const pad = _.sum(getEdgeValues(g, ['l', 'r'], 'content-padding'));
    return g._computed.bb.autoW + pad;
  }));
  const { l: borderL, r: borderR} = content.border._computed;
  const border = borderL + borderR;

  content._computed.bb.autoW = maxGroupWidth + border;
}

function computeContentWidth(template) {
  const c = template.content._computed;
  c.bb.w = template.content.w === 'fill' ? c.maxW : c.bb.autoW;
}

function computeGroupWidths(template) {
  withGroups(template, g => {
    const c = g._computed;
    c.bb.w = (g._w === 'fill') 
      ? template._computed.size.w - c.ml - c.mr
      : c.bb.autoW
  })
}

function computeElementWidths(template) {
  withGroups(template, g => g.elements.forEach(el => {
    const c = el._computed;
    c.bb.w = (el._w === 'fill') 
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
    const borderHeight = el ? _.sum(getEdgeValues(el, ['t', 'b'], 'group-border')) : 0;
    const padHeight = el ? _.sum(getEdgeValues(el, ['t', 'b'], 'group-padding')) : 0;

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

function computeHeaderFooterHeight(template) {
  // Header and footer are always autoH;
  withGroups(template, g => {
    g._computed.bb.h = g._computed.bb.autoH
  }, ['header', 'footer']);
}

function computeHeaderFooterTop(template) {
  if(template.content.header) {
    computeHeaderTop(template, template.content.header)
  }
  if(template.content.footer) {
    computeFooterTop(template, template.content.footer)
  }
}

function computeBodyHeight(template) {
  const { header=false, footer=false, body } = template.content;
  if(body.h === 'fill') {
    const top = header
      ? header._computed.bb.t + header._computed.bb.h + header._computed.mb
      : _.sumBy(body._computed.edges.t, e => e.value);

    const mb = _.sumBy(body._computed.edges.b, e => e.value)
    const bot = footer
      ? footer._computed.bb.t - body._computed.mb
      : template._computed.bb.h - mb

    body._computed.bb.h = Math.max(body._computed.bb.autoH, bot - top);
  } else {
    body._computed.bb.h = body._computed.bb.autoH
  }
}

function computeElementHeights(template) {
  withGroups(template, g => g.elements.forEach(el => {
    el._computed.bb.h = el._computed.bb.autoH;
    if(el.h === 'fill') {
      el._computed.bb.h += g._computed.bb.h - g._computed.bb.autoH;
      
      // TODO: The following is correct, but need to have a better height
      // reducer calculation for this to work...
      // el._computed.bb.h = Math.max(el._computed.bb.autoH, el._computed.bb.h);
    } 
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

function computeBodyTop(template) {
  const content = template.content;
  const { header=false, body, footer=false } = content;

  let start = _.sumBy(body._computed.edges.t, e => e.value);
  const bodyPadTop = _.sumBy(body._computed.edges.t, e => e.value);
  const bodyPadBot = _.sumBy(body._computed.edges.b, e => e.value);

  let space = template._computed.size.h - body._computed.bb.h - bodyPadTop - bodyPadBot;

  if(header) {
    start = header._computed.bb.t + header._computed.bb.h + header._computed.mb;
    const end = template._computed.size.h - body._computed.bb.h - bodyPadBot;
    space = end - start;
  }
  if(footer) {
    const end = footer._computed.bb.t - body._computed.mb - body._computed.bb.h;
    space = end - start;
  }
  body._computed.bb.t = calculateTop(body.alignY, start, space);
}

function computeElementTops(template) {
  withGroups(template, g => {
    const el = g.elements[0];

    const pads = el ? getEdgeValues(el, ['t', 'b'], 'group-padding') : 0;
    const borders = el ? getEdgeValues(el, ['t', 'b'], 'group-border') : 0;
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

    
    // TODO: Handle first sticky elements
    const last = _.last(g.elements);
    if(last && last.sticky) {
      const gBot = g._computed.bb.t + g._computed.bb.h;
      const lBot = last._computed.bb.t + last._computed.bb.h;
      const diffT = gBot - lBot + g._computed.mb;
      
      last._computed.bb.t += diffT;
      g.elements.forEach(el => {
        if(el !== last) {
          el._computed.bb.t += diffT / 2;
        }
      })

    }

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