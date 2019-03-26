import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Choose the right job'},
  ],
  color: solidColor('#ffebbf'),
  font: {
    family: 'Arvo',
    letterSpacing: 0.167,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Beechtown City'},
    {type: 'eventName', text: 'Job Fair 2020'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Get to know companies from'},
    {type: 'descriptive', text: 'various industries'},
  ],
  color: solidColor('#ffebbf'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0.045,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'September 22, 2020'},
    {type: 'time', text: '10 AM - 4 PM'},
    {type: 'location', text: 'Heiman Convention Center'},
  ],
  color: solidColor('#ffebbf'),
  font: {
    family: 'Arvo',
    letterSpacing: 0.147,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Drop by for a meet & greet with employers'},
    {type: 'details', text: 'from various industries! There will also be'},
    {type: 'details', text: 'career talks in the afternoon.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Arvo',
    letterSpacing: 0.05,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 92,
  title: 'Beechtown City Job Fair',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1533985065508-e5848b120b80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      meta: { w: 500, h: 461 },
      filters: {
        brightness: 0.7,
      },
    },
    color: '#1b92a5',
    backgroundBlendMode: 'overlay',
  },
  content: {
    body: {
      alignX: 'right',
      alignY: 'top',
      itemsAlignX: 'right',
      itemsAlignY: 'top',
      textAlign: 'right',
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      alignX: 'right',
      itemsAlignX: 'right',
      textAlign: 'right',
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}