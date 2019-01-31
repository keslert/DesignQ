import { solidColor, unitValue } from '.'

export default {
  title: 'Volleyball Varsity Tryouts',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  border: {
    top: 160,
    right: 160,
    color: '#fcd352',
  },
  background: {
    color: '#fcd352',
  },
  content: {
    bleed: { all: true },
    alignX: 'flex-start',
    alignY: 'flex-end',
    textAlign: 'left',
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Anouba High School'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.1,
          style: 'normal',
          transform: 'uppercase',
          weight: 900,
        },
        mb: 1,
      },
      {
        type: 'bar',
        height: unitValue(5, 'px'),
        width: unitValue(100, '%'),
        background: solidColor('#000'),
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Volleyball'},
          {type: 'eventName', text: 'Varsity'},
          {type: 'eventName', text: 'Tryouts'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0.1,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Join the team and be part of'},
          {type: 'descriptiveText', text: 'something awesome!'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'bar',
        height: unitValue(5, 'px'),
        width: unitValue(100, '%'),
        background: solidColor('#000'),
      },
      {
        type: 'heading',
        lines: [
          
          {type: 'date', text: 'September 20, 2020', format: 'MMMM D, YYYY'},
          {type: 'time', text: '10 am - 3 pm at'},
          {type: 'location', text: 'Anouba Court'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1.0,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'Want to know what it takes? Email Coach'},
          {type: 'descriptiveText', text: "Jennifer at hello@reallygreatsite.com for more"},
          {type: 'descriptiveText', text: "information on tryouts!"},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
}