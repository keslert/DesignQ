import React from 'react';
import { getBackgroundStyle } from '../../core/utils/render-utils';

function BarElement({element}) {
  const c = element._computed;
  const style = {
    ...getBackgroundStyle(element.background),
    width: c.bb.w + 'px',
    height: c.bb.h + 'px',
  }

  return (
    <div 
      datatype="bar"
      style={style}
    />
  )
}

export default BarElement;