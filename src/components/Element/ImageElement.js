import React from 'react';
import { getBackgroundStyle, getUnitStyle } from '../../core/utils/render-utils';

function ImageElement({element}) {
  const c = element._computed;
  const style = {
    width: `${c.w ? `${c.w}px` : '100%'}`,
    height: `${c.h ? `${c.h}px` : 'auto'}`,
    ...getBackgroundStyle(element),
    // background: `url(${element.src})`,
    // backgroundSize: `${element.size ? `${element.size * 100}px` : 'cover'}`,
    // backgroundPosition: `${(element.x || .5) * 100}% ${(element.y || .5) * 100}%`,
    flex: element.flex,
    margin: `${c.mt || 0}px ${c.mx}px ${c.mb}px`,
  }
  if(element.bleed) {
    style.marginLeft = element.px;
    style.marginRight = element.px;
  }


  return (
    <div style={style} />
  )
}

export default ImageElement;