import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Araico Theater presents'},
  ],
  color: solidColor('#64492c'),
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
    {type: 'eventName', text: 'The Annual Winter'},
    {type: 'eventName', text: 'Wonderland Gala'},
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
    {type: 'descriptive', text: 'Featuring the one and only Beechtown'},
    {type: 'descriptive', text: 'Company of Dancers'},
  ],
  color: solidColor('#64492c'),
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
    {type: 'descriptive', text: 'December 9 to 10 2020/ 7PM'},
    {type: 'descriptive', text: '123 Anywhere St. Any City'},
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
    {type: 'eventName', text: 'Get your tickets now! Visit www.reallygreatsite.com to purchase.'},
    {type: 'eventName', text: 'Limited tickets available. Prices start at $80.'},
  ],
  color: solidColor('#64492c'),
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
  background: solidColor('#ddb64a'),
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