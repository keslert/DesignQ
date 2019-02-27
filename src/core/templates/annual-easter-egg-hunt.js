import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Winslough County Presents'},
  ],
  color: solidColor('#fff4dc'),
  font: {
    family: 'Lato',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Annual'},
    {type: 'eventName', text: 'Easter Egg'},
    {type: 'eventName', text: 'Hunt 2020'},
  ],
  color: solidColor('#fff4dc'),
  font: {
    family: 'Lilita One',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Come and join the fun'},
    {type: 'descriptive', text: 'with the whole family!'},
  ],
  color: solidColor('#fff4dc'),
  font: {
    family: 'Lato',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date|time', text: 'April 12, 2:00 P.M., at the'},
    {type: 'location', text: 'Winslough County Park'},
  ],
  color: solidColor('#fff4dc'),
  font: {
    family: 'Lato',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Please pre-register for the event at'},
    {type: 'descriptive', text: 'www.reallygreatsite.com or sign-up at the'},
    {type: 'descriptive', text: 'Community Affairs Office by April 11, 4:00 PM'},
  ],
  color: solidColor('#fff4dc'),
  font: {
    family: 'Lato',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}


export default {
  title: 'Annual Easter Egg Hunt 2020',
  tags: ['event', 'flyer'],
  background: solidColor('#96cfdd'),
  decor: {
    l: .2,
  },
  content: {
    body: {
      alignX: 'right',
      alignY: 'top',
      itemsAlignX: 'right',
      itemsAlignY: 'top',
      textAlign: 'right',
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      alignX: 'right',
      itemsAlignX: 'right',
      textAlign: 'right',
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}