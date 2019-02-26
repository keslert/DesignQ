import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: "Let's jam for a cause!"},
  ],
  background: solidColor('#ffffff'),
  color: solidColor('#201f05'),
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
    {type: 'eventName', text: 'Rock Out for the'},
    {type: 'eventName', text: 'Cure Concert!'},
  ],
  color: solidColor('#201f05'),
  font: {
    family: 'Sensei',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A benefit concert for the '},
    {type: 'descriptive', text: "Winslough Children's Foundation"},
  ],
  color: solidColor('#201f05'),
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
    [
      {type: 'date', text: 'Mar. 4, 2020'},
      {type: 'time', text: '6 PM to 10 PM'},
    ],
    {type: 'location', text: 'Rubber House Concert Grounds'},
  ],
  divider: {
    type: 'bar',
    size: 1,
    color: solidColor('#201f05'),
  },
  color: solidColor('#201f05'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'The Rock Out for the Cure Concert'},
    {type: 'eventName', text: 'is a fundraising event which aims to'},
    {type: 'eventName', text: 'help cancer-stricken children in'},
    {type: 'eventName', text: 'developing countries.'},
  ],
  color: solidColor('#201f05'),
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
  title: '',
  tags: ['event', 'flyer'],
  background: solidColor('#fcd901'),
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