import React from 'react';

function ImageElement({element}) {

  const style = {
    background: `url(${element.src})`,
    backgroundSize: `${element.size ? `${element.size * 100}px` : 'cover'}`,
    backgroundPosition: `${(element.x || .5) * 100}% ${(element.y || .5) * 100}%`,
    flex: element.flex,
    width: '100%',
  }
  if(!element.bleed) {
    style.marginLeft = element.px;
    style.marginRight = element.px;
  }


  return (
    <div style={style} />
  )
}

export default ImageElement;