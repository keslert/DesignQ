import React from 'react';
import { resolveColor } from '../../core/utils/render-utils';

function BarElement({element}) {
  const c = element._computed;
  const style = {
    background: resolveColor(element.background),
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