import _ from 'lodash';
import { generateLayout } from './layout';



const foci = {
  layout: {
    major: ['elements', 'layout'],
    // padding
    minor: [],
  },
  typography: {
    major: ['family + letterCase', 'size'],
    minor: ['weight'],
  },
  colors: {
    major: ['background', 'foreground', 'filters'],
  },
  decoration: {
    major: ['text-decals', 'list-dividers', 'borders', 'overlays']
  },
}



export function generateFlyer(flyer, history, focus, selection, action) {
  generateLayout(flyer);
  
  return [];
}


/* Image Meta Data
- width, height
- color palette
- saliency?
*/

/* Element Meta Data
- id
- 
*/

/* Actions
- selectionIds? 
- 
*/