import _ from 'lodash';

export function computeContentSize(structure, flyerSize) {
  const bb = {...flyerSize};
  const borderSize = calculateBorderSize(structure.border);

  bb.w -= (structure.px * 2) + borderSize.w
  bb.h -= (structure.py * 2) + borderSize.h
  
  structure.content._computed.bb = bb;
  structure.content._computed.contentBB = {
    h: bb.h,
    w: bb.w * (structure.content.w || 1),
  };
}

export function calculateBorderSize(border) {
  let h = 0, w = 0;
  if(border) {
    const sides = border.sides;
    if(sides.all || sides.left) {
      w += border.width;
    }
    if(sides.all || sides.right) {
      w += border.width;
    }
    if(sides.all || sides.top) {
      h += border.width;
    }
    if(sides.all || sides.bottom) {
      h += border.width;
    }
  }
  return { w, h };
}