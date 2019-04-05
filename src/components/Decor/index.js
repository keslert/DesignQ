import React from 'react';
import Border from '../Border';
import { getBackgroundStyle, getClipPath } from '../../core/utils/render-utils';
import Background from '../Background';

function Decor({decor, bb}) {

  if(decor.background && decor.background.img) {
    const c = decor._computed;
    const clipPath = decor._computed.needsClipping ? getClipPath(bb, c) : null;

    return (
      <Background 
        background={decor.background}
        bb={decor._computed.bb}
        style={{clipPath}}
      />
    )
  }

  return null;

  // const c = decor._computed;
  // const style = {
  //   position: 'absolute',
  //   ...getBackgroundStyle(decor.background),
  //   top: 0,
  //   left: 0,
  //   height: '100%',
  //   width: '100%',
  // }
  // return (
  //   <div id="decor" style={style}>
  //     {(c.items || []).map((item, i) => 
  //       <DecorItem 
  //         key={i}
  //         item={item}
  //       />
  //     )}
  //   </div>
  // )
}
export default Decor;

function DecorItem({item}) {
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