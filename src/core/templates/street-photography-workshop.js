import { basicColor, stripedColor } from '../utils/color-utils';

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Shutter Club NY'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 300,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Street'},
    {type: 'eventName', text: 'Photography'},
    {type: 'eventName', text: 'Workshop'},
  ],
  color: basicColor('#f5d300'),
  font: {
    family: 'Gidole',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Learn the best photography'},
    {type: 'descriptive', text: 'techniques from the pros!'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    size: 1,
    transform: 'normal',
    weight: 300,
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'November 16 - 17, 2020'},
    {type: 'time', text: '10 A.M. onwards'},
    {type: 'location', text: '123 Anywhere St.'},
  ],
  color: basicColor('#f5d300'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    size: 1,
    transform: 'uppercase',
    weight: 300,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'From candid snapshots to street'},
    {type: 'details', text: "portraits, we'll be learning how to tell"},
    {type: 'details', text: 'different stories through different'},
    {type: 'details', text: 'frames and styles.!'},
  ],
  color: basicColor('#ffffff'),
  font: {
    family: 'Montserrat',
    letterSpacing: 0.05,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
    weightt: 300,
  },
}

const bar = {
  type: 'bar',
  background: {
    color: stripedColor(135, '#f5d300', 6, basicColor('#f5d300', 0), 2)
  },
  w: .5,
  h: 16,
  mb: 2,
}


export default {
  id: 35,
  title: 'Shutter Club Street Photography Workshop',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1465925508512-1e7052bb62e6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 1200 },
      filters: {
        grayscale: 1,
      },
    },
  },
  content: {
    h: 'auto',
    background: { 
  color: basicColor('#000000'),
},
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