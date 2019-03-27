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
    dark: '#484848',
    primary: '#bbbbbb',
  },
  fonts: {
    dominant: 'Open Sans',
  },
}

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Stanford HCI'},
  ],
  color: {color: '#000'},
  font: {
    family: 'Open Sans',
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
    family: 'Open Sans',
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
    family: 'Open Sans',
    letterSpacing: 0.05,
    size: 1,
    transform: 'normal',
    weight: 400,
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'Sep. 5-8'},
    {type: 'location', text: 'Park City, Utah'},
  ],
  color: {color: '#000'},
  font: {
    family: 'Open Sans',
    letterSpacing: 0.05,
    size: 1,
    transform: 'normal',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Take a break from your normal environmental'},
    {type: 'details', text: 'and hit the slopes with your fellow researchers!'},
  ],
  color: {color: '#000'},
  font: {
    family: 'Open Sans',
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
        heading,
        paragraph,
      ]
    },
  }
}

export const imageBackground = {
  ...simpleBody,
  background: {
    img: {
      "src": "https://images.pexels.com/photos/869258/pexels-photo-869258.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800",
      "palette": [
        "rgb(251, 251, 251)",
        "rgb(0, 13, 29)",
        "rgb(21, 40, 57)",
        "rgb(49, 67, 87)",
        "rgb(67, 113, 149)",
        "rgb(112, 132, 157)",
        "rgb(146, 170, 194)",
        "rgb(191, 201, 211)"
      ],
      "crop": {
        "x": 1.7500000000000002,
        "y": 0,
        "width": 40.125,
        "height": 100
      },
      "meta": {
        "w": 1600,
        "h": 899
      },
      filters: {
        brightness: 0.9,
      }
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