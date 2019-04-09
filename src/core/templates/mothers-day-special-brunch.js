import { basicColor } from '../utils/color-utils';


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'The Stockton Cafe'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Josefin Sans',
    letterSpacing: 0.15,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: "Mother's Day"},
    {type: 'eventName', text: 'Special Brunch'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Playfair Display',
    letterSpacing: 0,
    size: 1,
    style: 'italic',
    transform: 'normal',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Celebrate with us and make your mother feel special!'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Josefin Sans',
    letterSpacing: 0.03,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'Visit us on May 10, 2020,'},
    {type: 'time', text: 'between 10:00 AM and 2:00 PM.'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Playfair Display',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'call-to-action', text: "Don't miss out. Reserve a table now! Call us at (123) 456-7890 or"},
    {type: 'call-to-action', text: 'use our online booking system. Visit www.reallygreatsite.com.'},
  ],
  color: basicColor('#ff7f7d'),
  font: {
    family: 'Josefin Sans',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
    weight: 700,
  },
}


export default {
  id: 84,
  title: 'Mother\'s Day Special Brunch',
  tags: ['event', 'flyer'],
  background: { 
  color: basicColor('#ff7f7d'),
},
  decor: {
    t: .3,
    l: .1,
  },
  content: {
    body: {
      alignX: 'right',
      itemsAlignX: 'right',
      textAlign: 'right',
      elements: [
        small,
        dominant,
        bridge,
        heading,
      ]
    },
    footer: {
      background: { 
  color: basicColor('#ffffff'),
},
      bleed: { l: 2, r: 1, b: 1 },
      alignX: 'right',
      itemsAlignX: 'right',
      textAlign: 'right',
      elements: [
        paragraph,
      ],
    }
  }
}