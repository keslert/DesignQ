import React from 'react';
import { getBackgroundStyle, getUnitStyle } from '../../core/utils/render-utils';

function ImageElement({element}) {
  const c = element._computed;
  const style = {
    width: c.w ? `${c.w}px` : `calc('100% - ${c.mx * 2}px)`,
    height: c.h ? `${c.h}px` : 'auto',
    ...getBackgroundStyle(element),
    // background: `url(${element.src})`,
    // backgroundSize: `${element.size ? `${element.size * 100}px` : 'cover'}`,
    // backgroundPosition: `${(element.x || .5) * 100}% ${(element.y || .5) * 100}%`,
    flex: element.flex,
    margin: `${c.mt || 0}px ${c.mx}px ${c.mb}px`,
  }
  if(element.bleed === 'full' || (element.bleed === 'left' && element.bleed === 'right')) {
    style.marginLeft = 0;
    style.marginRight = 0;
    style.width = '100%';
    style.paddingLeft = `${c.mx}px`;
    style.paddingRight = `${c.mx}px`;
  }
  if(element.bleed === 'left') {
    style.marginLeft = 0;
    style.width = `calc(100% - ${c.mx}px)`;
    style.paddingLeft = `${c.mx}px`;
  }
  if(element.bleed === 'right') {
    style.marginRight = 0;
    style.width = `calc(100% - ${c.mx}px)`;
    style.paddingRight = `${c.mx}px`;
  }


  return (
    <div style={style} />
  )
}

export default ImageElement;