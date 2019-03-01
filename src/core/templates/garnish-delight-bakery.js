import { solidColor } from './'

export default {
  id: 17,
  title: 'Garnish Delight Bakery',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-modern-elegant-colorful-cupcakes-bake-sale-flyer-MAC4C0X6lvc.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
  },
  content: {
    body: {
      bleed: { l: 1 },
      background: solidColor('#3a3d58ee'),
      alignX: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Are you ready to indulge?'},
          ],
          color: solidColor('#DFE0EC'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 0.3,
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
          color: solidColor('#fff'),
          font: {
            family: 'Playfair Display',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'normal  ',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Now baking your favorite desserts in Oarstown!'},
          ],
          color: solidColor('#DFE0EC'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: solidColor('#fff'),
          w: .25,
          h: 6,
        },
        {
          type: 'heading',
          lines: [
            {type: 'descriptive', text: 'Visit Our Little Bakery On Our Grand'},
            {type: 'descriptive', text: 'Opening Day!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'Our doors are open from 8 AM to 9 PM. You can find us at 125'},
            {type: 'descriptive', text: 'Anywhere St., Any City. For our menu, visit'},
            {type: 'website', text: 'www.reallygreatsite.com'},
          ],
          color: solidColor('#DFE0EC'),
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