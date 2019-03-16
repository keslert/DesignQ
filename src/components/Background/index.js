import React from 'react';
import { getBackgroundStyle } from '../../core/utils/render-utils';

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

  return (
    <div datatype="background" style={style} />
  )
}
export default Background;