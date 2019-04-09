import { generatePalette, paletteColor } from "../utils/color-utils";
import cloneDeep from 'lodash/cloneDeep';

export const empty = {
  id: 1,
  title: 'Untitled Flyer',
  background: { 
    color: paletteColor('light'),
  },
  content: {
    body: {
      elements: [],
    },
  },
  palette: {
    light: '#ffffff',
    dark: '#484851',
    accent: '#bbbbbf',
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
  color: paletteColor('dark'),
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
  color: paletteColor('dark'),
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
  color: paletteColor('dark'),
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
  color: paletteColor('dark'),
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
  color: paletteColor('dark'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.05,
    size: 1,
    transform: 'normal',
    weight: 400,
  },
}


export const simpleBody = {
  ...cloneDeep(empty),
  background: {
    color: paletteColor('light'),
  },
  content: {
    body: {
      w: 'auto',
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
  ...cloneDeep(simpleBody),
  background: {
    color: paletteColor('dark', .5),
    img: {
      "src": "https://images.pexels.com/photos/1705667/pexels-photo-1705667.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500",
      "colors": [
        "rgb(189, 161, 18)",
        "rgb(255, 248, 61)",
        "rgb(26, 28, 43)",
        "rgb(73, 158, 241)",
        "rgb(211, 209, 214)",
        "rgb(255, 254, 255)",
        "rgb(203, 13, 103)",
        "rgb(218, 87, 141)"
      ],
      "crop": {
        "x": 17.299999999999997,
        "y": 0,
        "width": 49.5,
        "height": 100
      },
      "meta": {
        "w": 1000,
        "h": 693
      },
      x: 0.5,
      y: 0,
      zoom: 1,
      filters: {
        brightness: 0.9,
      }
    },
  }
}
imageBackground.palette = generatePalette(imageBackground.background.img.colors);
imageBackground.content.body.elements.forEach(el => {
  el.color = paletteColor('light');
})


export const basicText = [
  {type: 'host', text: 'Stanford HCI'},
  {type: 'eventName', text: "Ski Week!"},
  {type: 'location', text: 'Beechtown Drive'},
  {type: 'date', text: 'January 5, 2020'},
  {type: 'time', text: '6 PM onwards'},
  {type: 'descriptive', text: 'Time to head outside!'},
  {type: 'details', text: 'Eat home-cooked meals, drink ice-cold refreshments, listen to good music, and meet the community. We promise you a good time!'},
]