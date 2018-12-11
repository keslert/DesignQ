import React from 'react';
import Element from './Element';
import { getBackgroundStyle, getBorderStyles, getUnitStyle } from '../core/utils/render-utils';

function Flyer({flyer}) {
  
  const flyerStyle = {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    background: getBackgroundStyle(flyer.background),
    width: '100%',
    height: '100%',
    userSelect: 'none',
  }

  const contentStyle = {
    display: 'flex',
    alignItems: 'center',
    alignSelf: flyer.content.alignX,
    flexDirection: 'column',
    // paddingTop: `${flyer.py}px`,
    // paddingBottom: `${flyer.py}px`,
    textAlign: 'center',
    width: getUnitStyle(flyer.content.width),
    flex: flyer.content.flex,
    background: getBackgroundStyle(flyer.content.background),
    ...getBorderStyles(flyer.content.border),
  }

  if(flyer.content.elements[0].bleed) {
    contentStyle.paddingTop = 0;
  }
  if(flyer.content.elements[flyer.content.elements.length - 1].bleed) {
    contentStyle.paddingBottom = 0;
  }

  return (
    <div style={flyerStyle}>
      <div></div>
      <div style={contentStyle}>
        {flyer.content.elements.map((el, i) => 
          <Element 
            key={i}
            index={i}
            element={el} 
          />    
        )}
      </div>
      <div></div>
    </div>
  )
}

export default Flyer;

