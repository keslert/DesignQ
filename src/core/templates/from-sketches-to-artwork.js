import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Hisburgh High presents'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Muli',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'From'},
    {type: 'eventName', text: 'Sketches to'},
    {type: 'eventName', text: 'Artworks'},
  ],
  color: solidColor('#fff'),
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
    {type: 'descriptive', text: 'An illustration workshop organized by'},
    {type: 'descriptive', text: 'Michelle Saunders.'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Muli',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'September 5-10, 2020'},
    {type: 'descriptive', text: '1-3 PM'},
    {type: 'descriptive', text: "Marissa's Art Corner"},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Muli',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Entry Fee: $50'},
    {type: 'eventName', text: 'For slot reservations, contact me at'},
    {type: 'eventName', text: 'hello@reallygreatsite.com. More inforamtion at'},
    {type: 'eventName', text: 'www.reallygreatsite.com'},
  ],
  color: solidColor('#fff'),
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
  title: '',
  tags: ['event', 'flyer'],
  background: solidColor('#e54049'),
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