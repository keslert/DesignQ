import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'We proudly bring you'},
  ],
  color: solidColor('#7f9f47'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Run to Save'},
    {type: 'eventName', text: 'the Trees'},
    {type: 'eventName', text: '2020'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Peace Sans',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'An annual fundraiser for the'},
    {type: 'descriptive', text: 'Quarkoak Foundation'},
  ],
  color: solidColor('#7f9f47'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'March 27, 2020'},
      {type: 'time', text: 'Starts at 7 A.M.'},
    ],
    {type: 'descriptive', text: '123 Anywhere St.'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#ffffff'),
  },
  color: solidColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Join us as we run towards the finish line with the goal to'},
    {type: 'descriptive', text: 'protect the trees, conserve out forests, and'},
    {type: 'descriptive', text: 'save our planet!'},
  ],
  color: solidColor('#7f9f47'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

export default {
  id: 104,
  title: 'Run to save the trees',
  tags: ['event', 'flyer'],
  background: solidColor('#ffd20e'),
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