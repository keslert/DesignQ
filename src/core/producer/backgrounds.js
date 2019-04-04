import { withGroups } from './';
import _ from 'lodash';

export function computeBackgrounds(template) {
  template._containers.forEach(surface => {
    if(surface.background && surface.background.img) {
      computeBackground(template, surface, surface.background, 'background');
    }
    if(surface.decor && surface.decor.background && surface.decor.background.img) {
      computeBackground(template, surface, surface.decor.background, 'decor');
    }
  })

  const images = template._elements.filter(el => el.type === 'image')
  images.forEach(img => {
    computeBackground(template, img, img.background);
  })

}

function computeBackground(template, container, bg, type) {
  const zoom = bg.img.zoom || 1;
  const x = bg.img.x !== undefined ? bg.img.x : .5;
  const y = bg.img.y !== undefined ? bg.img.y : .5;
  const imgSize = bg.img.meta;
  const containerSize = container._computed.bb;

  const scale = Math.max(containerSize.w / imgSize.w, containerSize.h / imgSize.h);
  const fillSize = {
    w: imgSize.w * scale,
    h: imgSize.h * scale,
  }
  
  const w = fillSize.w * zoom;
  const h = fillSize.h * zoom;
  
  const spaceX = w - containerSize.w;
  const spaceY = h - containerSize.h

  const offsetX = spaceX * x;
  const offsetY = spaceY * y;
  
  const cropW = containerSize.w / w * 100;
  const cropX = offsetX / w * 100;
  const cropY = offsetY / h * 100;


  bg.img._computed = {
    w,
    h,
    x: offsetX,
    y: offsetY,
    cropW,
    cropX,
    cropY,
  }
}