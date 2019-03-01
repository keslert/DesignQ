import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Golden Lights Parish'},
  ],
  color: solidColor('#d5c491'),
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
    {type: 'eventName', text: 'Sing to God:'},
    {type: 'eventName', text: 'A Gospel Concert'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Vidaloka',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Offer your singing voices in praise to the Lord!'},
  ],
  color: solidColor('#d5c491'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.1,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'May 21, 2020', format: 'MMMM D, YYYY'},
      {type: 'time', text: '4 PM Onwards'},
    ],
    {type: 'location', text: 'Golden Lights Theater'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#fff'),
  },
  color: solidColor('#fff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.1,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Watch and sing along as the choir belts their hearts out. With special'},
    {type: 'eventName', text: 'performances and appearances by various celebrity guests.'},
  ],
  color: solidColor('#d5c491'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

export default {
  id: 30,
  title: 'Sing to God',
  tags: ['event', 'flyer'],
  background: solidColor('#e54049'),
  decor: {
    t: .5,
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