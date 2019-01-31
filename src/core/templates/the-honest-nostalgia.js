import { solidColor, unitValue } from '.'

export default {
  title: 'The Honest Nostalgia',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  border: {
    url: 'https://images.unsplash.com/photo-1447876464283-8f7b5c21e00a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: '#254d93',
    // backgroundBlendMode: 'luminosity',
    all: 60,
  },
  background: solidColor('#fefaef'),
  content: {
    bleed: { all: true },
    alignX: 'left',
    alignY: 'flex-start',
    width: unitValue(100, '%'),
    textAlign: 'left',
    flex: 1,
    elements: [
      
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Natsukashi Art Gallery'},
        ],
        color: solidColor('#254d93'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1.5,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'The Honest'},
          {type: 'eventName', text: 'Nostalgia:'},
          {type: 'eventName', text: 'An Exhibit'},
        ],
        color: solidColor('#ed8c6c'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 900,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Featuring the works of renowned'},
          {type: 'descriptiveText', text: 'artist, Tachibana Daishi'},
        ],
        color: solidColor('#254d93'),
        font: {
          family: 'Muli',
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
        color: solidColor('#254d93'),
        lines: [
          {type: 'date', text: '7-15 February 2020', format: 'D MMMM YYYY'},
          {type: 'time', text: '11am - 9pm'},
          {type: 'location', text: '123 Anywhere St.'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.6,
          style: 'normal',
          transform: 'normal',
          weight: 900,
        },
        mb: 2,
      },
      {
        type: 'paragraph',
        color: solidColor('#254d93'),
        lines: [
          {type: 'descriptiveText', text: 'Get an in-depth glimpse into the otherworldly'},
          {type: 'descriptiveText', text: 'beauty of Tachibana\'s most popular Japanese-'},
          {type: 'descriptiveText', text: 'themed masterpieces.'},
        ],
        font: {
          family: 'Muli',
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