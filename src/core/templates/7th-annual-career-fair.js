import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Zimcore Hubs Presents'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.12,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'The 7th'},
    {type: 'eventName', text: 'Annual'},
    {type: 'eventName', text: 'Career Fair'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'BodoniFLF',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'With more than 200 companies and 50'},
    {type: 'descriptive', text: 'professionals!'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.08,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'From January 5 to 8'},
      {type: 'time', text: '11a.m.'},
    ],
    {type: 'location', text: 'Beechtown Pavillion'},
  ],
  divider: {
    type: 'bar',
    size: 1,
    color: basicColor('#ffffff'),
  },
  color: basicColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.08,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'This event is free and open to the public.'},
    {type: 'details', text: 'Grab this opportunity to meet and connect'},
    {type: 'details', text: 'with companies that are looking to hire.'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.08,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 70,
  title: '7th Annual Career Fair',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-white-interview-modern-job-fair-flyer-MAC4WpwRgN4.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1548842621-11b147269641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 780, h: 705 },
      filters: {
        grayscale: 1,
      },
    },
  },
  decor: {
    t: .2,
    r: .2,
  },
  content: {
    background: { 
  color: basicColor('#da3c33'),
},
    h: 'auto',
    w: 'auto',
    alignX: 'left',
    alignY: 'bottom',
    bleed: {l: 1},
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