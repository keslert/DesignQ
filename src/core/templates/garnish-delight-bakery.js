import { solidColor, unitValue } from '.'

export default {
  title: 'Garnish Delight Bakery',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-modern-elegant-colorful-cupcakes-bake-sale-flyer-MAC4C0X6lvc.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 72,
  background: {
    url: 'https://images.unsplash.com/photo-1509365465985-25d11c17e812?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  content: {
    bleed: { left: true },
    background: solidColor('#3a3d58ee'),
    alignX: 'left ',
    alignY: 'center',
    textAlign: 'left',
    pr: 1.75,
    mb: 1.25,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'Are you ready to indulge?'},
        ],
        color: solidColor('#DFE0EC'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.3,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1.5,
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
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Now baking your favorite desserts in Oarstown!'},
        ],
        color: solidColor('#DFE0EC'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.8,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bar',
        background: solidColor('#fff'),
        width: unitValue(90, 'px'),
        height: unitValue(6, 'px'),
        mb: 1,
      },
      {
        type: 'heading',
        lines: [
          {type: 'descriptiveText', text: 'Visit Our Little Bakery On Our Grand'},
          {type: 'descriptiveText', text: 'Opening Day!'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.7,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'Our doors are open from 8 AM to 9 PM. You can find us at 125'},
          {type: 'descriptiveText', text: 'Anywhere St., Any City. For our menu, visit'},
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
        mb: 1,
      },
    ]
  },
  
}