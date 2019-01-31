import React from 'react';
import { getBackgroundStyle } from '../../core/utils/render-utils';

function Border({border}) {
  const c = border._computed;
  const style = {
    position: 'absolute',
    ...getBackgroundStyle(border),
    // background: border.color,
    top: 0,
    left: 0,
    height: '100%',
    width: '100%',
  }
  return (
    <div id="border" style={style}>
      {(c.items || []).map((item, i) => 
        <BorderItem 
          key={i}
          item={item}
        />
      )}
    </div>
  )
}
export default Border;

function BorderItem({item}) {
  const style = {
    position: 'absolute',
    top: `${item.y}px`,
    left: `${item.x}px`,
    transform: `rotate(${item.rotate}deg)`,
    width: '21px',
    height: '7px',
    borderRadius: '21px',
    background: item.item.color,
  }
  return (
    <div style={style} />
  )
}