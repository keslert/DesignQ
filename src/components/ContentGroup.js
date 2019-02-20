import React from 'react';
import Element from './Element';
import Border from './Border';
import Background from './Background';
import { textAlignToFlexAlign } from '../core/utils/render-utils';

function ContentGroup({group, style: extraStyle={}}) {
  if(!group) return <div />

  const c = group._computed;
  
  const wrapStyle = {
    display: 'flex',
    height: '100%',
    width: '100%',
    position: group.overlay ? 'absolute' : 'relative',
    margin: `${c.mt}px 0px ${c.mb}px 0px`,
    alignItems: textAlignToFlexAlign(group.alignY),
    justifyContent: textAlignToFlexAlign(group.alignX),
  }

  const style = {
    display: 'flex',
    flexDirection: 'column',
    textAlign: group.textAlign,
    flex: group.flex,
    ...extraStyle,
  }

  const bgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: `${c.maxW}px`,
    height: '100%',
    margin: `0px ${c.mr}px 0px ${c.ml}px`,
  }

  return (
    <div style={wrapStyle}>
      <div style={bgStyle}>
        <Background background={group.background} />
        <Border border={group.border} />
      </div>
      <div style={style}>
        {group.elements.map((el, i) => 
          <Element 
            key={i}
            index={i}
            element={el} 
          />
        )}
      </div>
    </div>
  )
}

export default ContentGroup;