import React from 'react';
import { getBackgroundStyle } from '../core/utils/render-utils';

function ListDivider({divider, fontSize}) {

  const style = {
    width: `${fontSize * divider.size}px`,
    // height: `${fontSize}px`,
    // lineHeight: 0.5,
    textAlign: 'center',
    display: 'inline-block',
  }

  return (
    <div style={style}>
      {divider.type === 'line' &&
        <div 
          style={{
            display: 'inline-block',
            width: Math.ceil(fontSize * .05),
            height: `${fontSize}px`,
            ...getBackgroundStyle(divider),
          }}
        />
      }
      {divider.type === 'dot' &&
        <div style={{
          display: 'inline-block',
          width: Math.ceil(fontSize * .25 * divider.size),
          height: Math.ceil(fontSize * .25 * divider.size),
          verticalAlign: 'middle',
          ...getBackgroundStyle(divider),
          borderRadius: '9999px',
        }}/>
      }
    </div>
  )
}
export default ListDivider;