import { buildPalette } from "../generator/color";

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
  color: {type: 'solid', color: empty.palette.dark, paletteKey: 'dark'},
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
  color: {type: 'solid', color: empty.palette.dark, paletteKey: 'dark'},
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
  color: {type: 'solid', color: empty.palette.dark, paletteKey: 'dark'},
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
  color: {type: 'solid', color: empty.palette.dark, paletteKey: 'dark'},
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
  color: {type: 'solid', color: empty.palette.dark, paletteKey: 'dark'},
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
  background: {
    color: {type: 'solid', color: empty.palette.light, paletteKey: 'light'}
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

export const imageBackground = {
  ...simpleBody,
  background: {
    color: {type: 'solid', color: empty.palette.dark, paletteKey: 'dark'},
    img: {
      "src": "https://images.pexels.com/photos/257961/pexels-photo-257961.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "colors": [
        "rgb(1, 0, 0)",
        "rgb(132, 2, 14)",
        "rgb(222, 134, 150)",
        "rgb(73, 68, 65)",
        "rgb(103, 202, 135)",
        "rgb(3, 148, 201)",
        "rgb(145, 238, 255)",
        "rgb(254, 255, 255)"
      ],
      "crop": {
        "x": 11.700000000000001,
        "y": 0,
        "width": 53.6,
        "height": 100
      },
      "meta": {
        "w": 1000,
        "h": 750
      },
      filters: {
        brightness: 0.9,
      }
    },
  }
}
imageBackground.palette = buildPalette(imageBackground.background.img.colors);


export const basicText = [
  {type: 'host', text: 'Stanford HCI'},
  {type: 'eventName', text: "Ski Week!"},
  {type: 'location', text: 'Beechtown Drive'},
  {type: 'date', text: 'January 5, 2020'},
  {type: 'time', text: '6 PM onwards'},
  {type: 'descriptive', text: 'Time to head outside!'},
  {type: 'details', text: 'Eat home-cooked meals, drink ice-cold refreshments, listen to good music, and meet the community. We promise you a good time!'},
]