import { solidColor } from '.'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: '#sebastianturns21'},
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
    {type: 'eventName', text: 'Sebastian'},
    {type: 'eventName', text: 'Denning's},
    {type: 'eventName', text: '21st'},
    {type: 'eventName', text: 'Birthday'},
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
    {type: 'descriptive', text: 'Join us for an evening full of'},
    {type: 'descriptive', text: 'dancing and great company!'},
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
    {type: 'descriptive', text: 'Aug. 23 | 8 PM to midnight'},
    {type: 'descriptive', text: 'Levir Bar and Club'},
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
    {type: 'details', text: "We're going to be partying until"},
    {type: 'details', text: 'midnight, so make sure you have a '},
    {type: 'details', text: 'lot of energy. Turning 21 happens'},
    {type: 'details', text: 'only once in a lifetime!'},
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