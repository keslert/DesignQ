import React from 'react';
import ImageElement from '../Element/ImageElement';
import TextElement from '../Element/TextElement';
import BarElement from '../Element/BarElement';
import { getBackgroundStyle } from '../../core/utils/render-utils';
import Surface from '../Surface';

function Element({element}) {
  const c = element._computed;
  const style = {
    position: 'absolute',
    top: c.bb.t + 'px',
    left: c.bb.l + 'px',
    width: c.bb.w + 'px',
    height: c.bb.h + 'px',
    paddingTop: c.pt + 'px',
    paddingBottom: c.pb + 'px',
    paddingLeft: c.pl + 'px',
    paddingRight: c.pr + 'px',
    boxSizing: 'border-box',
    pointerEvents: 'none',
  }

  const Component = getElement(element.type);
  return (
    <React.Fragment>
      <Surface surface={element} />
      <div 
        key={element.id}
        style={style}
        children={<Component element={element} />}
      />
    </React.Fragment>
  )

  
  
}

function getElement(type) {
  switch(type) {
    case 'icon':
    case 'image': return () => null
    case 'bar': return BarElement
    default: return TextElement
  }
}

export default Element;