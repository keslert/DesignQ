import { basicColor } from '../utils/color-utils';

export default {
  id: 17,
  title: 'Garnish Delight Bakery',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-modern-elegant-colorful-cupcakes-bake-sale-flyer-MAC4C0X6lvc.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 1067 },
    },
  },
  content: {
    body: {
      bleed: { l: 1 },
      background: { 
  color: basicColor('#3a3d58ee'),
},
      alignX: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Are you ready to indulge?'},
          ],
          color: basicColor('#DFE0EC'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Garnish Delight'},
            {type: 'eventName', text: 'Bakery is Open!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Playfair Display',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Now baking your favorite desserts in Oarstown!'},
          ],
          color: basicColor('#DFE0EC'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: { 
  color: basicColor('#ffffff'),
},
          w: .25,
          h: 6,
        },
        {
          type: 'heading',
          lines: [
            {type: 'descriptive', text: 'Visit Our Little Bakery On Our Grand'},
            {type: 'descriptive', text: 'Opening Day!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive|time|location|website', text: 'Our doors are open from 8 AM to 9 PM. You can find us at 125'},
            {type: 'descriptive|time|location|website', text: 'Anywhere St., Any City. For our menu, visit'},
            {type: 'descriptive|time|location|website', text: 'www.reallygreatsite.com'},
          ],
          color: basicColor('#DFE0EC'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },   
  }
}