import { solidColor, unitValue } from '.'

export default {
  title: 'Mitchell Family Cookie Exchange',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-and-red-cookie-exchange-consumer-personal-flyer-MADI6f2rupo.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 10,
  py: 40,
  border: {
    color: '#fefffa',
    all: 40,
  },
  background: {
    color: '#fefffa',
  },
  content: {
    bleed: { all: true },
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    mb: 1.5,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptive', text: 'Ready, Get Set, Bake!'},
        ],
        color: solidColor('#a09056'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'The'},
          {type: 'eventName', text: 'Mitchell'},
          {type: 'eventName', text: 'Family'},
          {type: 'eventName', text: 'Cookie'},
          {type: 'eventName', text: 'Exchange'},
        ],
        color: solidColor('#49673f'),
        font: {
          family: 'Lato',
          letterSpacing: 0.05,
          lineHeight: 1.4,
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
          {type: 'host', text: 'Bring your favorite homebaked'},
          {type: 'host', text: 'cookies, then let\'s swap!'},
        ],
        color: solidColor('#a09056'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1.2,
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
    alignX: 'center',
    textAlign: 'center',
    width: unitValue(100, '%'),
    mb: 2,
    elements: [
      {
        type: 'heading',
        lines: [
          [
            {type: 'date', text: 'Dec. 20, 2020', format: 'MMM. D, YYYY'},
            {type: 'time', text: '3pm'},
          ],
          {type: 'location', text: '123 Anywhere St., Any City'},
        ],
        divider: {
          type: 'dot',
          size: 1,
          color: solidColor('#f34535'),
        },
        color: solidColor('#f34535'),
        font: {
          family: 'League Spartan',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: "Don't forget to bring your own"},
          {type: 'descriptiveText', text: 'reusable cookie containers!'},
        ],
        color: solidColor('#49673f'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1.1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  }
}