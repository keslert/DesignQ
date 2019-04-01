import React from 'react';
import { getBackgroundStyle, resolveColor } from '../../core/utils/render-utils';

function Background({background, bb}) {

  const style = {
    position: 'absolute',
    left: bb.l + 'px',
    top: bb.t + 'px',
    height: bb.h + 'px',
    width: bb.w + 'px',
    ...getBackgroundStyle(background),
    // background: '#00000033'
  }

  const colorStyle = background.color && {
    position: 'absolute',
    left: bb.l + 'px',
    top: bb.t + 'px',
    height: bb.h + 'px',
    width: bb.w + 'px',
    background: resolveColor(background.color),
  }

  return (
    <div datatype="background" style={style}>
      <div style={colorStyle} />
    </div>
  )
}
export default Background;