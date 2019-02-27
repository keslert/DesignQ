import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Meadowview County'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Rosario',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Fall Festival &'},
    {type: 'eventName', text: 'Fundraising'},
  ],
  color: solidColor('#fe906a'),
  font: {
    family: 'Arvo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A charity event for the Kyobi Cancer Foundation'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Rosario',
    letterSpacing: 0,
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
    type: 'bar',
    size: 1,
    color: solidColor('#fe906a'),
  },
  color: solidColor('#fe906a'),
  font: {
    family: 'Arvo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Our fall festival lets the community get together and'},
    {type: 'eventName', text: "welcome the season. This year we're supporting a"},
    {type: 'eventName', text: 'great cause, too!'},
  ],
  color: solidColor('#e25232'),
  font: {
    family: 'Rosario',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

export default {
  id: 74,
  title: 'Fall Festival & Fundraising',
  tags: ['event', 'flyer'],
  background: solidColor('#1a1f3b'),
  decor: {
    y: .2,
  },
  content: {
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