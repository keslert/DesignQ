import { solidColor, unitValue } from '.'

export default {
  title: '',
  px: 36,
  py: 36,
  background: solidColor('#e54049'),
  content: {
    bleed: { all: true },
    background: solidColor('#e54049'),
    alignX: 'center',
    alignY: 'center',
    textAlign: 'left',
    elements: [
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Annual'},
        ],
        color: solidColor('#fff'),
        font: {
          family: '',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'small',
        lines: [
          {type: 'time', text: '10AM'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  footer: {
    bleed: { all: true },
    background: solidColor('#6b6f39'),
    width: unitValue(100, '%'),
    textAlign: 'left',
    elements: [
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          {type: 'location', text: '123 Anywhere St.'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
    ]
  }
}