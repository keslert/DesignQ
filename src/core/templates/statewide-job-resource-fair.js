import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Attention, Job Hunters!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.12,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Statewide Job'},
    {type: 'eventName', text: 'Resource and'},
    {type: 'eventName', text: 'Fair'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Featuring over 200 companies and 50'},
    {type: 'descriptive', text: 'professionals.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.12,
    size: 1,
    transform: 'uppercase',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'August 18, 2020'},
      {type: 'time', text: '11 A.M.'},
    ],
    {type: 'descriptive', text: 'Winslough Pavillion'},
  ],
  divider: {
    type: 'bar',
    size: 1,
    color: solidColor('#ffffff'),
  },
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.18,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Meet and connect with top employers and professionals.'},
    {type: 'eventName', text: 'Participate in the events and figure out the right career'},
    {type: 'eventName', text: 'path for you!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Norwester',
    letterSpacing: 0.02,
    lineHeight: 1.4,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}


export default {
  id: 55,
  title: 'Statewide Job Resource and Fair',
  tags: ['event', 'flyer'],
  background: solidColor('#123358'),
  decor: {
    t: .5,
    r: .3,
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