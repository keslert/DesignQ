import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Join in on the fun!'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Lora',
    letterSpacing: 0.0,
    size: 1,
    style: 'italic',
    transform: 'normal',
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
  color: basicColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.03,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "It's out with the old and in"},
    {type: 'descriptive', text: 'with the new this summer'},
  ],
  color: basicColor('#000000'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.120,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'Every Friday this July'},
    {type: 'time', text: '10 AM to 8 PM'},
    {type: 'location', text: 'Silton Beach'},
  ],
  color: basicColor('#000000'),
  font: {
    family: 'Lora',
    letterSpacing: 0,
    size: 1,
    style: 'italic',
    transform: 'normal',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Interested in setting up with us at'},
    {type: 'details', text: 'the bazaar? Get in touch with Isabel for'},
    {type: 'details', text: 'more details. Call 123 456 7890.'},
  ],
  color: basicColor('#ffbec0'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
    weight: 300,
  },
}


export default {
  id: 97,
  title: "Isabel's Beach Bazaar",
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-pink-&-white-tropical-minimalist-simple-clean-summer-event-flyer-MAC3TdMQ9sU.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#ffbec0'),
},
  px: 3.5,
  py: 1.5,
  content: {
    background: {
      img: { 
        src: 'https://images.unsplash.com/photo-1457725798811-c9561232a295?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        meta: {
          w: 800,
          h: 534,
        },
        x: 0,
        y: 0,
      },
    },
    bleed: { r: 1 },
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      background: { 
        color: basicColor('#ffbec0', 0),
      },
      bleed: { l: 2, t: 1 },
      px: 1.5,
      elements: [
        small,
        dominant,
      ]
    },
    footer: {
      background: { 
        color: basicColor('#ffffff'),
      },
      textAlign: 'left',
      elements: [
        bridge,
        heading,
        paragraph,
      ]
    }
  }
}