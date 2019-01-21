import { solidColor, unitValue } from '.'

export default {
  title: 'Hullton Fall Fest',
  tags: ['event', 'flyer'],
  px: 48,
  py: 48,
  background: solidColor('#23374a'),
  content: {
    bleed: { all: true },
    background: solidColor('#fff'),
    alignX: 'center',
    alignY: 'flex-start',
    width: unitValue(100, '%'),
    textAlign: 'center',
    flex: 1,
    elements: [
      { 
        type: 'image',
        flex: 1,
        bleed: {all: true},
        url: '/hullton.png',
        background: '#23374a'
      },
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Hullton Village Presents'},
        ],
        color: solidColor('#23374a'),
        font: {
          family: 'Josefin Slab',
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
          {type: 'eventName', text: 'The Hullton Fall'},
          {type: 'eventName', text: 'Fest 2020'},
        ],
        color: solidColor('#23374a'),
        font: {
          family: 'Bebas Neue',
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
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'A fun and exciting festival for the whole family'},
        ],
        color: solidColor('#23374a'),
        font: {
          family: 'Josefin Slab',
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
    background: solidColor('#23374a'),
    width: unitValue(100, '%'),
    textAlign: 'center',
    elements: [
      {
        type: 'heading',
        color: solidColor('#ecda7d'),
        lines: [
          [
            {type: 'date', text: 'October 21, 2020'},
            {type: 'time', text: '4 pm - 11 pm'},
          ],
          {type: 'price', text: 'Tickets at $5'},
        ],
        divider: {
          type: 'line',
          size: 1,
          color: '#ecda7d',
        },
        font: {
          family: 'Josefin Slab',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
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
          {type: 'descriptiveText', text: 'See you all at the Hullton Village Park for a fun day of food'},
          {type: 'descriptiveText', text: 'games, shopping and prizes! Bringing of pets is highly encouraged.'},
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