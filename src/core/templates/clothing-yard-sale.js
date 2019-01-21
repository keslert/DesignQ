import { solidColor, unitValue } from '.'

export default {
  title: 'Clothing Yard Sale',
  tags: ['event', 'yard-sale'],
  px: 72,
  py: 48,
  border: {
    bottom: 10,
    color: '#5ea9df',
  },
  content: {
    width: unitValue(100, '%'),
    flex: 1,
    alignX: 'left',
    alignY: 'center',
    background: solidColor('#ffeeca'),
    bleed: { all: true },
    elements: [
      { 
        type: 'image',
        flex: 1,
        bleed: { all: true },
        url: 'https://images.pexels.com/photos/325867/pexels-photo-325867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Yard'},
          {type: 'eventName', text: 'Sale!'},
        ],
        background: solidColor('#e64d45'),
        color: solidColor('#fcda57'),
        font: {
          transform: 'uppercase',
          size: 0.6,
          family: 'Roboto Condensed',
          weight: 400,
          style: 'normal',
          lineHeight: 1.2,
          letterSpacing: 0,
        },
        overlap: .5,
        px: 2,
        py: 1.5,
        mb: 2,
      },
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'pre-loved clothing, shoes, home'},
          {type: 'descriptiveText', text: 'decor, books, stationary, and more...'},
        ],
        color: solidColor('#e64d45'),
        font: {
          size: 1.5,
          family: 'Muli',
          weight: 400,
          style: 'normal',
          lineHeight: 1.4,
        },
      },
    ]
  }
}