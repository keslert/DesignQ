import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Hop on over and join us!'},
  ],
  color: solidColor('#fff'),
  background: solidColor('#ffc6c6'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.1,
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
    family: 'Fredoka One',
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
    family: 'Glacial Indifference',
    letterSpacing: 0.04,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date|time', text: '12 April 2020 at 11 A.M.'},
    {type: 'location', text: 'The Winslough Park'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Fredoka One',
    letterSpacing: 0.18,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'price', text: 'Tickets $10'},
    {type: 'descriptive', text: 'Inclusive of Free Snacks, Drinks and Rides.'},
    {type: 'contact', text: 'Get your tickets now at (123) 456-7890 or'},
    {type: 'contact', text: 'hello@reallygreatsite.com'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.03,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 76,
  title: 'Easter Fair and Egg Hunt',
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