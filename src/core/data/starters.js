export const empty = {
  id: 1,
  title: 'Untitled Flyer',
  background: { color: '#ffffff' },
  content: {
    body: {
      elements: [],
    },
  },
  palette: {
    light: '#ffffff',
    nearlight: '#eaeaea',
    gray: '#aaaaaa',
    dark: '#313131',
    primary: 'tomato',
    secondary: '#f00000',
  },
  fonts: {
    dominant: 'Kollektif',
  },
}

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Stanford HCI'},
  ],
  color: {color: '#000'},
  font: {
    family: 'Kollektif',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Ski Trip'},
  ],
  color: {color: '#000'},
  font: {
    family: 'Kollektif',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 900,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Bundle up and get ready for fun!'},
  ],
  color: {color: '#000'},
  font: {
    family: 'Kollektif',
    letterSpacing: 0.05,
    size: 1,
    transform: 'normal',
    weight: 400,
  },
}


export const simpleBody = {
  ...empty,
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
  }
}

export const basicText = [
  {type: 'host', text: 'Stanford HCI'},
  {type: 'eventName', text: "Ski Week!"},
  {type: 'location', text: 'Beechtown Drive'},
  {type: 'date', text: 'January 5, 2020'},
  {type: 'time', text: '6 PM onwards'},
  {type: 'descriptive', text: 'Time to head outside!'},
  {type: 'details', text: 'Eat home-cooked meals, drink ice-cold refreshments, listen to good music, and meet the community. We promise you a good time!'},
]