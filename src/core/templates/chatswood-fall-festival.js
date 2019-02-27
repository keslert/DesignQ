import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Momay Event Productions'},
  ],
  color: solidColor('#6d4d43'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Chatswood Fall'},
    {type: 'eventName', text: 'Festival 2020'},
  ],
  color: solidColor('#d59158'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'The hottest food and entertainment event for fall'},
  ],
  color: solidColor('#6d4d43'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'Oct. 10, 2020', format: 'MMM. D, YYYY'},
      {type: 'time', text: '9 AM to 4 PM'},
    ],
    {type: 'location', text: 'McDowell Digital Center'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#d59158'),
  },
  color: solidColor('#d59158'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'The Chatswood Fall Festival is the grandest fall event in'},
    {type: 'descriptive', text: "town. Find food, entertainment and more that's fit for the"},
    {type: 'descriptive', text: 'season!'},
  ],
  color: solidColor('#6d4d43'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#6d4d43'),
  width: .25,
  height: 8,
},


export default {
  title: 'Chatswood Fall Festival',
  tags: ['event', 'flyer'],
  background: solidColor('#fff'),
  decor: {
    y: .3,
  },
  content: {
    h: 'auto',
    background: solidColor('#fff'),
    bleed: { a: 1 },
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