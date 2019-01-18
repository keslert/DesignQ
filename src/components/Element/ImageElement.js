import React from 'react';
import { getBackgroundStyle, getWidth } from '../../core/utils/render-utils';

function ImageElement({element}) {
  const c = element._computed;
  const style = {
    width: c.w ? `${c.w}px` : `calc('100% - ${c.ml + c.mr}px)`,
    height: c.h ? `${c.h}px` : 'auto',
    padding: `${c.pt}px ${c.pr}px ${c.pb}px ${c.pl}px`,
    margin: `${c.mt}px ${c.mr}px ${c.mb}px ${c.ml}px`,
    boxSizing: 'content-box',
    ...getBackgroundStyle(element),
    flex: element.flex,
  }

  return (
    <div style={style} />
  )
}

export default ImageElement;