import React from 'react';
import { getBackgroundStyle, getUnitStyle } from '../../core/utils/render-utils';

function BarElement({element}) {

  const style = {
    ...getBackgroundStyle(element.background),
    width: getUnitStyle(element.width),
    height: getUnitStyle(element.height),
    margin: `
      0 
      ${element._computed.group.textAlign === 'right' ? `${element._computed.mr}px` : 'auto'}
      ${element._computed.mb}px
      ${element._computed.group.textAlign === 'left' ? `${element._computed.ml}px` : 'auto'}
    `,
  }

  return (
    <div 
      style={style}
    />
  )
}

export default BarElement;