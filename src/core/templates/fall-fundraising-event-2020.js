import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'McDowell Digital Media'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Gidole',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Fall Fundraising'},
    {type: 'eventName', text: 'Event 2020'},
  ],
  color: solidColor('#e45330'),
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
    {type: 'descriptive', text: 'Sept. 22, 2020 | 1 PM to 10 PM'},
    {type: 'descriptive', text: 'McDowell Digital Center'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Gidole',
    letterSpacing: 0,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: "For the benefit of Winslough Children's"},
    {type: 'descriptive', text: 'Foundation'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Gidole',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'eventName', text: 'Celebrate all things fall while giving back to Mother'},
    {type: 'eventName', text: 'Nature. Our fall fundraising event combines good fun'},
    {type: 'eventName', text: 'with a great cause.'},
  ],
  color: solidColor('#e45330'),
  font: {
    family: 'Gidole',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'uppercase',
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#e25232'),
  width: .5,
  height: 2,
},


export default {
  id: 69,
  title: 'Fall Fundraising Event 2020',
  tags: ['event', 'flyer'],
  background: solidColor('#424242'),
  decor: {
    y: .2,
  },
  content: {
    background: solidColor('#424242'),
    bleed: { a: 1 },
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