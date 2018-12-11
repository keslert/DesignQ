import React from 'react';
import Element from './Element';
import { 
  getBackgroundStyle, 
  getBorderStyles, 
  getUnitStyle,
  textAlignToFlexAlign,
} from '../core/utils/render-utils';

function Flyer({flyer}) {
  
  const flyerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    userSelect: 'none',
    overflow: 'hidden',
    // ...getBackgroundStyle(flyer.background),
    // ...getBorderStyles(flyer.border),
  }

  const bgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    ...getBackgroundStyle(flyer.background),
  }

  const contentStyle = {
    position: 'relative',
    display: 'flex',
    alignItems: textAlignToFlexAlign(flyer.content.textAlign),
    alignSelf: flyer.content.alignX,
    flexDirection: 'column',
    textAlign: flyer.content.textAlign || 'center',
    width: getUnitStyle(flyer.content.width),
    flex: flyer.content.flex,
    ...getBackgroundStyle(flyer.content.background),
    ...getBorderStyles(flyer.content.border),
  }

  return (
    <div style={flyerStyle}>
      <div style={bgStyle} />
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

