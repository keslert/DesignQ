import React from 'react';
import Element from './Element';
import { 
  getBackgroundStyle, 
  getBorderStyles, 
  getUnitStyle,
  textAlignToFlexAlign,
  getWidth,
} from '../core/utils/render-utils';

function ContentGroup({group, style: extraStyle={}}) {
  if(!group) return <div />

  const c = group._computed;
  const style = {
    position: group.overlay ? 'absolute' : 'relative',
    display: 'flex',
    alignItems: textAlignToFlexAlign(group.textAlign),
    alignSelf: group.alignX,
    justifyContent: group.alignY,
    flexDirection: 'column',
    textAlign: group.textAlign || 'center',
    width: getWidth(group.width, c),
    flex: group.flex,
    margin: `${c.mt}px ${c.mr}px ${c.mb}px ${c.ml}px`,
    borderRadius: getUnitStyle(group.borderRadius),
    ...getBackgroundStyle(group.background),
    ...getBorderStyles(group.border),
    ...extraStyle,
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