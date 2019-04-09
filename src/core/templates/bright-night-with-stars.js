import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'San Dias Youth Ministry'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Anonymous Pro',
    letterSpacing: 0.25,
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
  color: basicColor('#ff5a52'),
  font: {
    family: 'Rubik One',
    letterSpacing: 0.03,
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
  color: basicColor('#ffffff'),
  font: {
    family: 'Anonymous Pro',
    letterSpacing: 0.15,
    size: 1,
    style: 'italic',
    transform: 'normal',
    weight: 700,
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
    color: basicColor('#ff5a52'),
  },
  color: basicColor('#ff5a52'),
  font: {
    family: 'Anonymous Pro',
    letterSpacing: 0.13,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Tickets are $35 per person. Admission'},
    {type: 'details', text: 'includes popcorn and a drink. Visit'},
    {type: 'details', text: 'www.reallygreatsite.com for tickets.'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Anonymous Pro',
    letterSpacing: 0.41,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

export default {
  id: 87,
  title: 'A Bright Night with the Stars',
  tags: ['event', 'flyer'],
  background: { 
  color: basicColor('#00344b'),
},
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