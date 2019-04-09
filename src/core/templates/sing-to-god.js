import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Golden Lights Parish'},
  ],
  color: basicColor('#353535'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.1,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Sing to God:'},
    {type: 'eventName', text: 'A Gospel Concert'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Vidaloka',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Offer your singing voices in praise to the Lord!'},
  ],
  color: basicColor('#353535'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.1,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'May 21, 2020', format: 'MMMM D, YYYY'},
      {type: 'time', text: '4 PM Onwards'},
    ],
    {type: 'location', text: 'Golden Lights Theater'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: basicColor('#ffffff'),
  },
  color: basicColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.1,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Watch and sing along as the choir belts their hearts out. With special'},
    {type: 'details', text: 'performances and appearances by various celebrity guests.'},
  ],
  color: basicColor('#353535'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

export default {
  id: 30,
  title: 'Sing to God',
  tags: ['event', 'flyer'],
  inspirtation: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-gold-with-white-ornament-gospel-concert-church-flyer-MAC7WYDUvHw.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#d5c590'),
},
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