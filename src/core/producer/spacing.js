import _ from 'lodash';
import { scaleElementFontSizes } from './sizes';

const MAX_MARGIN_BOTTOM = 40

export function computeSpacing(structure) {
  computeGroupElementSpacing(structure.header, structure, {top: true});
  computeGroupElementSpacing(structure.footer, structure, {bottom: true});
  computeGroupElementSpacing(structure.content, structure, {top: true, bottom: true});
}

function computeGroupElementSpacing(group, structure, options) {
  if(!group) return;

  const elements = group.elements;
  const border = structure.border._computed;

  
  const bleed = group.bleed || {};
  group._computed.ml = bleed && bleed.left ? bleed.border ? 0 : border.l : structure.pl + border.l;
  group._computed.mr = bleed && bleed.right ? bleed.border ? 0 : border.r : structure.pr + border.r;
  group._computed.mt = bleed && bleed.top ? bleed.border ? 0 : border.t : structure.pt + border.t;
  group._computed.mb = bleed && bleed.bottom ? bleed.border ? 0 : border.b : structure.pb + border.b;

  elements.forEach(el => {
    const c = el._computed;
    c.pl = c.pr = c.pt = c.pb = 0;
    c.mt = c.mb = 0;
    
    c.ml = structure.px * (group.px || group.pl || 1);
    c.mr = structure.px * (group.px || group.pr || 1);
    
    if((el.lines && el.background) || (el.type === 'logo' && el.color)) { 

      if(el.lines) {
        if(!el.bleed || !el.bleed.left) {
          c.pl = c.fontSize / Math.log(c.fontSize * .3);
        }
        if(!el.bleed || !el.bleed.right) {
          c.pr = c.fontSize / Math.log(c.fontSize * .3);
        }
        c.pt = c.pb = c.fontSize / Math.log(c.fontSize * .2);
      } else { 
        c.pl = c.pr = c.fontSize / Math.log(c.fontSize * .3);
        c.pt = c.pb = c.fontSize / Math.log(c.fontSize * .3);
      }
      
      c.pl *= el.pl;
      c.pr *= el.pr;
      c.pt *= el.pt;
      c.pb *= el.pb;

      if(el.lines) {
        const scale = (c.w - c.pr - c.pl) / c.w;
        scaleElementFontSizes(el, scale);
      } else {
        c.h += c.pt + c.pb;
        c.w += c.pr + c.pl;
      }
    }
  })

  elements.forEach(el => {
    const c = el._computed;
    if(el.bleed) {
      if(el.bleed.left) {c.pl += c.ml; c.ml = 0};
      if(el.bleed.right) {c.pr += c.mr; c.mr = 0};
      if(el.bleed.top) {c.pt += c.mt; c.mt = 0};
      if(el.bleed.bottom) {c.pb += c.mb; c.mb = 0};
    }
  })

  const subGroups = _.reduce(elements.slice(1), (res, el) => {
    if(isInlineElement(el) && isInlineElement(el._computed.prev)) {
      res[res.length - 1].push(el);
    } else {
      res.push([el]);
    }
    return res;
  }, [[elements[0]]])

  const lastSubGroupIndex = subGroups.length - 1;
  subGroups.forEach((subGroup, i) => {
    const firstItem = subGroup[0];
    const lastItem = subGroup[subGroup.length - 1];
    const isInlineGroup = isInlineElement(firstItem);
    if(isInlineGroup) {
      const largestFontSize = _.maxBy(subGroup, item => item._computed.fontSize)._computed.fontSize;
      const mb = Math.min(
        MAX_MARGIN_BOTTOM,
        largestFontSize / Math.log(largestFontSize * .3)
      ) * (group.mb || 1);

      subGroup.forEach(item => {
        if(!item.bleed || !item.bleed.bottom) {
          item._computed.mb = mb * (item.mb || 1);
        }
      });
      
      if((options.top && i === 0) || group.background) {
        if(!firstItem.bleed || !firstItem.bleed.top) {
          firstItem._computed.mt = structure.pt * group.pt;
        }
      }
      
      if((options.bottom && i === lastSubGroupIndex) || group.background) {
        if(!lastItem.bleed || !lastItem.bleed.bottom) {
          lastItem._computed.mb = structure.pb * group.pb;
        }
      }
    } 
  })

  elements.forEach(el => {
    const c = el._computed;
    if(el.overlap) {
      c.mt = -c.h * el.overlap;
    }
  })

}

const INLINE_ELEMENTS = {
  dominant: true,
  small: true,
  paragraph: true,
  heading: true,
  bridge: true,
  bar: true,
  logo: true,
}
function isInlineElement(el) {
  return INLINE_ELEMENTS[el.type] || !isFullBleedImage(el)
}

function isFullBleedImage(el) {
  return el.type === 'image' && el.bleed && (el.bleed.left && el.bleed.right);
}