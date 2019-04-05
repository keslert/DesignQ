import React from 'react';
import { getBackgroundImgStyle, resolveColor } from '../../core/utils/render-utils';

function Background({background, bb, style: propStyle={}}) {

  const style = {
    position: 'absolute',
    left: bb.l + 'px',
    top: bb.t + 'px',
    height: bb.h + 'px',
    width: bb.w + 'px',
    ...getBackgroundImgStyle(background),
    borderRadius: background.borderRadius ? (background.borderRadius + 'px') : null,
    // background: '#00000033'
    ...propStyle,
  }

  const colorStyle = background.color && {
    position: 'absolute',
    left: bb.l + 'px',
    top: bb.t + 'px',
    height: bb.h + 'px',
    width: bb.w + 'px',
    background: resolveColor(background.color),
    ...propStyle,
  }

  return (
    <React.Fragment>
      <div datatype="background" style={style}/>
      <div style={colorStyle} />
    </React.Fragment>
  )
}
export default Background;