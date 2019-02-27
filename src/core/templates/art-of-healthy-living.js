import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Organika Lifestyle Center'},
  ],
  color: solidColor('#697b60'),
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
    {type: 'eventName', text: 'The Art of '},
    {type: 'eventName', text: 'Healthy Living'},
  ],
  color: solidColor('#697b60'),
  font: {
    family: 'Aleo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A seminar about how to live a healthier lifestyle'},
  ],
  color: solidColor('#697b60'),
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
    {type: 'descriptive', text: 'June 20, 2020'},
    {type: 'descriptive', text: '1 PM - 3 PM'},
    {type: 'descriptive', text: 'Beechtown Auditorium'},
  ],
  color: solidColor('#697b60'),
  font: {
    family: 'Aleo',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'From eating the right food to the perfect'},
    {type: 'eventName', text: 'exercise routine, find the best path to a '},
    {type: 'eventName', text: 'happier and healthier you.'},
  ],
  color: solidColor('#697b60'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  title: 'The Art of Healthy Living',
  tags: ['event', 'flyer'],
  background: solidColor('#ffffff'),
  border: {
    a: .03,
    background: solidColor('#ffffff'),
  },
  decor: {
    t: .45,
    type: 'gallery',
  },
  content: {
    body: {
      elements: [
        small,
        dominant,
        bridge,
        heading,
      ]
    },
    footer: {
      background: solidColor('#697b60'),
      bleed: { a: 1 },
      elements: [
        paragraph,
      ]
    }
  }
}