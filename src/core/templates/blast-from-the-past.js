import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Altercave Productions'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Blast from'},
    {type: 'eventName', text: 'the Past'},
    {type: 'eventName', text: 'Music'},
    {type: 'eventName', text: 'Festival'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Sifonn',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: "Music from the 50's to the 90's on"},
    {type: 'descriptive', text: 'different stages!'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'October 13, 2020'},
    {type: 'time', text: '5:00 PM - 12:00 MN'},
    {type: 'location', text: 'Downtown Quarkwood'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Sifonn',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Experience music the way it was experienced'},
    {type: 'descriptive', text: 'in the past! Walk to and from several music'},
    {type: 'descriptive', text: 'venues hosting different musical eras!'},
  ],
  color: solidColor('#fff'),
  background: solidColor ('#e369d2'),
  bleed: { a: 1 },
  w: 'auto',
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  title: 'Blast from the past',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1527618802231-5054ec72758b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    }
  },
  content: {
    body: {
      alignY: 'top',
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}