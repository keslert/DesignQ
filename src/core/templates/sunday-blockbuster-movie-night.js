import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Bring out the popcorn!'},
  ],
  color: solidColor('#fefae8'),
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
    {type: 'eventName', text: 'Sunday Blockbuster},
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
    family: 'Muli',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'Oct. 25, 2020 - 6 PM to 11 PM'},
    {type: 'descriptive', text: 'Silton Cinemas'},
  ],
  color: solidColor('#fefae8'),
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
    {type: 'eventName', text: 'Missed seeing great movies from last year? Fret'},
    {type: 'eventName', text: "not! We're bringing them back on Sunday"},
    {type: 'eventName', text: 'Blockbuster Movie Night!'},
  ],
  color: solidColor('#fefae8'),
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
  background: solidColor('#344355'),
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