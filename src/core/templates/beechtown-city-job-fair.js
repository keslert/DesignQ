import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Choose the right job'},
  ],
  color: solidColor('#ffebbf'),
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
    {type: 'eventName', text: 'Beechtown City'},
    {type: 'eventName', text: 'Job Fair 2020'},
  ],
  color: solidColor('#fff'),
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
    {type: 'descriptive', text: 'Get to know companies from'},
    {type: 'descriptive', text: 'various industries'},
  ],
  color: solidColor('#ffebbf'),
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
    {type: 'descriptive', text: 'September 22, 2020'},
    {type: 'descriptive', text: '10 AM - 4 PM'},
    {type: 'descriptive', text: 'Heiman Convention Center'},
  ],
  color: solidColor('#ffebbf'),
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
    {type: 'eventName', text: 'Drop by for a meet & greet with employers'},
    {type: 'eventName', text: 'from various industries! There will also be'},
    {type: 'eventName', text: 'career talks in the afternoon.'},
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


export default {
  title: '',
  tags: ['event', 'flyer'],
  background: solidColor('#e54049'),
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