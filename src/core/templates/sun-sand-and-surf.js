import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: "You're Invited!"},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.25,
    size: 1,
    transform: 'uppercase',
    weight: 300,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Sun, Sand, and'},
    {type: 'eventName', text: 'Surf Soiree'},
  ],
  color: solidColor('#96fdfc'),
  font: {
    family: 'Norwester',
    letterSpacing: 0.01,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A summer party hosted by MLKD Burger Shack!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    size: 1,
    transform: 'normal',
    weight: 300,
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'July 12, 2020'},
      {type: 'time', text: '11:00am to 10:00pm'},
    ],
    {type: 'location', text: '123 Anywhere St.'},
  ],
  divider: {
    type: 'slash',
    size: 1,
    color: solidColor('#96fdfc'),
  },
  color: solidColor('#96fdfc'),
  font: {
    family: 'Norwester',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'MLKD Burger Shack promises amazing food and'},
    {type: 'details', text: 'drinks, plus awesome beach activities and games'},
    {type: 'details', text: 'for all the attendees!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
    weight: 300,
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#96fdfc'),
  w: 1,
  h: 8,
}

export default {
  id: 52,
  title: 'Sun, Sand, and Surf',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-waves-dance-party-flyer-MAC7mvzQbNU.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1550436380-8aa32606d87c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 1067 },
      filters: {
        brightness: 0.7,
      },
    }
  },
  border: {
    a: .02,
    background: solidColor('#152a50'),
  },
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
        bar,
        heading,
        paragraph,
      ]
    },
  }
}