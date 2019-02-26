import { solidColor } from '.'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Join in on the fun!'},
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
    {type: 'eventName', text: "Isabel's"},
    {type: 'eventName', text: 'Beach'},
    {type: 'eventName', text: 'Bazaar'},
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
    {type: 'descriptive', text: "It's out with the old and in"},
    {type: 'descriptive', text: 'with the new this summer'},
  ],
  color: solidColor('#000000'),
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
    {type: 'descriptive', text: 'Every Friday this July'},
    {type: 'descriptive', text: '10 AM to 8 PM'},
    {type: 'descriptive', text: 'Silton Beach'},
  ],
  color: solidColor('#000000'),
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
    {type: 'eventName', text: 'Interested in setting up with us at'},
    {type: 'eventName', text: 'the bazaar? Get in touch with Isabel for'},
    {type: 'eventName', text: 'more details. Call 123 456 7890.'},
  ],
  color: solidColor('#ffbec0'),
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
  background: solidColor('#ffbec0'),
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