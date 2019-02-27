import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'We are proud to present'},
  ],
  color: solidColor('#30a6c0'),
  font: {
    family: 'Arvo',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'The 5th Annual'},
    {type: 'eventName', text: 'Summer Food Fest'},
  ],
  color: solidColor('#f76991'),
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
    {type: 'descriptive', text: 'A festival of food & fun all celebrated under the sun'},
  ],
  color: solidColor('#30a6c0'),
  font: {
    family: 'Arvo',
    letterSpacing: 0,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'June 22, 2020'},
    {type: 'time', text: 'Starts at 10 A.M.'},
    {type: 'location', text: '123 Anywhere St.'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#f76991'),
  },
  color: solidColor('#f76991'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Usher in an epic summer season with a'},
    {type: 'descriptive', text: "fantastic festival that's perfect for you, your friends,"},
    {type: 'descriptive', text: 'and the whole community!'},
  ],
  color: solidColor('#30a6c0'),
  font: {
    family: 'Arvo',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

const icon = {
  type: 'icon',
  url: '/champagne.svg',
  fill: '#f76991',
  size: 1.2,
  meta: {
    width: 100,
    height: 100,
    colors: [],
    filetype: 'svg',
  },
},


export default {
  id: 96,
  title: 'Annual Summer Food Fest',
  tags: ['event', 'flyer'],
  background: solidColor('#fff'),
  decor: {
    t: .2,
  },
  content: {
    body: {
      elements: [
        icon,
        small,
        dominant,
        bridge,
        heading,
        paragraph,
      ]
    },
  }
}