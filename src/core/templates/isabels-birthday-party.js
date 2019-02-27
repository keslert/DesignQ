import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'descriptive', text: 'Dance the night away!'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: "Isabel's 21st"},
    {type: 'eventName', text: 'Birthday Party'},
  ],
  color: solidColor('#2c7b99'),
  font: {
    family: 'Edo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A night of music, danceing, and'},
    {type: 'descriptive', text: 'a whole lot of fun!'},
  ],
  color: solidColor('#2c7b99'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'September 18, 2020'},
    {type: 'time', text: 'Dancing starts at 9:00 PM'},
    {type: 'location', text: 'Club Audora'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Present this birthday inviation at the bar to get 2 free cocktails of'},
    {type: 'descriptive', text: "your choice. Can't wait to see you there!"},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Kollektif',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 75,
  title: "Isabel's 21st Birthday Party",
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1526205711417-6f36af4f3c55?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    },
  },
  content: {
    header: {
      elements: [small]
    },
    body: {
      alignY: 'bottom',
      background: {
        color: '#ffffff',
        mask: {},
      },
      elements: [
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