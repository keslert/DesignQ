import _ from 'lodash';

export function computeContentSize(structure, flyerSize) {
  const bb = {...flyerSize};

  if(structure.content.w) {
    bb.w = bb.w * structure.content.w;
  }

  bb.w -= (structure.px * 2) + (structure.border ? structure.border.width * 2 : 0)
  bb.h -= (structure.py * 2) - (structure.border ? structure.border.width * 2 : 0)
  
  structure.content._computed.maxBB = bb;
}