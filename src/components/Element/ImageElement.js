import React from 'react';

function ImageElement({element}) {

  const style = {
    background: `url(${element.src})`,
    backgroundSize: 'cover',
    backgroundPosition: 'center',
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