import React from 'react';
import FlyerContent from './FlyerContent';
import Background from './Background';
import Surface from './Surface';
import Element from './Element';

function Flyer({flyer}) {
  
  const style = {
    position: 'relative',
    width: '100%',
    height: '100%',
    userSelect: 'none',
    overflow: 'hidden',
    background: '#fff',
  }

  const elements = [
    // ...(flyer.content.header ? flyer.content.header.elements : []),
    ...flyer.content.body.elements,
    // ...(flyer.content.footer ? flyer.content.footer.element : []),
  ]

  return (
    <div style={style}>
      {true && <Surface surface={flyer} />}
      {true && <Surface surface={flyer.content} />}

      {flyer.content.header && <Surface surface={flyer.content.header} />}
      {flyer.content.body && <Surface surface={flyer.content.body} />}
      {flyer.content.footer && <Surface surface={flyer.content.footer} />}

      {elements.map(el => <Element element={el} />)}
      
      {false && <FlyerContent content={flyer.content} />}
      {flyer.overlay && <Background background={flyer.overlay} />}
    </div>
  )
}

export default Flyer;

