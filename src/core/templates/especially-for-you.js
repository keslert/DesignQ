import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Vigilatte Cultural Club'},
  ],
  color: solidColor('#cca882'),
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
    {type: 'eventName', text: 'Espcially for'},
    {type: 'eventName', text: 'You: A Concert'},
  ],
  color: solidColor('#e9a390'),
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
    {type: 'descriptive', text: "In celebration of Mother's Day this"},
    {type: 'descriptive', text: 'May 10, 2020'},
  ],
  color: solidColor('#cca882'),
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
    [
      {type: 'date', text: 'When: May 10, 2020'},
      {type: 'time', text: '3-6 PM'},
    ],
    {type: 'location', text: 'Where: Milcheur Valley Park'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#e9a390'),
  },
  color: solidColor('#e9a390'),
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
    {type: 'descriptive', text: 'Tickets are $5 each. Reserver now at'},
    {type: 'descriptive', text: 'www.reallygreatsite.com or get your ticket'},
    {type: 'descriptive', text: 'straight from Alfredo Torres as (123) 456-7890!'},
  ],
  color: solidColor('#cca882'),
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
  title: 'Especially for you',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1441861187324-6970a2587e34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60'
    },
  },
  content: {
    background: solidColor('#fffdeeee'),
    h: 'auto',
    alignY: 'bottom',
    bleed: { x: 1 },
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