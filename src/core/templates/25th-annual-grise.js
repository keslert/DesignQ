import { basicColor } from '../utils/color-utils';

export default {
  id: 37,
  title: '25th Annual Grise',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-bordered-photo-food-drive-flyer-MAC3TTAYPR8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1523275033438-8c0a9239935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 533 },
      filters: {
        brightness: .8,
      },
    },
  },
  border: {
    a: .05,
    background: { 
  color: basicColor('#000000'),
},
  },
  content: {
    body: {
      bleed: { x: 2 },
      background: { 
  color: basicColor('#ffffff'),
},
      alignY: 'top',
      h: 'auto',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'time', text: 'Feed Someone In Need'},
          ],
          color: basicColor('#dc8120'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.230,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 300,
          },
          mb: 1.5,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: '25th Annual Grise'},
            {type: 'eventName', text: 'Fiord Food Drive'},
          ],
          color: basicColor('#000'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'time', text: 'A campaign by the Grise Fiord Fishermen\'s Assoc.' },
          ],
          color: basicColor('#dc8120'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.04,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
      ]
    },
    footer: {
      textAlign: 'center',
      elements: [
        {
          type: 'heading',
          color: basicColor('#ffffff'),
          lines: [
            [ 
              {type: 'date', text: 'March 3-5, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '8 am to 5 pm'},
            ],
            {type: 'location', text: 'Grise Fiord Public Library'},
          ],
          divider: {
            size: 1,
            type: 'line',
            color: basicColor('#ffffff'),
          },
          font: {
            family: 'League Spartan',
            letterSpacing: 0.13,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          color: basicColor('#ffffff'),
          lines: [
            {type: 'details', text: 'Did you know that thousands of households struggle'},
            {type: 'details', text: 'with food security everyday? You can help change'},
            {type: 'details', text: 'those statistics.'},
          ],
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
      ]
    }
  }
}