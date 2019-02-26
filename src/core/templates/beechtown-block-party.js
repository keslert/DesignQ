import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Time to head outside!'},
  ],
  color: solidColor('#343434'),
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
    {type: 'eventName', text: "It's the"},
    {type: 'eventName', text: 'Beechtown'},
    {type: 'eventName', text: 'Block Party!'},
  ],
  color: solidColor('#b5322c'),
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
    {type: 'descriptive', text: "We're closing off the streets for a good time."},
  ],
  color: solidColor('#343434'),
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
    {type: 'descriptive', text: 'Beechtown Drive | January 5, 2020'},
    {type: 'descriptive', text: '| 6 PM onwards'},
  ],
  color: solidColor('#b5322c'),
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
    {type: 'eventName', text: 'Eat home-cooked meals, drink ice-cold'},
    {type: 'eventName', text: 'refreshments, listen to good music, and meet the'},
    {type: 'eventName', text: 'community. We promise you a good time!'},
  ],
  color: solidColor('#343434'),
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
  background: solidColor('#ffefd5'),
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