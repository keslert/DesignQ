import { computeSizes } from './sizes';
import { computeSpacing } from "./spacing";
import { computeContentSize, calculateBorderSize } from './content-size';
import { computeBorders } from './borders'
import _ from 'lodash';

// Intentions object
  // abstract description of flyer
  // can have many instantiations.
// Instantiation of intentions object
  // detailed description of flyer


// Line breaks have already been determined at this point.
export function computeFlyer(structure, size={w: 612, h:792}) {
  console.log(structure.title);
  initSetup(structure)

  computeContentSize(structure, size)
  computeBorders(structure, size);



  computeSizes(structure);
  computeSpacing(structure);

  const height = calculateHeight(structure);
  const ratio = structure.content._computed.maxBB.h / height;
  if(ratio < 1) {
    computeSizes(structure, ratio);
    computeSpacing(structure);
  }


  
  return structure;
}

function initSetup(structure) {
  structure._computed = {};
  initGroup(structure, structure.content);
  initGroup(structure, structure.header);
  initGroup(structure, structure.footer);
}

function initGroup(structure, group) {
  if(!group) return;
  group._computed = {};
  group.elements.forEach((el, i) => {
    el._computed = {};
    el._computed.mx = structure.px;
    el._computed.index = i;
    el._computed.prev = group.elements[i - 1];
    el._computed.next = group.elements[i + 1];
    el._computed.align = group.textAlign;
    if(el.lines) {
      el._computed.lines = el.lines.map(line => ({
        text: Array.isArray(line) 
          ? line.map(str => transformStr(str, el.font.transform))
          : transformStr(line, el.font.transform)
      })
        
      )
    }
  })
}

function transformStr(str, transform) {
  return transform === 'uppercase' ? str.toUpperCase() : str;
}

function calculateHeight(structure) {
  const groups = [structure.header, structure.footer, structure.content];
  let height = _.sumBy(groups, g => {
    if(!g || !g.elements.length) return 0;

    const elementHeight = _.sumBy(g.elements, el => 
      _.sum([el._computed.h, el._computed.mt, el._computed.mb])
    )
    const borderHeight = calculateBorderSize(g.border).h;
    
    return elementHeight + borderHeight;
  })


  return height;
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