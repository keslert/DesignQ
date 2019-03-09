import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Araico Theater presents'},
  ],
  color: solidColor('#64492c'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.185,
    size: 1,
    transform: 'uppercase',
    weight: 300,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'The Annual Winter'},
    {type: 'eventName', text: 'Wonderland Gala'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Featuring the one and only Beechtown'},
    {type: 'descriptive', text: 'Company of Dancers'},
  ],
  color: solidColor('#64492c'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.02,
    size: 1,
    transform: 'normal',
    weight: 400,
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'December 9 to 10, 2020', format: 'MMMM D to D, YYYY'},
      {type: 'time', text: '7PM'},
    ],
    {type: 'descriptive', text: '123 Anywhere St. Any City'},
  ],
  divider: {
    type: 'slash',
    size: 1,
    color: solidColor('#ffffff'),
  },
  color: solidColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Get your tickets now! Visit www.reallygreatsite.com to purchase.'},
    {type: 'details', text: 'Limited tickets available. Prices start at $80.'},
  ],
  color: solidColor('#64492c'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.02,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 80,
  title: 'Annual Winter Wonderland Gala',
  tags: ['event', 'flyer'],
  background: solidColor('#ddb64a'),
  decor: {
    t: .45,
  },
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
        heading,
        paragraph,
      ]
    },
  }
}