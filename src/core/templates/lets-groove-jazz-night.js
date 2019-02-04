import { solidColor, unitValue } from '.'

export default {
  title: "Let's Groove Jazz Night",
  tags: ['event', 'flyer'],
  px: 36,
  py: 48,
  border: {
    right: 50,
    color: '#f3d030',
  },
  background: {
    color: '#000',
  },
  content: {
    bleed: { all: true },
    alignX: 'flex-start',
    alignY: 'flex-start',
    textAlign: 'left',
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Audios Co. Presents'},
        ],
        color: solidColor('#f4d55e'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 2,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: "Let's Groove:"},
          {type: 'eventName', text: 'Jazz Night'},
          {type: 'eventName', text: '2020'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0.05,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'bar',
        background: solidColor('#f4d55e'),
        height: unitValue(8, 'px'),
        width: unitValue(33, '%'),
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Enjoy a night of soothing music'},
          {type: 'descriptiveText', text: 'from the best artists.'},
        ],
        color: solidColor('#ffffffcc'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.6,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  footer: {
    bleed: { all: true },
    width: unitValue(100, '%'),
    textAlign: 'left',
    elements: [
      {
        type: 'heading',
        color: solidColor('#f4d55e'),
        lines: [
          {type: 'date', text: 'March 19, 2020', format: 'MMMM D, YYYY'},
          {type: 'time', text: '6:30pm'},
          {type: 'location', text: '123 Anywhere St.,'},
          {type: 'city-state', text: 'Any City'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: .3,
          style: 'normal',
          transform: 'normal',
          weight: 700,
        },
        mb: 2,
      },
      {
        type: 'paragraph',
        color: solidColor('#ffffffcc'),
        lines: [
          {type: 'descriptiveText', text: 'Join us for jaxx night and enjoy'},
          {type: 'descriptiveText', text: 'great music from the best'},
          {type: 'descriptiveText', text: 'artists in town. Purchase your'},
          {type: 'descriptiveText', text: 'tickets online:'},
          {type: 'descriptiveText', text: 'reallygreatsite.com'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: .2,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  }
}