import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Beechtown Foundation'},
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
    {type: 'eventName', text: 'Food Drive'},
    {type: 'eventName', text: 'for the'},
    {type: 'eventName', text: 'Homeless'},
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
    letterSpacing: 0,
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
    transform: 'uppercase',
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#ffffff'),
  width: .5,
  height: 8,
},


export default {
  id: 100,
  title: 'Food Drive for the Homeless',
  tags: ['event', 'flyer'],
  background: {
    img: { src: 'https://images.unsplash.com/photo-1531422888678-9f098cb924ea?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60' },
  },
  content: {
    body: {
      h: 'auto',
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