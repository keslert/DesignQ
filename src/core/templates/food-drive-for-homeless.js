import { solidColor } from '.'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Beechtown Foundation'},
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
    {type: 'eventName', text: 'Food Drive'},
    {type: 'eventName', text: 'for the'},
    {type: 'eventName', text: 'Homeless'},
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
    {type: 'descriptive', text: "It's never a bad time to help those who are in"},
    {type: 'descriptive', text: 'need.'},
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
    {type: 'descriptive', text: 'Drop by at 408 Byers Lane.'},
    {type: 'descriptive', text: 'Sacramento, CA 94260 any'},
    {type: 'descriptive', text: 'day!'},
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
    {type: 'eventName', text: "This summer we're open daily from 9am to 5pm If you have"},
    {type: 'eventName', text: 'questions, just call +123 456 7890 and look for Janna Murphy.'},
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
  title: '',
  tags: ['event', 'flyer'],
  background: solidColor('#af232d'),
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