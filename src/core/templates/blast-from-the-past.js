import { basicColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Altercave Productions'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.16,
    size: 1,
    transform: 'uppercase',
    weight: 700,
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
  color: basicColor('#ffffff'),
  font: {
    family: 'Sifonn',
    letterSpacing: 0,
    lineHeight: 1.2,
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
  color: basicColor('#ffffff'),
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
  color: basicColor('#ffffff'),
  font: {
    family: 'Sifonn',
    letterSpacing: 0.09,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Experience music the way it was experienced'},
    {type: 'details', text: 'in the past! Walk to and from several music'},
    {type: 'details', text: 'venues hosting different musical eras!'},
  ],
  color: basicColor('#ffffff'),
  background: {
    color: basicColor('#e369d2'),
  },
  bleed: { a: 1 },
  w: 'fill',
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
    weight: 300,
  },
}


export default {
  id: 79,
  title: 'Blast from the past',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-bright-pink-photo-music-festival-flyer-MAC50_8yy5U.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1527618802231-5054ec72758b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      meta: { w: 500, h: 333 },
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
      bleed: { b: 1 },
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}