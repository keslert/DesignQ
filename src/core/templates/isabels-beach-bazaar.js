import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Join in on the fun!'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Lora',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: "Isabel's"},
    {type: 'eventName', text: 'Beach'},
    {type: 'eventName', text: 'Bazaar'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "It's out with the old and in"},
    {type: 'descriptive', text: 'with the new this summer'},
  ],
  color: solidColor('#000000'),
  font: {
    family: 'Lora',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'Every Friday this July'},
    {type: 'time', text: '10 AM to 8 PM'},
    {type: 'location', text: 'Silton Beach'},
  ],
  color: solidColor('#000000'),
  font: {
    family: 'Lora',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Interested in setting up with us at'},
    {type: 'descriptive', text: 'the bazaar? Get in touch with Isabel for'},
    {type: 'descriptive', text: 'more details. Call 123 456 7890.'},
  ],
  color: solidColor('#ffbec0'),
  font: {
    family: 'Lora',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  title: "Isabel's Beach Bazaar",
  tags: ['event', 'flyer'],
  background: solidColor('#ffbec0'),
  content: {
    background: {
      img: { src: 'https://images.unsplash.com/photo-1457725798811-c9561232a295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
    },
    bleed: { r: 1 },
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      background: solidColor('transparent'),
      bleed: { l: 2, t: 1 },
      elements: [
        small,
        dominant,
      ]
    },
    footer: {
      background: solidColor('#ffffff'),
      textAlign: 'left',
      elements: [
        bridge,
        heading,
        paragraph,
      ]
    }
  }
}