import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Vigilatte Cultural Club'},
  ],
  color: solidColor('#cca882'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.152,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Especially for'},
    {type: 'eventName', text: 'You: A Concert'},
  ],
  color: solidColor('#e9a390'),
  font: {
    family: 'Abril Fatface',
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
    {type: 'date', text: 'May 10, 2020'},
  ],
  color: solidColor('#cca882'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.03,
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
    family: 'Glacial Indifference',
    letterSpacing: 0.073,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'price|contact', text: 'Tickets are $5 each. Reserve now at'},
    {type: 'contact', text: 'www.reallygreatsite.com or get your ticket'},
    {type: 'contact', text: 'straight from Alfredo Torres as (123) 456-7890!'},
  ],
  color: solidColor('#cca882'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.03,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}

export default {
  id: 85,
  title: 'Especially for you',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1441861187324-6970a2587e34?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
      meta: { w: 500, h: 500 },
    },
  },
  content: {
    background: solidColor('#fffdeef0'),
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