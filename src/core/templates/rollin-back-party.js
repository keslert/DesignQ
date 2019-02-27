import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'A Throwback Event'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: "Rollin' Back"},
    {type: 'eventName', text: "to the 90's"},
    {type: 'eventName', text: 'Party'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Sifonn',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A celebration organized by'},
    {type: 'descriptive', text: "Martha's Skate Club"},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'June 21', format: 'MMMM D'},
      {type: 'time', text: '6 pm'}
    ],
    {type: 'descriptive', text: 'Ha Luh Open Park'},
    {type: 'descriptive', text: '123 Anywhere Street'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Sifonn',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Admission is $20 per person, roller skates'},
    {type: 'eventName', text: 'included. For tickets, call (123) 456-7890 or'},
    {type: 'eventName', text: 'email hello@reallygreatsite.com'},
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
  id: 66,
  title: 'Rollin Back to the 90s',
  tags: ['event', 'flyer'],
  background: solidColor('#ffffff'),
  content: {
    body: {
      alignY: 'top',
      bleed: {a: 1},
      background: solidColor('#b80f04'),
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      background: solidColor('#ffbb49'),
      bleed: {a: 1},
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}