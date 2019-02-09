import { solidColor, unitValue } from './'

// TODO: Geometric borders
export default {
  title: 'Annual Health Fair',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-photo-health-fair-flyer-MAC4WqK5At4.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 36,
  background: solidColor('#e54049'),
  content: {
    bleed: {all: true },
    background: solidColor('#e54049'),
    textAlign: 'left',
    alignY: 'flex-end',
    width: unitValue(100, '%'),
    flex: 1,
    elements: [
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1467627003363-f047333cbf44?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        flex: 1,
        bleed: {all: true},
      },
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'Brooklyn Community'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Annual'},
          {type: 'eventName', text: 'Health'},
          {type: 'eventName', text: 'Fair 2019'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Roboto Condensed',
          weight: 700,
          size: 0.7,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        mb: 1,
      },
      
      {
        type: 'small',
        lines: [
          {type: 'date-and-time', text: 'September 25-27 at 10AM'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
        mb: 1,
      },
    ]
  },
}