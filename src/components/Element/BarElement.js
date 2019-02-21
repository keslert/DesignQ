import React from 'react';
import { getBackgroundStyle, getUnitStyle } from '../../core/utils/render-utils';

function BarElement({element}) {
  const c = element._computed;
  const style = {
    ...getBackgroundStyle(element.background),
    width: c.bb.w + 'px',
    height: c.bb.h + 'px',
    // `calc(${element.w * 100} - ${c.ml + c.mr}px)`
    // margin: `
    //   0 
    //   ${c.group.textAlign === 'right' ? `${c.mr}px` : 'auto'}
    //   ${c.mb}px
    //   ${c.group.textAlign === 'left' ? `${c.ml}px` : 'auto'}
    // `,
  }

  return (
    <div 
      datatype="bar"
      style={style}
    />
  )
}

export default BarElement;