import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Meadowview County'},
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
    {type: 'eventName', text: 'Fall Festival &'},
    {type: 'eventName', text: 'Fundraising'},
  ],
  color: solidColor('#ff9169'),
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
    {type: 'descriptive', text: 'A charity event for the Kyobi Cancer Foundation'},
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
    {type: 'descriptive', text: 'Sept. 22, 2020 | 1 PM to 10 PM'},
    {type: 'descriptive', text: 'Meadowview Event Center'},
  ],
  color: solidColor('#ff9169'),
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
    {type: 'eventName', text: 'Our fall festival lets the community get together and'},
    {type: 'eventName', text: "welcome the season. This year we're supporting a"},
    {type: 'eventName', text: 'great cause, too!'},
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
  background: solidColor('#1b1f3a'),
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