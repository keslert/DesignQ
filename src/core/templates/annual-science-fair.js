import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'University of El Dorado'},
  ],
  color: solidColor('#ffffff'),
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
    {type: 'eventName', text: 'The 15th'},
    {type: 'eventName', text: 'Annual'},
    {type: 'eventName', text: 'Science'},
    {type: 'eventName', text: 'Fair'},
  ],
  color: solidColor('#f3ed42'),
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
    {type: 'descriptive', text: 'Discovering learning and'},
    {type: 'descriptive', text: 'reaching for the beyond'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'August 18, 2020'},
    {type: 'time|location', text: '3PM at the'},
    {type: 'location', text: 'USD Event Hall'},
  ],
  color: solidColor('#f3ed42'),
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
    {type: 'eventName', text: 'Professional talks, ground-breaking'},
    {type: 'eventName', text: 'experiments, career opportunities'},
    {type: 'eventName', text: 'and more await! Register at'},
    {type: 'eventName', text: 'reallygreatsite.com'},
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
  title: 'Annual Science Fair',
  tags: ['event', 'flyer'],
  background: solidColor('#316a77'),
  decor: {
    r: .5,
    background: {
      img: {
        src: 'https://images.unsplash.com/photo-1532187643603-ba119ca4109e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      }
    }
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