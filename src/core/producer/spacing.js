import _ from 'lodash';
import { scaleElementFontSizes } from './sizes';

export function computeSpacing(structure) {
  computeGroupElementSpacing(structure.header, structure, {first: true});
  computeGroupElementSpacing(structure.footer, structure, {last: true});
  computeGroupElementSpacing(structure.content, structure, {first: !structure.header, last: !structure.footer});
}

function computeGroupElementSpacing(group, structure, options) {
  if(!group) return;

  const elements = group.elements;

  elements.forEach(el => {
    if(el.lines && el.background) {
      // TODO: Why this? Relative padding, but more for smaller items.
      el._computed.px = el._computed.fontSize / Math.log(el._computed.fontSize * .3);
      el._computed.py = el._computed.fontSize / Math.log(el._computed.fontSize * .2);
      if(el.px) el._computed.px *= el.px;
      if(el.py) el._computed.py *= el.py;

      const scale = (el._computed.w - el._computed.px * 2) / el._computed.w;
      scaleElementFontSizes(el, scale);
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

  // TODO: I don't think this is 100% accurate.
  // const images = _.filter(elements, el => el.type === 'image');
  // images.forEach(img => {
  //   img._computed.mx = structure.px;
  //   img._computed.mb = structure.
  // })

  
  const lastSubGroupIndex = subGroups.length - 1;
  subGroups.forEach((subGroup, i) => {
    const firstItem = subGroup[0];
    const lastItem = subGroup[subGroup.length - 1];
    const isInlineGroup = isInlineElement(firstItem);
    if(isInlineGroup) {
      const largestFontSize = _.maxBy(subGroup, item => item._computed.fontSize)._computed.fontSize;
      const marginBottom = Math.min(
        structure.px, 
        largestFontSize / Math.log(largestFontSize * .3)
      );

      subGroup.forEach(item => {
        item._computed.mb = marginBottom * (item.mb || 1);
      });
      
      if((options.first && i === 0) || group.background) {
        if(!isFullBleedImage(firstItem)) {
          firstItem._computed.mt = structure.py;
        }
      }
      if((i === lastSubGroupIndex && options.last) || group.background) {
        if(!isFullBleedImage(lastItem)) {
          lastItem._computed.mb = structure.py;
        }
      }
    } 
  })

}

const INLINE_ELEMENTS = {
  dominant: true,
  small: true,
  bridge: true,
  bar: true,
  logo: true,
}
function isInlineElement(el) {
  return INLINE_ELEMENTS[el.type] || (el.type === 'image' && el.bleed !== 'full')
}

function isFullBleedImage(el) {
  return el.type === 'image' && el.bleed === 'full';
}