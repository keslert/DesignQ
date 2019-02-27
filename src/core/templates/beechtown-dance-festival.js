import { solidColor } from '.'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'We are proud to present'},
  ],
  color: solidColor('#b7f6ff'),
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
    {type: 'eventName', text: 'The'},
    {type: 'eventName', text: 'Beechtown'},
    {type: 'eventName', text: 'Dance'},
    {type: 'eventName', text: 'Festival 2020'},
  ],
  color: solidColor('#caf843'),
  font: {
    family: 'Oswald',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Join us for two days of non-stop'},
    {type: 'descriptive', text: 'dancing and partying!'},
  ],
  color: solidColor('#b7f6ff'),
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
    {type: 'descriptive', text: 'August 23-24, 2020 |'},
    {type: 'descriptive', text: 'Starts at 11 A.M.'},
    {type: 'descriptive', text: 'Beechtown Resort'},
  ],
  color: solidColor('#caf843'),
  font: {
    family: 'Oswald',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: "We're bringing electronic and dance"},
    {type: 'eventName', text: "lovers and awesome lineup that's"},
    {type: 'eventName', text: 'packed with the most celebrated names'},
    {type: 'eventName', text: 'in the industry!'},
  ],
  color: solidColor('#b7f6ff'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  title: 'The Beechtown Dance Festival',
  tags: ['event', 'flyer'],
  background: solidColor('#ba3e7f'),
  decor: {
    a: .1,
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