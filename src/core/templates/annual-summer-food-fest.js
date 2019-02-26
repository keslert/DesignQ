import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'We are proud to present'},
  ],
  color: solidColor('#30a6c0'),
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
    {type: 'eventName', text: 'The 5th Annual'},
    {type: 'eventName', text: 'Summer Food Fest'},
  ],
  color: solidColor('#f76991'),
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
    {type: 'descriptive', text: 'A festival of food & fun all celebrated under the sun'},
  ],
  color: solidColor('#30a6c0'),
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
    {type: 'descriptive', text: 'June 22, 2020 | Starts at 10 A.M.'},
    {type: 'descriptive', text: '123 Anywhere St.'},
  ],
  color: solidColor('#f76991'),
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
    {type: 'eventName', text: 'Usher in an epic summer season with a'},
    {type: 'eventName', text: "fantastic festival that's perfect for you, your friends,"},
    {type: 'eventName', text: 'and the whole community!'},
  ],
  color: solidColor('#30a6c0'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  title: '',
  tags: ['event', 'flyer'],
  background: solidColor('#fff'),
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