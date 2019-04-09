import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Now open to serve you!'},
  ],
  color: basicColor('#f5efde'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.130,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Whimson'},
    {type: 'eventName', text: 'Cakes and'},
    {type: 'eventName', text: 'Pastries'},
  ],
  color: basicColor('#fd7b7b'),
  font: {
    family: 'Lilita One',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Delectable sweet treats with a touch of'},
    {type: 'descriptive', text: 'whimsy.'},
  ],
  color: basicColor('#f5efde'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
    weight: 300,
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'time', text: 'Open daily 8 AM to 10 PM'},
    {type: 'location', text: '1234 Churchill Plaza'},
  ],
  color: basicColor('#fd7b7b'),
  font: {
    family: 'Lilita One',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Whimson Cakes and Pastries is home to'},
    {type: 'details', text: 'baked goodies created with love. We wish'},
    {type: 'details', text: 'to delight diners with every bite of our'},
    {type: 'details', text: 'sweets.'},
  ],
  color: basicColor('#f5efde'),
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
  id: 102,
  title: 'Whimson Cakes',
  tags: ['event', 'flyer'],
  background: { 
  color: basicColor('#94d6cd'),
},
  decor: {
    a: .1,
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