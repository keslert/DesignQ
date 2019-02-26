import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'The Austfam Community'},
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
    {type: 'eventName', text: 'Food Drive for'},
    {type: 'eventName', text: 'the Austfam'},
    {type: 'eventName', text: 'Charity'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Oswald',
    letterSpacing: 0,
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
    letterSpacing: 0,
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
    {type: 'descriptive', text: 'The Austfam Community is in need of donations for the food drive.'},
    {type: 'descriptive', text: 'All donations will be given to the Austfam Charity.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Oswald',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

export default {
  title: 'Food Drive for the Austfam Charity',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1527901606534-c62e6f56bb6e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    }
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