import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'You are invited!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Byers Lane'},
    {type: 'eventName', text: 'Street Party'},
    {type: 'eventName', text: 'for All'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'An annual event to celebrate life in the bustling city.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'Oct 3. 2020 | Register at'},
    {type: 'descriptive', text: '408 Byers Lane | 7PM onwards'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: "Now in it's 8th year, this event is for everyone."},
    {type: 'eventName', text: 'Just another night full of music, art, good food,'},
    {type: 'eventName', text: 'and great company.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  title: 'Byers Lane Street Party',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1537111355507-1f73d87ecadf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      filters: {
        brightness: 0.7,
      }
    }
  },
  content: {
    body: {
      alignY: 'top',
      alignX: 'left',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      elements: [
        small,
        dominant,
        bridge,
        heading,
      ]
    },
    footer: {
      elements: [
        paragraph,
      ]
    }
  }
}