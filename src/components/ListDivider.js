import React from 'react';
import { getBackgroundStyle } from '../core/utils/render-utils';

function ListDivider({divider, size}) {

  const style = {
    width: `${size * 2}px`,
    height: `${size}px`,
    textAlign: 'center',
    display: 'inline-block',
  }

  return (
    <div style={style}>
      {divider.type === 'line' &&
        <div style={{
          display: 'inline-block',
          width: Math.ceil(size * .05),
          height: '100%',
          ...getBackgroundStyle(divider.color),
        }}/>
      }
    </div>
  )
}
export default ListDivider;