import _ from 'lodash';

export function computeContentSize(structure, flyerSize) {
  const bb = {...flyerSize};

  if(structure.content.w) {
    bb.w = bb.w * structure.content.w;
  }

  bb.w -= (structure.px * 2)
  bb.h -= (structure.py * 2)
  computeBorder(structure, bb);  
  
  structure.content._computed.maxBB = bb;
}

function computeBorder(structure, bb) {
  if(structure.border) {
    const sides = structure.border.sides;
    if(sides.all || sides.left) {
      bb.w -= structure.border.width;
    }
    if(sides.all || sides.right) {
      bb.w -= structure.border.width;
    }
    if(sides.all || sides.top) {
      bb.h -= structure.border.width;
    }
    if(sides.all || sides.bottom) {
      bb.h -= structure.border.width;
    }
  }
}