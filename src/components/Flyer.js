import React from 'react';
import FlyerContent from './FlyerContent';
import Background from './Background';
import Surface from './Surface';

function Flyer({flyer}) {
  
  const style = {
    position: 'relative',
    width: '100%',
    height: '100%',
    userSelect: 'none',
    overflow: 'hidden',
    background: '#fff',
  }

  return (
    <div style={style}>
      {true && <Surface surface={flyer} />}
      {true && <Surface surface={flyer.content} />}
      
      {flyer.content.header && <Surface surface={flyer.content.header} />}
      {true && <Surface surface={flyer.content.body} />}
      {flyer.content.footer && <Surface surface={flyer.content.footer} />}
      
      {false && <FlyerContent content={flyer.content} />}
      {flyer.overlay && <Background background={flyer.overlay} />}
    </div>
  )
}

export default Flyer;

