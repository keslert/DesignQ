import _ from 'lodash';
import { GROUPS } from '.';

export function computeBounds(structure) {
  // const borderSize = calculateBorderSize(structure.border);

  GROUPS.forEach(group => {
    computeGroupBB(structure, structure[group]);
  })
  
  // const bb = structure._computed.bb;
  // structure._computed.innerBB = {
  //   w: bb.w - (structure.px * 2) - borderSize.w,
  //   h: bb.h - (structure.py * 2) - borderSize.h
  // };
}

function computeGroupBB(structure, group) {
  if(!group) return;

  const bb = structure._computed.bb;
  const border = structure.border._computed;

  const bleed = group.bleed || {};
  const h = bb.h -
          - structure.py * group.pt * (bleed.top ? 1 : 2)
          - structure.py * group.pb * (bleed.bottom ? 1 : 2)
          - (bleed.border && (bleed.top) ? 0 : border.t)
          - (bleed.border && (bleed.bottom) ? 0 : border.b)
  const w = (bb.w * (group.w || 1)) 
          - structure.px * group.pl * (bleed.left ? 1 : 2)
          - structure.px * group.pr * (bleed.right ? 1 : 2)
          - (bleed.border && (bleed.left) ? 0 : border.l)
          - (bleed.border && (bleed.right) ? 0 : border.r)

  group._computed.bb = { h , w }
}