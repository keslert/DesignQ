import _ from 'lodash';
import { scaleElementFontSizes } from './sizes';
import { withGroups, withSides } from '.';

export function computeSpacing(template) {
  const dominant = _.find(template.content.body.elements, e => e.type === 'dominant');
  const elementSpacing = Math.log(dominant._computed.fontSize * .2) * 10;

  const c = template.content._computed;
  withSides(s => c[`m${s}`] = _.sumBy(c.edges[s], e => e.value))

  const groupSpacing = template.content._computed.pt / 2;
  computeGroupSpacing(template, groupSpacing);

  withGroups(template, g => computeGroupElementSpacing(g, elementSpacing));
}

function computeGroupSpacing(template, spacing) {
  withGroups(template, g => {
    g._computed.ml = _.sumBy(g._computed.edges.l, e => e.value)
    g._computed.mr = _.sumBy(g._computed.edges.r, e => e.value)
    g._computed.mt = 0;
    g._computed.mb = 0;
  })  
  if(template.content.header) {
    const header = template.content.header
    header._computed.mb = spacing * header.mb
  }
  if(template.content.footer) {
    const body = template.content.body;
    body._computed.mb = spacing * body.mb;
  }
}

function computeGroupElementSpacing(group, spacing) {
  const elements = group.elements;

  elements.forEach(el => {
    const c = el._computed;
    withSides(s => c[`p${s}`] = 0);
    withSides(s => c[`m${s}`] = _.sumBy(c.edges[s], e => e.value), ['l', 'r']);
    c.mt = 0;
    c.mb = spacing * el.mb;

    if(el.lines) {
      const x = c.h / Math.log(c.h * .4);
      const y = c.h / Math.log(c.h * .3);
      const pads = {l: x, r: x, t: y, b: y};
      withSides(s => {
        const ps = `p${s}`;
        c[ps] += el.border._computed[s];
        if(el.background || el.border._computed[s]) {
          c[ps] += pads[s];
        }
      })
      c.h += c.pt + c.pb;
      const scale = (c.w - c.pr - c.pl) / c.w;
      scaleElementFontSizes(el, scale);
    }


    // if(el.lines) {
    //   const x = c.h / Math.log(c.h * .4);
    //   const y = c.h / Math.log(c.h * .3);

    //   withSides(s => c[`p${s}`] = x * el[`p${s}`], ['l', 'r'])
    //   withSides(s => c[`p${s}`] = y * el[`p${s}`], ['t', 'b'])

    //   c.h += c.pt + c.pb;
    //   const scale = (c.w - c.pr - c.pl) / c.w;
    //   scaleElementFontSizes(el, scale);
    // }
    
    if(el.type === 'icon' && el.background) { 
      const pad = c.w * .2; // TODO: WHY?
      withSides(s => c[`p${s}`] = pad * el[`p${s}`])
      // c.h -= c.pt + c.pb;
      c.w -= c.pr + c.pl;
    }
  })
  
  const last = _.last(elements);
  last._computed.mb = 0;
  if(last.sticky) {
    if(last._computed.prev) {
      last._computed.prev._computed.mb = 0;
    }
  }

  elements.forEach(el => {
    if(el.overlap) {
      el._computed.mt = el._computed.h * -el.overlap;
    }
  })
}

function isFullBleedImage(el) {
  return el.type === 'image' && (el.bleed.left && el.bleed.right);
}