import React from 'react';
import Element from './Element';
import { getBackgroundStyle, getBorderStyles } from '../core/utils';

function Flyer({flyer}) {
  
  const flyerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    background: getBackgroundStyle(flyer.background),
    width: '100%',
    height: '100%',
    userSelect: 'none',
  }

  const contentStyle = {
    display: 'inline-block',
    paddingTop: `${flyer.py}px`,
    paddingBottom: `${flyer.py}px`,
    textAlign: 'center',
    background: getBackgroundStyle(flyer.content.background),
    ...getBorderStyles(flyer.content.border),
  } 
  console.log(flyer.content.border);
  console.log(getBorderStyles(flyer.content.border))

  return (
    <div style={flyerStyle}>
      <div></div>
      <div>
        <div style={contentStyle}>
          {flyer.content.elements.map((el, i) => 
            <Element 
              key={i}
              element={el} 
            />    
          )}
        </div>
      </div>
      <div></div>
    </div>
  )
}

export default Flyer;

