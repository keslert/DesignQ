import { solidColor, unitValue } from './'

export default {
  title: 'Hallow Harvest',
  px: 36,
  py: 36,
  background: solidColor('#150612'),
  border: {
    all: 80,
    color: 'orange',
    items: [
      { 
        src: 'img.jpg', 
        bb: { x: 30, y: 40, w: 100, h: 50},
        colors: [
          solidColor('#CF6200'),
        ],
      },
    ]
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      alignX: 'center',
      alignY: 'center',
      bleed: { all: true },
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Charlotte, NC'},
          ],
          color: solidColor('#AA4524'),
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Hallow'},
            {type: 'eventName', text: 'Harvest'},
          ],
          color: solidColor('#D06000'),
          skewed: 20,
          font: {
            family: 'Yellowtail',
            weight: 400,
            size: 1,
            style: 'normal',
            lineHeight: 1.2,
          },
        },
        {
          type: 'bridge',
          color: solidColor('#AA4524'),
          lines: [
            {type: 'descriptive', text: 'Join the Annual'},
            {type: 'descriptive', text: 'Hallow Harvest this'},
            {type: 'date', text: 'Oct. 31, 2019', format: 'MMM. D, YYYY'},
          ],
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
          oneItemPerRow: true,
          lineItemDecorations: null,
          textTransform: 'uppercase',
          marginBottom: 18,
        },
        {
          type: 'small',
          lines: [
            {type: 'location', text: 'Barnes Field'},
          ],
          color: solidColor('#D06000'),
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        }
      ]
    },
  }
}