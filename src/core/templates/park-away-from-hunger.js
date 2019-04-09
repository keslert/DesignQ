import { basicColor } from '../utils/color-utils';

export default {
  id: 1,
  title: 'Park Away From Hunger',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-beige-photo-food-drive-flyer-MAC4DTDfljc.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 1200 },
    },
  },
  content: {
    background: { 
  color: basicColor('#f1e4c6'),
},
    h: 'auto',
    alignY: 'center',
    body: {
      alignX: 'center',
      alignY: 'center',
      itemsAlignX: 'center',
      itemsAlignY: 'center',
      textAlign: 'center',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Quark Community Center'},
          ],
          color: basicColor('#442d34'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1.5,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Park Away'},
            {type: 'eventName', text: 'From'},
            {type: 'eventName', text: 'Hunger'},
            {type: 'eventName', text: 'Food Drive'},
          ],
          color: basicColor('#442d34'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1.5,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: "The county's best food trucks gather for"},
            {type: 'descriptive', text: 'a good cause'},
          ],
          color: basicColor('#442d34'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'October 12-20, 2020', format: 'MMM D, YYYY'},
            {type: 'time', text: '2:00PM-8:00PM'},
            {type: 'location', text: '123 Anywhere Street'},
          ],
          color: basicColor('#442d34'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.05,
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
            {type: 'details', text: 'A gathering of best-known, local food trucks to'},
            {type: 'details', text: 'raise money and food supplies for the homeless'},
            {type: 'details', text: 'victims of the recent tornado.'},
          ],
          color: basicColor('#442d34'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.05,
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