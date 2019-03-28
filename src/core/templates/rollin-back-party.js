import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'A Throwback Event'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0.15,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: "Rollin' Back"},
    {type: 'eventName', text: "to the 90's"},
    {type: 'eventName', text: 'Party'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Sifonn',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'A celebration organized by'},
    {type: 'descriptive', text: "Martha's Skate Club"},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0.05,
    size: 1,
    transform: 'normal',
    weight: 700,
  },
}

const heading = {
  type: 'heading',
  lines: [
    [
      {type: 'date', text: 'June 21', format: 'MMMM D'},
      {type: 'time', text: '6 pm'}
    ],
    {type: 'descriptive', text: 'Ha Luh Open Park'},
    {type: 'descriptive', text: '123 Anywhere Street'},
  ],
  divider: {
    type: 'line',
    size: 1,
    color: solidColor('#ffffff'),
  },
  color: solidColor('#ffffff'),
  font: {
    family: 'Sifonn',
    letterSpacing: 0.13,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'price|call-to-action', text: 'Admission is $20 per person, roller skates'},
    {type: 'price|call-to-action', text: 'included. For tickets, call (123) 456-7890 or'},
    {type: 'price|call-to-action', text: 'email hello@reallygreatsite.com'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
    weight: 700,
  },
}

const image = { 
  type: 'image',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1512333325950-03bcdceec88d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: {
        w: 800,
        h: 533,
      },
    },
  },
  h: 'fill',
  fill: '#94f9ce',
  bleed: { x: 1 },
  aspectRatio: .3,
  sticky: true,
}


export default {
  id: 66,
  title: 'Rollin Back to the 90s',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-red-yellow-colorful-90s-photo-skate-party-flyer-MAC5uH-riCQ.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: solidColor('#b80f04'),
},
  content: {
    body: {
      h: 'fill',
      textAlign: 'left',
      alignX: 'left',
      alignItemsX: 'left',
      alignY: 'top',
      alignItemsY: 'top',
      elements: [
        small,
        dominant,
        bridge,
        image,
      ]
    },
    footer: {
      background: { 
  color: solidColor('#ffbb49'),
},
      bleed: {a: 1},
      textAlign: 'left',
      alignX: 'left',
      alignItemsX: 'left',
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}