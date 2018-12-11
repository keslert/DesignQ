import React from 'react';
import { getBackgroundStyle, getUnitStyle } from '../../core/utils/render-utils';

function BarElement({element}) {

  const style = {
    background: getBackgroundStyle(element.background),
    width: getUnitStyle(element.width),
    height: getUnitStyle(element.height),
    marginLeft: 'auto',
    marginRight: 'auto',
    marginBottom: `${element._computed.mb}px`,
  }

  return (
    <div 
      style={style}
    />
  )
}

export default BarElement;