import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Bromson Cake Café'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.110,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Join the'},
    {type: 'eventName', text: 'Annual'},
    {type: 'eventName', text: 'Dessert'},
    {type: 'eventName', text: 'Dash!'},
    {type: 'eventName', text: 'Dash!'},
  ],
  color: solidColor('#ffeaa2'),
  font: {
    family: 'Aleo',
    letterSpacing: 0.074,
    size: 1,
    transform: 'uppercase',
    weight: 700,
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
    style: 'italic',
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
    letterSpacing: 0.08,
    size: 1,
    transform: 'normal',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'The Dessert Dash is a joint fundraising effort of the'},
    {type: 'details', text: 'Restaurant Council and City Charity Office.'},
    {type: 'details', text: 'Join the movement!'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#ffeaa2'),
  w: 1,
  h: 8,
}

export default {
  id: 103,
  title: 'Annual Dessert Dash',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-yellow-ice-cream-parlor-fundraiser-flyer-MAC5D0kbNIw.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: { src: 'https://images.pexels.com/photos/749102/pexels-photo-749102.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500' },
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