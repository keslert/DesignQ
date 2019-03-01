import imageData from '../data/canva/image-data';
import { withGroups } from './';
import _ from 'lodash';

export function computeBackgrounds(template) {
  const surfaces = [template, template.content, ...withGroups(template, g => g)]

  surfaces.forEach(surface => {
    if(surface.background && surface.background.img) {
      computeBackground(template, surface, surface.background, 'background');
    }
    if(surface.decor && surface.decor.background && surface.decor.background.img) {
      computeBackground(template, surface, surface.decor.background, 'decor');
    }
  })

}

function computeBackground(template, container, bg, type) {
  const imgSize = bg.img.meta || imageData[template.id][type];
  const imgRatio = imgSize.w / imgSize.h;
  
  const containerSize = container._computed.bb;
  const containerRatio = containerSize.w / containerSize.h;

  const size = imgRatio < containerRatio
    ? {w: containerSize.w, h: imgSize.h * (containerSize.w / imgSize.w)}
    : {h: containerSize.h, w: imgSize.w * (containerSize.h / imgSize.h)}

  const zoom = bg.img.zoom || 1;
  const x = bg.img.x !== undefined ? bg.img.x : .5;
  const y = bg.img.y !== undefined ? bg.img.y : .5;

  size.w *= zoom;
  size.h *= zoom;

  bg._computed = {
    ...size,
    x: (containerSize.w - size.w) * x,
    y: (containerSize.h - size.h) * y,
  }
}