import { solidColor } from '.'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'We are proud to present'},
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
    {type: 'eventName', text: 'The Belle x Bold'},
    {type: 'eventName', text: 'Fashion Show'},
  ],
  color: solidColor('#ffffff'),
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
    {type: 'descriptive', text: 'A fundraiser for the benefit of the Bijou'},
    {type: 'descriptive', text: "High's scholars"},
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
    {type: 'descriptive', text: 'February 14, 2020 | 2PM'},
    {type: 'descriptive', text: 'The Grand Wislough Hall'},
  ],
  color: solidColor('#ffffff'),
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
    {type: 'details', text: 'Join us as we hit the catwalk for a cause!'},
    {type: 'details', text: "We're bringing you fabulous fashionistas"},
    {type: 'details', text: 'flaunting local labels on the ramp!'},
  ],
  color: solidColor('#ffffff'),
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
  background: { 
  color: solidColor('#e54049'),
},
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