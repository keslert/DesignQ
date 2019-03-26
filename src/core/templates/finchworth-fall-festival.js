import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Have a fabulous fall!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Roboto Condensed',
    letterSpacing: 0.18,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Finchworth'},
    {type: 'eventName', text: 'Fall'},
    {type: 'eventName', text: 'Festival'},
    {type: 'eventName', text: '2020'},
  ],
  color: solidColor('#f89e4b'),
  font: {
    family: 'Abril Fatface',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    [
      {type: 'date', text: 'Oct. 10, 2020'},
      {type: 'time', text: '2:00 PM to 6:00 PM'},
    ],
    {type: 'location', text: 'Meadowview Film Center'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#ffffff'),
  },
  color: solidColor('#ffffff'),
  font: {
    family: 'Roboto Condensed',
    letterSpacing: 0.06,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'Food, games, arts &'},
    {type: 'descriptive', text: 'crafts, and a whole lot'},
    {type: 'descriptive', text: 'of fun.'},
  ],
  color: solidColor('#f89e4b'),
  font: {
    family: 'Roboto Condensed',
    letterSpacing: 0.18,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Join us for the Finchworth Fall'},
    {type: 'details', text: 'Festival 2020! Celebrate the joyous'},
    {type: 'details', text: 'season with appetizing food and'},
    {type: 'details', text: 'free-flowing drinks!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Norwester',
    letterSpacing: 0.14,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 51,
  title: 'Finchworth Fall Festival',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-orange-leaves-fall-festival-flyer-MAC3Ta-ko3M.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#283442'),
  decor: {
    r: .3,
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      alignX: 'left',
      itemsAlignX: 'left',
      textAlign: 'left',
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}