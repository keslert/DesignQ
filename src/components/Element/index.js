import React from 'react';
import ImageElement from '../Element/ImageElement';
import TextElement from '../Element/TextElement';
import BarElement from '../Element/BarElement';

function Element({element}) {
  switch(element.type) {
    case 'image': return <ImageElement element={element} />
    case 'bar': return <BarElement element={element} />
    default: return <TextElement element={element} />
  }
}

export default Element;