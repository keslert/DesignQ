import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: "You can't miss this!"},
  ],
  color: solidColor('#a52122'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.120,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Sandio Giants vs.'},
    {type: 'eventName', text: 'Fallfield Cubs'},
  ],
  color: solidColor('#0b0b0b'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Game 1 of the most exciting'},
    {type: 'descriptive', text: 'battle ever seen in hockey.'},
  ],
  color: solidColor('#a52122'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.08,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'May 19th, 2020 | 3 PM to'},
    {type: 'descriptive', text: '6 PM | Sandio Stadium'},
  ],
  color: solidColor('#0b0b0b'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.120,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Will the Giants score their first win against'},
    {type: 'eventName', text: "the Cubs, or will the Cubs' undefeated record"},
    {type: 'eventName', text: 'remain pristine? Be part of history!'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.08,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 101,
  title: 'Sandios Giants',
  tags: ['event', 'flyer'],
  background: {
    img: { src: 'https://images.unsplash.com/photo-1522602043785-821a161a5238?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60' },
  },
  decor: {
    t: .2,
  },
  content: {
    body: {
      border: {
        t: .03,
        background: solidColor('#a52122'),
      },
      background: solidColor('#ffffff'),
      bleed: { a: 1 },
      alignY: 'bottom',
      mb: 0,
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      background: solidColor('#a52122'),
      bleed: { a: 1 },
      elements: [
        heading,
        paragraph,
      ]
    },
  }
}