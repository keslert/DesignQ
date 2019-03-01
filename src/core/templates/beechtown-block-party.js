import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Time to head outside!'},
  ],
  color: solidColor('#343434'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.15,
    size: 1,
    transform: 'uppercase',
    weight: 700,
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
    family: 'Glacial Indifference',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "We're closing off the streets for a good time."},
  ],
  color: solidColor('#343434'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.003,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'location', text: 'Beechtown Drive'},
      {type: 'date', text: 'January 5, 2020', format: 'MMMM D, YYYY'},
    ],
    {type: 'time', text: '6 PM onwards'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#b5322c'),
  },
  color: solidColor('#b5322c'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.078,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Eat home-cooked meals, drink ice-cold'},
    {type: 'descriptive', text: 'refreshments, listen to good music, and meet the'},
    {type: 'descriptive', text: 'community. We promise you a good time!'},
  ],
  color: solidColor('#343434'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.05,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 99,
  title: 'Beechtown Block Party',
  tags: ['event', 'flyer'],
  background: solidColor('#ffefd5'),
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}