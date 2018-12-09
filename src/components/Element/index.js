import React from 'react';
import ImageElement from '../Element/ImageElement';
import TextElement from '../Element/TextElement';
import BarElement from '../Element/BarElement';

function Element({element, index}) {
  switch(element.type) {
    case 'image': return <ImageElement element={element} index={index} />
    case 'bar': return <BarElement element={element} index={index} />
    default: return <TextElement element={element} index={index} />
  }
}

export default Element;