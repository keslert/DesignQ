import React from 'react';

function Border({border}) {
  const c = border._computed;
  const style = {
    position: 'absolute',
    top: 0,
    left: 0,
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
    width: '14px',
    height: '14px',
    borderRadius: '7px',
    background: item.item.color,
  }
  return (
    <div style={style} />
  )
}