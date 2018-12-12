import { solidColor, unitValue } from './'

export default {
  title: 'Hallow Harvest',
  px: 36,
  py: 36,
  background: solidColor('#150612'),
  border: {
    width: 80,
    sides: {all: true},
    color: 'rgba(255,255,255,0.2)',
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
    alignX: 'center',
    alignY: 'center',
    elements: [
      {
        type: 'small',
        lines: ['Charlotte, NC'],
        color: solidColor('#AA4524'),
        font: {
          family: 'Muli',
          weight: 700,
          size: 18,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      {
        type: 'dominant',
        lines: ['Hallow', 'Harvest'],
        color: solidColor('#D06000'),
        skewed: 20,
        font: {
          family: 'Yellowtail',
          weight: 400,
          size: 40,
          style: 'normal',
          lineHeight: 1.2,
        },
      },
      {
        type: 'bridge',
        color: solidColor('#AA4524'),
        lines: [
          'Join the Annual',
          'Hallow Harvest this',
          'Oct. 31, 2019',
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 20,
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
        lines: ['Barnes Field'],
        color: solidColor('#D06000'),
        font: {
          family: 'Muli',
          weight: 700,
          size: 20,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      }
    ]
  },
}