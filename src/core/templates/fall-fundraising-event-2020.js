import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'McDowell Digital Media'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Gidole',
    letterSpacing: 0.1,
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
    letterSpacing: 0.1,
    size: 1,
    transform: 'uppercase',
    weight: 700,
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
    letterSpacing: 0.09,
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
    letterSpacing: 0.14,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Celebrate all things fall while giving back to Mother'},
    {type: 'descriptive', text: 'Nature. Our fall fundraising event combines good fun'},
    {type: 'descriptive', text: 'with a great cause.'},
  ],
  color: solidColor('#e45330'),
  font: {
    family: 'Gidole',
    letterSpacing: 0.1,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

const bar = {
  type: 'bar',
  background: solidColor('#e25232'),
  w: .5,
  h: 2,
}


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