import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'The Austfam Community'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.12,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Food Drive for'},
    {type: 'eventName', text: 'the Austfam'},
    {type: 'eventName', text: 'Charity'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Oswald',
    letterSpacing: 0.01,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Give sustenance to those who cannot afford it.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.04,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'Donation Drop-Offs:'},
    {type: 'time', text: '8 am to 2 pm'},
    [
      {type: 'date', text: 'May 13, 2020'},
      {type: 'location', text: 'Paraf Park'},
    ],
  ],
  divider: {
    type: 'dot',
    size: 1,
    color: solidColor('#ffffff'),
  },
  color: solidColor('#ffffff'),
  font: {
    family: 'Oswald',
    letterSpacing: 0.02,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'The Austfam Community is in need of donations for the food drive.'},
    {type: 'details', text: 'All donations will be given to the Austfam Charity.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.02,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

const icon = {
  type: 'icon',
  src: '/champagne.svg',
  fill: '#ffffff',
  size: 1,
  meta: {
    width: 100,
    height: 100,
    colors: [],
    filetype: 'svg',
  },
}

export default {
  id: 57,
  title: 'Food Drive for the Austfam Charity',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-limes-food-drive-flyer-MAC3X-aJ3LE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1527901606534-c62e6f56bb6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      meta: { w: 500, h: 667 },
    }
  },
  content: {
    body: {
      elements: [
        icon,
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      background: { 
  color: solidColor('#81ba5b'),
},
      bleed: { a: 1 },
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}