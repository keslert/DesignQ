import { solidColor, unitValue } from '.'

export default {
  title: 'Hullton Fall Fest',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-yellow-and-orange-leaves-fall-festival-flyer-MAC3ZKCrIds.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 40,
  py: 35,
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
          family: 'Aleo',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.4,
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
          family: 'Norwester',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 0.5,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'A fun and exciting festival for the whole family'},
        ],
        color: solidColor('#23374a'),
        font: {
          family: 'Aleo',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.8,
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
    mb: 2,
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
          color: solidColor('#ecda7d'),
        },
        font: {
          family: 'Aleo',
          letterSpacing: 0.15,
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
          {type: 'descriptiveText', text: 'See you all at the Hullton Village Park for a fun day of food'},
          {type: 'descriptiveText', text: 'games, shopping and prizes! Bringing of pets is highly'},
          {type: 'descriptiveText', text: 'encouraged.'},
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