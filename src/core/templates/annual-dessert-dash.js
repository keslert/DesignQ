import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Bromson Cake Café'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Join the'},
    {type: 'eventName', text: 'Annual'},
    {type: 'eventName', text: 'Dessert'},
    {type: 'eventName', text: 'Dash!'},
  ],
  color: solidColor('#ffeaa2'),
  font: {
    family: 'Aleo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "We're donating 50% of the proceeds"},
    {type: 'descriptive', text: 'from our desserts.'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'October 1-15, 2020', format: 'MMMM D-D, YYYY'},
    {type: 'time', text: 'Open daily from 8 AM - 9 PM'},
  ],
  color: solidColor('#ffeaa2'),
  font: {
    family: 'Aleo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'The Dessert Dash is a joint fundraising effort of the'},
    {type: 'descriptive', text: 'Restaurant Council and City Charity Office.'},
    {type: 'descriptive', text: 'Join the movement!'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#ffeaa2'),
  width: 1,
  height: 8,
},

export default {
  id: 103,
  title: 'Annual Dessert Dash',
  tags: ['event', 'flyer'],
  background: {
    img: { src: '' },
  },
  content: {
    h: 'auto',
    background: solidColor('#212328cc'),
    body: {
      elements: [
        small,
        dominant,
        bridge,
        bar,
        heading,
        paragraph,
      ]
    },
  }
}