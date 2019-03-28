import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Bring out the popcorn!'},
  ],
  color: solidColor('#fefae8'),
  font: {
    family: 'Aleo',
    letterSpacing: 0.17,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Sunday Blockbuster'},
    {type: 'eventName', text: 'Movie Night'},
  ],
  color: solidColor('#fefae8'),
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
    {type: 'descriptive', text: 'A film showing of the greatest movies'},
    {type: 'descriptive', text: 'from 2019.'},
  ],
  color: solidColor('#fefae8'),
  font: {
    family: 'Aleo',
    letterSpacing: 0.08,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'Oct. 25, 2020'},
      {type: 'time', text: '6 PM to 11 PM'},
    ],
    {type: 'descriptive', text: 'Silton Cinemas'},
  ],
  divider: {
    type: 'dash',
    size: 1,
    color: solidColor('#fefae8'),
  },
  color: solidColor('#fefae8'),
  font: {
    family: 'Norwester',
    letterSpacing: 0.064,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Missed seeing great movies from last year? Fret'},
    {type: 'details', text: "not! We're bringing them back on Sunday"},
    {type: 'details', text: 'Blockbuster Movie Night!'},
  ],
  color: solidColor('#fefae8'),
  font: {
    family: 'Aleo',
    letterSpacing: 0.03,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 73,
  title: 'Sunday Blockbuster Movie Night',
  tags: ['event', 'flyer'],
  background: { 
  color: solidColor('#344355'),
},
  decor: {
    b: .4,
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