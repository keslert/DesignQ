import { withGroups } from './';
import _ from 'lodash';

export function computeBackgrounds(template) {
  const items = _.flatMap([
    template,
    ...withGroups(template, g => g),
    ...withGroups(template, g => g.elements),
  ])

  items.forEach(item => {
    const bgs = _.filter([
      item.background,
      item.decor && item.decor.background,
      item.border && item.border.background,
    ])

    const w = item._computed.bb.w;
    const h = item._computed.bb.h;
    bgs.forEach(bg => {
      bg._computed = {};
      if(bg.url) {
        bg._computed.zoom = bg.zoom || 1;
        // TODO need to subtract image height
        bg._computed.x = (bg.x || .5) * bg._computed.zoom * w;
        bg._computed.y = (bg.y || .5) * bg._computed.zoom * h;
      }
    })
  })
}