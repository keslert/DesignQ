import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'San Dias Youth Ministry'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Anonymous Pro',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'A Bright Night'},
    {type: 'eventName', text: 'with the Stars'},
  ],
  color: solidColor('#ff5a52'),
  font: {
    family: 'Rubik One',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A classic movie night'},
    {type: 'descriptive', text: 'and fundraising event'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Anonymous Pro',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'Saturday, July 18, 2020'},
      {type: 'time', text: '6 PM'},
    ],
    {type: 'descriptive', text: 'San Dias Mall Cinema 1'},
  ],
  divider: {
    type: 'line',
    size: 2,
    color: solidColor('#ff5a52'),
  },
  color: solidColor('#ff5a52'),
  font: {
    family: 'Anonymous Pro',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Tickets are $35 per person. Admission'},
    {type: 'descriptive', text: 'includes popcorn and a drink. Visit'},
    {type: 'descriptive', text: 'www.reallygreatsite.com for tickets.'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Anonymous Pro',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

export default {
  title: 'A Bright Night with the Stars',
  tags: ['event', 'flyer'],
  background: solidColor('#00344b'),
  decor: {
    t: .45,
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