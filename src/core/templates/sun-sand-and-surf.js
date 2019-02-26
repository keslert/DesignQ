import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: "You're Invited!"},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Muli',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Sun, Sand, and'},
    {type: 'eventName', text: 'Surf Soiree'},
  ],
  color: solidColor('#96fdfc'),
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
    {type: 'descriptive', text: 'A summer party hosted by MLKD Burger Shack!'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Muli',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'July 12, 2020'},
      {type: 'time', text: '11:00am to 10:00pm'},
    ],
    {type: 'location', text: '123 Anywhere St.'},
  ],
  divider: {
    type: 'slash',
    size: 1,
    color: solidColor('#96fdfc'),
  },
  color: solidColor('#96fdfc'),
  font: {
    family: 'Muli',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: ''},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#96fdfc'),
  width: 1,
  height: 8,
},

export default {
  title: 'Sun, Sand, and Surf',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: '',
    }
  },
  border: {
    a: .02,
    background: solidColor('#152a50'),
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