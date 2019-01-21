import React from 'react';
import { getBackgroundStyle, getUnitStyle } from '../../core/utils/render-utils';

function BarElement({element}) {
  const c = element._computed;
  const style = {
    ...getBackgroundStyle(element.background),
    width: element.width.unit === '%' 
      ? `calc(${getUnitStyle(element.width)} - ${c.ml + c.mr}px)`
      : getUnitStyle(element.width),
    height: getUnitStyle(element.height),
    margin: `
      0 
      ${c.group.textAlign === 'right' ? `${c.mr}px` : 'auto'}
      ${c.mb}px
      ${c.group.textAlign === 'left' ? `${c.ml}px` : 'auto'}
    `,
  }

  return (
    <div 
      style={style}
    />
  )
}

export default BarElement;