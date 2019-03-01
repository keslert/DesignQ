import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Quarkwood University'},
  ],
  color: solidColor('#13b694'),
  font: {
    family: 'Aileron',
    letterSpacing: 0.15,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: '5th Annual Health'},
    {type: 'eventName', text: 'is Wealth Fair'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Aileron',
    letterSpacing: -0.02,
    size: 1,
    transform: 'normal',
    weight: 900,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Remember that you are wealthiest'},
    {type: 'descriptive', text: 'at your healthiest!'},
  ],
  color: solidColor('#13b694'),
  font: {
    family: 'Aileron',
    letterSpacing: 0.05,
    size: 1,
    transform: 'normal',
    weight: 700,
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'December 14-16, 2020'},
    {type: 'time', text: '10 AM - 5 PM'},
    {type: 'location', text: 'Quarkwood Events Hall A'},
  ],
  color: solidColor('#0d2839'),
  font: {
    family: 'Aileron',
    letterSpacing: 0.15,
    size: 1,
    transform: 'uppercase',
    weight: 900,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'descriptive', text: 'Check up on your health, sign up for a gym'},
    {type: 'descriptive', text: 'membership, or try out some healthy recipes!'},
    {type: 'descriptive', text: 'Drop by and start getting healthy!'},
  ],
  color: solidColor('#0d2839'),
  font: {
    family: 'Aileron',
    letterSpacing: 0.05,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 88,
  title: 'Annual Health is Wealth Fair',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.pexels.com/photos/42273/doctor-medical-medicine-health-42273.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      filters: {
        brightness: 0.7,
      }
    },
    color: '#0d2839',
    backgroundBlendMode: 'luminosity',
  },
  content: {
    body: {
      alignY: 'top',
      elements: [
        small,
        dominant,
        bridge,
      ]
    },
    footer: {
      background: solidColor('#13b694'),
      bleed: { a: 1 },
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}