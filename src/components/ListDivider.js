import React from 'react';
import { getBackgroundStyle } from '../core/utils/render-utils';

function ListDivider({divider, fontSize}) {

  const style = {
    width: `${fontSize * divider.size}px`,
    height: `${fontSize}px`,
    textAlign: 'center',
    display: 'inline-block',
  }

  return (
    <div style={style}>
      {divider.type === 'line' &&
        <div style={{
          display: 'inline-block',
          width: Math.ceil(fontSize * .05),
          height: '100%',
          ...getBackgroundStyle(divider.color),
        }}/>
      }
    </div>
  )
}
export default ListDivider;