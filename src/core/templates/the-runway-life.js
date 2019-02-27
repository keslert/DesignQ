import { solidColor } from './'

export default {
  id: 59,
  title: 'The Runway Life',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-navy-woman-photo-fashion-show-flyer-MAC5vawSZY4.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1545911975-d1e66f72af83?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      x: 0.3,
      y: 0.5,
      zoom: 2.49,
    },
    color: '#86a7ab',
  },
  decor: {
    r: .3,
  },
  content: {
    w: 'auto',
    alignX: 'left',
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
            {type: 'host', text: 'Baks Clothing Company'},
          ],
          color: solidColor('#000'),
          background: solidColor('#fff'),
          w: 'fill',
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.3,
            style: 'normal',
            transform: 'uppercase',
            weight: 600,
          },
          pl: 2,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'The Runway'},
            {type: 'eventName', text: 'Life: Fierce'},
            {type: 'eventName', text: '& Fabulous'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 0.7,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'time', text: 'A charity fashion show'},
            {type: 'time', text: 'for the women of BWC'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          color: solidColor('#fff'),
          lines: [
            {type: 'price', text: 'Tickets: $5'},
            {type: 'date', text: 'June 20, 2020'},
            {type: 'time', text: '11 am'},
            {type: 'location', text: 'Beechtown Community Center'},
          ],
          font: {
            family: 'Montserrat',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.0,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#fff'),
          lines: [
            {type: 'descriptive', text: 'Watch the hottest trends go down the runway'},
            {type: 'descriptive', text: 'with looks from our Spring/Summer \'20 collection.'},
            {type: 'descriptive', text: '100% of the proceeds will go to BWC'},
          ],
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.0,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    }
  }
}