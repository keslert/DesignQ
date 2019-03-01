import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Lenderly Fashions'},
  ],
  color: solidColor('#a33a20'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.232,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'The Winter Wonderful'},
    {type: 'eventName', text: 'Apparel Sale'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Abril Fatface',
    letterSpacing: 0.022,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "The season's most awaited sales event is here!"},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Abril Fatface',
    letterSpacing: 0.025,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'Dec. 5-6, 2020'},
      {type: 'time', text: '10:00 am to 8:00 pm'},
    ],
    {type: 'location', text: 'San Dias Town Hall'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#a33a20'),
  },
  color: solidColor('#a33a20'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.049,
    size: 1,
    transform: 'normal',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Be the most stylish you can be without breaking the bank.'},
    {type: 'eventName', text: "Catch Lenderly's Winte Wonderful sale before it's over!"},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Norwester',
    letterSpacing: 0.019,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 39,
  title: 'The Winter Wonderful Apparel Sale',
  tags: ['event', 'flyer'],
  background: solidColor('#fffaee'),
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