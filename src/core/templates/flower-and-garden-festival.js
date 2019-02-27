import { solidColor } from './'

export default {
  id: 98,
  title: 'Flower and Garden Festival',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-pink-overlay-flower-festival-flyer-MAC4DWCq5Dk.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      url: 'https://images.unsplash.com/photo-1521374046855-cb3799ffbaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      filters: {
        brightness: 0.8,
      }
    },
    color: '#ffb2c4',
    backgroundBlendMode: 'overlay',
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: "Flora's Floral Society"},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'A Flower and'},
            {type: 'eventName', text: 'Garden'},
            {type: 'eventName', text: 'Festival'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Witness beauty in bloom at this year\'s'},
            {type: 'descriptive', text: 'floral festival!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      alignX: 'left',
      itemsAlignX: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          color: solidColor('#fff'),
          lines: [
            {type: 'location', text: 'June 17-19, 2020', format: 'MMMM D, YYYY'},
            {type: 'location', text: '8 am to 4 pm'},
            {type: 'location', text: 'Stowbrook Gardens'},
          ],
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#fff'),
          lines: [
            {type: 'cost', text: 'Entrance Fee: $6'},
            {type: 'descriptive', text: 'Includes free access to our food and beverage stalls.'},
            {type: 'contact', text: 'Buy your tickets now at www.reallygreatsite.com!'},
          ],
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    }
  }
}