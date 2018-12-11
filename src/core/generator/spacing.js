import _ from 'lodash';

export function computeSpacing(structure) {
  const elements = structure.content.elements;

  elements.forEach(el => {
    if(el.lines && el.background) {
      el._computed.px = el._computed.fontSize * 0.6;
      el._computed.py = el._computed.fontSize * 0.5;
    }
  })


  const groups = _.reduce(elements.slice(1), (res, el, i) => {
    if(isTextElement(el.type) && isTextElement(elements[i].type)) {
      res[res.length - 1].push(el);
    } else {
      res.push([el]);
    }
    return res;
  }, [[elements[0]]])
  
  groups.forEach(group => {
    const firstItem = group[0];
    const isTextGroup = isTextElement(firstItem.type);
    if(isTextGroup) {
      const largestFontSize = _.maxBy(group, item => item._computed.fontSize)._computed.fontSize;
      const marginBottom = Math.min(structure.px, largestFontSize * .36);
      group.forEach(item => {
        item._computed.mt = 0;
        item._computed.mb = marginBottom;
      });
      firstItem._computed.mt = structure.py;
      group[group.length - 1].mb = structure.py;
    } else if(isHeaderOrFooter(firstItem.type)) {
      firstItem._computed.py = firstItem._computed.fontSize;
      firstItem._computed.px = structure.px;
      firstItem._computed.mx = 0;
      firstItem._computed.mt = 0;
      firstItem._computed.mb = 0;
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