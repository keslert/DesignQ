import React from 'react';
import { getBackgroundStyle, getUnitStyle } from '../../core/utils/render-utils';
import SVG from 'react-inlinesvg';

function ImageElement({element}) {
  const c = element._computed;

  const style = {
    width: c.w ? `${c.w}px` : `calc('100% - ${c.ml + c.mr}px)`,
    height: c.h ? `${c.h}px` : 'auto',
    padding: `${c.pt}px ${c.pr}px ${c.pb}px ${c.pl}px`,
    margin: `${c.mt}px ${c.mr}px ${c.mb}px ${c.ml}px`,
    ...getBackgroundStyle({...element, url: null}),
    borderRadius: getUnitStyle(element.borderRadius),
    flex: element.flex,
    flexShrink: 0,
  }

  return (
    <div style={style}>
      {isSVG && 
        <SVG
          style={{fill: element.fill}}
          src={element.url} 
        />
      }
    </div>
  )
}

export default ImageElement;