import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Beat the summer heat.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.170,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'The 15th'},
    {type: 'eventName', text: 'Winslough'},
    {type: 'eventName', text: 'Summer Festival'},
  ],
  color: solidColor('#7ece97'),
  font: {
    family: 'IM Fell English Pro',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Presented by Oddball Imaging Studio'},
    {type: 'descriptive', text: 'and Vigilatte Coffee'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'IM Fell English Pro',
    letterSpacing: 0.041,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'July 20'},
      {type: 'day-of-week', text: 'Saturday'},
      {type: 'time', text: '4 - 8 pm'},
    ],
    {type: 'location', text: 'The Beechtown Park'},
  ],
  divider: {
    type: 'dot',
    size: 1,
    color: solidColor('#7ece97'),
  },
  color: solidColor('#7ece97'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.101,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Join us for a 4-hour extravaganza featuring'},
    {type: 'details', text: 'genres such as pop, jazz, and R&B. Featuring'},
    {type: 'details', text: 'the hottest acts in the country today.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'IM Fell English Pro',
    letterSpacing: 0.047,
    lineHeight: 1.4,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

const bar = {
  type: 'bar',
  background: { 
  color: solidColor('#7ece97'),
},
  w: .33,
  h: 8,
}

export default {
  id: 48,
  title: 'Winslough Summer Festival',
  tags: ['event', 'flyer'],
  background: { 
  color: solidColor('#146b77'),
},
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
        bar,
        heading,
        paragraph,
      ]
    },
  }
}