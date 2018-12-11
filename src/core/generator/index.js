import { measureTextWidth } from "./text";
import { computeFontSize } from './font-size';
import _ from 'lodash';
import { computeSpacing } from "./spacing";

// Intentions object
  // abstract description of flyer
  // can have many instantiations.
// Instantiation of intentions object
  // detailed description of flyer


// Line breaks have already been determined at this point.
export function computeFlyer(structure, size={w: 612, h:792}) {
  const paddedSize = {
    w: size.w - structure.px * 2 - (structure.border ? structure.border.width * 2 : 0),
    h: size.h - structure.py * 2 - (structure.border ? structure.border.width * 2 : 0),
  }

  
  initSetup(structure)
  computeFontSize(structure, paddedSize);
  computeSpacing(structure);
  
  console.log(structure)
  return structure;
}

function initSetup(structure) {
  const elements = structure.content.elements;
  elements.forEach((el, i) => {
    el._computed = {};
    el._computed.mx = structure.px;
    el._computed.index = i;
    el._computed.prev = elements[i - 1];
    el._computed.next = elements[i + 1];
    if(el.lines) {
      el._computed.lines = el.lines.map(line => 
        el.font.transform === 'uppercase' ? line.toUpperCase() : line
      )
    }
  })
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