import React from 'react';
import { getBackgroundImgStyle } from '../../core/utils/render-utils';
import SVG from 'react-inlinesvg';

function ImageElement({element}) {
  const isSVG = element.meta && element.meta.filetype === 'svg';
  const style = {
    width: '100%',
    height: '100%',
    // ...getBackgroundImgStyle(element),
    flexShrink: 0,
  }

  return (
    <div datatype="image" style={style}>
      {isSVG && 
        <SVG
          style={{fill: element.fill}}
          src={element.src}
        />
      }
    </div>
  )
}

export default ImageElement;