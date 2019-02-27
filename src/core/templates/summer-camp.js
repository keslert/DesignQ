import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'The Talent Center'},
    {type: 'host', text: 'Presents'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: ''},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'small',
  lines: [
    {type: 'date', text: 'March 10 - 15, 2019', format: 'MMMM D, YYYY'},
    {type: 'descriptive', text: 'Open to ages 10 to 14'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: ''},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: ''},
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
  id: 24,
  title: 'Summer Camp 2019',
  tags: ['event', 'flyer'],
  background: solidColor('#e54049'),
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      textAlign: 'left',
      elements: [
        small,
        dominant,
        bridge,
        // heading,
        // paragraph,
      ]
    },
  }
}