import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Zimcore Hubs Presents'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.05,
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
    {type: 'eventName', text: 'Career'},
    {type: 'eventName', text: 'Fair'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Bodoni FLF',
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
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
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
    color: solidColor('#ffffff'),
  },
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'This event is free and open to the public.'},
    {type: 'eventName', text: 'Grab this opportunity to meet and connect'},
    {type: 'eventName', text: 'with companies that are looking to hire.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  id: 70,
  title: '7th Annual Career Fair',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1548842621-11b147269641?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      filters: {
        grayscale: 1,
      },
    },
  },
  content: {
    background: solidColor('#da3c33'),
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