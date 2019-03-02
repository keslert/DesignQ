import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Araico Community Church'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.2,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Bible Study'},
    {type: 'eventName', text: 'Sundays'},
    {type: 'eventName', text: 'for Teens'},
  ],
  color: solidColor('#c0b99c'),
  font: {
    family: 'League Spartan',
    letterSpacing: 0.1,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A fun and interesting way to keep faith strong'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.1,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'Understand scripture'},
    {type: 'descriptive', text: 'and find inspiration in Him.'},
  ],
  color: solidColor('#c0b99c'),
  font: {
    family: 'Open Sans',
    letterSpacing: 0.12,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: '"Seek the LORD and his strength; seek his presence'},
    {type: 'eventName', text: 'continually!"- 1 Chronicles 16:11'},
    {type: 'eventName', text: 'Register at reallygreatsite.com'},
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


export default {
  id: 53,
  title: 'Bible Study Sundays for Teens',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.pexels.com/photos/1173794/pexels-photo-1173794.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=800',
      filters: {
        brightness: 0.6,
      }
    },
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsXAlign: 'left',
      itemsYAlign: 'top',
      textAlign: 'left',
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