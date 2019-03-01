import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Beechtown Foundation'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.110,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Food Drive'},
    {type: 'eventName', text: 'for the'},
    {type: 'eventName', text: 'Homeless'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0.05,
    size: 0.8,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "It's never a bad time to help those who are in"},
    {type: 'descriptive', text: 'need.'},
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
    {type: 'location', text: 'Drop by at 408 Byers Lane.'},
    {type: 'city-state', text: 'Sacramento, CA 94260 any'},
    {type: 'descriptive', text: 'day!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0.110,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'contact', text: "This summer we're open daily from 9am to 5pm If you have"},
    {type: 'contact', text: 'questions, just call +123 456 7890 and look for Janna Murphy.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#ffffff'),
  w: .25,
  h: 10,
}


export default {
  id: 100,
  title: 'Food Drive for the Homeless',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-red-gray-boxes-canned-goods-food-drive-flyer-MAC3TTJ5W2w.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: { src: 'https://images.unsplash.com/photo-1531422888678-9f098cb924ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  },
  content: {
    body: {
      h: 'auto',
      w: 'auto',
      alignY: 'top',
      bleed: { t: 1 },
      background: solidColor('#af232d'),
      elements: [
        small,
        dominant,
        bridge,
        bar,
        heading,
      ]
    },
    footer: {
      background: solidColor('#af232d'),
      bleed: { a: 1 },
      elements: [
        paragraph,
      ]
    }
  }
}