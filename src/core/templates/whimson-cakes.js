import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Now open to serve you!'},
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
    {type: 'eventName', text: 'Whimson'},
    {type: 'eventName', text: 'Cakes and'},
    {type: 'eventName', text: 'Pastries'},
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
    {type: 'descriptive', text: 'Delectable sweet treats with a touch of'},
    {type: 'descriptive', text: 'whimsy.'},
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
    {type: 'descriptive', text: 'Open daily 8 AM to 10 PM'},
    {type: 'descriptive', text: '1234 Churchill Plaza'},
  ],
  color: solidColor('#fff'),
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
    {type: 'eventName', text: 'Whimson Cakes and Pastries is home to'},
    {type: 'eventName', text: 'baked goodies created with love. We wish'},
    {type: 'eventName', text: 'to delight diners with every bite of our'},
    {type: 'eventName', text: 'sweets.'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Muli',
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