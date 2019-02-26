import { solidColor } from '.'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'You are joyfully invited'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Anna'},
    {type: 'eventName', text: 'Morrison is'},
    {type: 'eventName', text: 'Turning 18'},
  ],
  color: solidColor('#eab6d1'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "It's a birthday party that you will never forget!"},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'See you at Lalalo Bistro on'},
    {type: 'descriptive', text: '04/24/20. Party starts 7pm'},
  ],
  color: solidColor('#eab6d1'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Please join Anna in celebrating her 18th'},
    {type: 'eventName', text: "birthday. It's going to be a fun party with"},
    {type: 'eventName', text: 'friends, family, and loved ones.'},
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

const bar = {
  type: 'bar',
  background: solidColor('#eab6d1'),
  width: 1,
  height: 8,
},


export default {
  title: 'Anna Morrison',
  tags: ['event', 'flyer'],
  background: solidColor('#211834'),
  decor: {
    x: .2,
  },
  content: {
    body: {
      w: 'auto',
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