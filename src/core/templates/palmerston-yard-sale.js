import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Serendipitous Shopping'},
  ],
  color: solidColor('#ffffff'),
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
    {type: 'eventName', text: "The Palmerstons'"},
    {type: 'eventName', text: 'Yard Sale'},
  ],
  color: solidColor('#464d5b'),
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
    {type: 'descriptive', text: 'June 15-16, 2020'},
    {type: 'descriptive', text: '9 AM - 5 PM'},
    {type: 'descriptive', text: 'The Palmerston Residence'},
  ],
  color: solidColor('#ffffff'),
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
    {type: 'descriptive', text: 'Get great antique finds at'},
    {type: 'descriptive', text: 'low, low prices!'},
  ],
  color: solidColor('#464d5b'),
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
    {type: 'details', text: "Looking for a unique gift? You've come to the right place!"},
    {type: 'details', text: 'Our yard sale is a treasure trove of vintage items. Happy'},
    {type: 'details', text: 'shopping!'},
  ],
  color: solidColor('#ffffff'),
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
  background: solidColor('#deb815'),
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
