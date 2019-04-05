import { withGroups } from './';
import _ from 'lodash';

export function computeBackgrounds(template) {
  template._containers.forEach(container => {
    if(container.background && container.background.img) {
      computeImgBackground(container._computed.bb, container.background);
    }
    if(container.decor && container.decor.background && container.decor.background.img) {
      computeDecorImgBackground(container._computed.bb, container.decor);
    }
  })

  const images = template._elements.filter(el => el.type === 'image')
  images.forEach(img => {
    computeImgBackground(img._computed.bb, img.background);
  })

}

function computeImgBackground(containerBB, bg) {
  const zoom = bg.img.zoom || 1;
  const x = bg.img.x !== undefined ? bg.img.x : .5;
  const y = bg.img.y !== undefined ? bg.img.y : .5;
  const imgSize = bg.img.meta;

  const scale = Math.max(containerBB.w / imgSize.w, containerBB.h / imgSize.h);
  const fillSize = {
    w: imgSize.w * scale,
    h: imgSize.h * scale,
  }
  
  const w = fillSize.w * zoom;
  const h = fillSize.h * zoom;
  
  const spaceX = w - containerBB.w;
  const spaceY = h - containerBB.h

  const offsetX = spaceX * x;
  const offsetY = spaceY * y;
  
  const cropW = containerBB.w / w * 100;
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

// Decor is really only meant to function in one direction.
function computeDecorImgBackground(containerBB, decor) {
  const c = decor._computed;
  c.bb = {...containerBB};

  // TODO: Below is nottrue, since the bounding box shrinks with offsets.
  // If two directions, the bounding box is the full container;
  const sum = !!c._t + !!c._b + !!c._l + !!c._r
  if(sum <= 1) {
    if(c._t) {
      // const offset = c._tOffset || 0;
      c.bb.t = c._tOffset;
      c.bb.h = c._t;
    } 
    else if(c._b) {
      c.bb.t = c.bb.h - c.b;
      c.bb.h = c._b;
    } 
    else if(c._l) {
      c.bb.l = c._lOffset;
      c.bb.w = c._l;
    } 
    else {
      c.bb.l = c.bb.w - c.r
      c.bb.w = c._r;
    }
  } else {
    c.needsClipping = true;
  }
  
  computeImgBackground(c.bb, decor.background);
}