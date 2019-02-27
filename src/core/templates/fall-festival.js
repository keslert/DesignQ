import { solidColor, unitValue } from '.'

export default {
  title: 'Fall Festival',
  px: 48,
  py: 32,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1476458393436-fb857cc4c7b5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      alignY: 'center',
      alignX: 'center',
      textAlign: 'center',
      bleed: { all: true },
      elements: [
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Fall'}, 
            {type: 'eventName', text: 'Festival'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Josefin Slab',
            weight: 700,
            size: 1,
            style: 'italic',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
        { 
          type: 'small', 
          lines: [
            {type: 'location', text: 'Orange County'},
            {type: 'location', text: 'Open Grounds'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Josefin Slab',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
        },
        { 
          type: 'bridge', 
          lines: [
            [
              {type: 'dayOfWeek', text: 'Thurs'},
              {type: 'date', text: '08.23', format: 'MM.DD'},
              {type: 'time', text: '10AM'},
            ]
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#fff'),
          },
          color: solidColor('#fff'),
          font: {
            family: 'Josefin Slab',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
      ],
    },
    footer: {
      overlay: false,
      width: unitValue(100, '%'),
      background: solidColor('#d26d32'),
      bleed: { all: true },
      elements: [{
        type: 'small',
        lines: [
          {type: 'descriptive', text: 'Come Join The Fun'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Josefin Slab',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      }]
    },
    header: {
      overlay: false,
      width: unitValue(100, '%'),
      background: solidColor('#d26d32'),
      bleed: { all: true },
      elements: [{
        type: 'small',
        lines: [
          {type: 'descriptive', text: 'It\'s The Annual'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Josefin Slab',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      }]
    },
  }
}