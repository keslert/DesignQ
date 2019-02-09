import { solidColor, unitValue } from '.'

export default {
  title: 'The Honest Nostalgia',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-illustration-art-gallery-raffle-flyer-MAC4XK0cokg.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 36,
  border: {
    url: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-illustration-art-gallery-raffle-flyer-MAC4XK0cokg.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
    all: 60,
  },
  background: solidColor('#fefaef'),
  content: {
    bleed: { all: true },
    textAlign: 'left',
    alignX: 'flex-start',
    alignY: 'flex-start',
    width: unitValue(100, '%'),
    elements: [
      
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Natsukashi Art Gallery'},
        ],
        color: solidColor('#21303b'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.3,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 2,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'The Honest'},
          {type: 'eventName', text: 'Nostalgia:'},
          {type: 'eventName', text: 'An Exhibit'},
        ],
        color: solidColor('#e35e3e'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1.5,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Featuring the works of renowned'},
          {type: 'descriptiveText', text: 'artist, Tachibana Daishi'},
        ],
        color: solidColor('#21303b'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
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
    textAlign: 'right',
    elements: [
      {
        type: 'heading',
        color: solidColor('#21303b'),
        lines: [
          {type: 'date', text: '7-15 February 2020', format: 'D MMMM YYYY'},
          {type: 'time', text: '11am - 9pm'},
          {type: 'location', text: '123 Anywhere St.'},
        ],
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          weight: 700,
        },
        mb: 2,
      },
      {
        type: 'paragraph',
        color: solidColor('#21303b'),
        lines: [
          {type: 'descriptiveText', text: 'Get an in-depth glimpse into the otherworldly'},
          {type: 'descriptiveText', text: 'beauty of Tachibana\'s most popular Japanese-'},
          {type: 'descriptiveText', text: 'themed masterpieces.'},
        ],
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  }
}