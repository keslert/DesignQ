import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Hop on over and join us!'},
  ],
  color: solidColor('#fff'),
  background: solidColor('#ffc6c6'),
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
    {type: 'eventName', text: 'Easter Fair and'},
    {type: 'eventName', text: 'Egg Hunt 2020'},
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
    {type: 'descriptive', text: 'An event organized by the '},
    {type: 'descriptive', text: 'Winslough City Council'},
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
    {type: 'descriptive', text: '12 April 2020 at 11 A.M.'},
    {type: 'descriptive', text: 'The Winslough Park'},
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
    {type: 'eventName', text: 'Tickets $10'},
    {type: 'eventName', text: 'Inclusive of Free Snacks, Drinks and Rides.'},
    {type: 'eventName', text: 'Get your tickets now at (123) 456-7890 or'},
    {type: 'eventName', text: 'hello@reallygreatsite.com'},
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
  background: solidColor('#44d9e5'),
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