import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Meadowview County'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Rosario',
    letterSpacing: 0.15,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Fall Festival &'},
    {type: 'eventName', text: 'Fundraising'},
  ],
  color: basicColor('#fe906a'),
  font: {
    family: 'Arvo',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A charity event for the Kyobi Cancer Foundation'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Rosario',
    letterSpacing: 0.1,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'Sept. 22, 2020', format: 'MMM. D, YYYY'},
      {type: 'time', text: '1 PM to 10 PM'},
    ],
    {type: 'location', text: 'Meadowview Event Center'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: basicColor('#fe906a'),
  },
  color: basicColor('#fe906a'),
  font: {
    family: 'Arvo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Our fall festival lets the community get together and'},
    {type: 'details', text: "welcome the season. This year we're supporting a"},
    {type: 'details', text: 'great cause, too!'},
  ],
  color: basicColor('#e25232'),
  font: {
    family: 'Rosario',
    letterSpacing: 0.07,
    lineHeight: 1.4,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

export default {
  id: 74,
  title: 'Fall Festival & Fundraising',
  tags: ['event', 'flyer'],
  background: { 
  color: basicColor('#1a1f3b'),
},
  decor: {
    y: .2,
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