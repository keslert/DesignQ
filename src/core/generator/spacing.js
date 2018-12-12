import _ from 'lodash';

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
    }
  })

  const subGroups = _.reduce(elements.slice(1), (res, el) => {
    if(isTextElement(el.type) && isTextElement(el._computed.prev.type)) {
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
    const isTextGroup = isTextElement(firstItem.type);
    if(isTextGroup) {
      const largestFontSize = _.maxBy(subGroup, item => item._computed.fontSize)._computed.fontSize;
      const marginBottom = Math.min(
        structure.px, 
        largestFontSize / Math.log(largestFontSize * .3)
      );
      subGroup.forEach(item => {
        item._computed.mb = marginBottom;
      });
      
      if((i === 0 && options.first) || group.background) {
        firstItem._computed.mt = structure.py;
      }
      if((i === lastSubGroupIndex && options.last) || group.background) {
        lastItem._computed.mb = structure.py;
      }
    } 
  })

}

const TEXT_ELEMENT_TYPES = {
  dominant: true,
  small: true,
  bridge: true,
  bar: true,
}
function isTextElement(type) {
  return TEXT_ELEMENT_TYPES[type];
}

function isHeaderOrFooter(type) {
  return type === 'header' || type === 'footer';
}