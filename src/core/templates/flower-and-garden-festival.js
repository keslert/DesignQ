import { solidColor, unitValue } from '.'

export default {
  title: '',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  background: {
    url: 'https://images.unsplash.com/photo-1521374046855-cb3799ffbaab?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: '#fbadc3',
    backgroundBlendMode: 'overlay',
    filters: {
      brightness: 0.8,
    }
  },
  content: {
    bleed: { all: true },
    alignX: 'center',
    alignY: 'flex-start',
    textAlign: 'left',
    mb: 2,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: "Flora's Floral Society"},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'A Flower and'},
          {type: 'eventName', text: 'Garden'},
          {type: 'eventName', text: 'Festival'},
        ],
        color: solidColor('#fff'),
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
          {type: 'descriptiveText', text: 'Witness beauty in bloom at this year\'s'},
          {type: 'descriptiveText', text: 'floral festival!'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
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
    mb: 2,
    elements: [
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          {type: 'location', text: 'June 17-19, 2020', format: 'MMMM D, YYYY'},
          {type: 'location', text: '8 am to 4 pm'},
          {type: 'location', text: 'Stowbrook Gardens'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        color: solidColor('#fff'),
        lines: [
          {type: 'cost', text: 'Entrance Fee: $6'},
          {type: 'descriptiveText', text: 'Includes free access to our food and beverage stalls.'},
          {type: 'contact', text: 'Buy your tickets now at www.reallygreatsite.com!'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  }
}