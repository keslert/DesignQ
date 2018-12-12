import React from 'react';
import Element from './Element';
import { 
  getBackgroundStyle, 
  getBorderStyles, 
  getUnitStyle,
  textAlignToFlexAlign,
} from '../core/utils/render-utils';

function ContentGroup({group, style: propsStyle={}}) {
  if(!group) return <div />
  const style = {
    position: group.overlay ? 'absolute' : 'relative',
    display: 'flex',
    alignItems: textAlignToFlexAlign(group.textAlign),
    alignSelf: group.alignX,
    flexDirection: 'column',
    textAlign: group.textAlign || 'center',
    width: getUnitStyle(group.width),
    flex: group.flex,
    ...getBackgroundStyle(group.background),
    ...getBorderStyles(group.border),
    ...propsStyle,
  }

  return (
    <div style={style}>
      {group.elements.map((el, i) => 
        <Element 
          key={i}
          index={i}
          element={el} 
        />
      )}
    </div>
  )
}

export default ContentGroup;