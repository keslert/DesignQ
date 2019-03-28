import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'The Union Club and Bar'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'BodoniFLF',
    letterSpacing: 0.02,
    size: 1,
    style: 'italic',
    transform: 'uppercase',
    weight: 400,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Easy'},
    {type: 'eventName', text: 'Listening'},
    {type: 'eventName', text: 'And Smooth'},
    {type: 'eventName', text: 'Jazz'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Gothic',
    letterSpacing: 0.01,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Listen, relax, and enjoy the'},
    {type: 'descriptive', text: 'hottest covers'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'BodoniFLF',
    letterSpacing: 0.02,
    size: 1,
    style: 'italic',
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'Brought to you by Amara Jazz Productions &'},
    {type: 'descriptive', text: 'Lightshow Co.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'League Gothic',
    letterSpacing: 0.08,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'Ticket price: $10, not including food and drinks'},
    {type: 'details', text: 'For table bookings and ticket packages, please feel'},
    {type: 'details', text: 'free to contact us.'},
  ],
  color: solidColor('#ffffff'),
  font: {
    family: 'BodoniFLF',
    letterSpacing: 0.02,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 19,
  title: 'Easy Listening and Smooth Jazz',
  tags: ['event', 'flyer'],
  background: { 
  color: solidColor('#e54049'),
},
  decor: {
    r: .3,
  },
  content: {
    body: {
      w: 'auto',
      alignX: 'left',
      alignY: 'top',
      textAlign: 'left',
      elements: [
        small,
        dominant,
      ]
    },
    footer: {
      alignX: 'left',
      textAlign: 'left',
      elements: [
        bridge,
        heading,
        paragraph,
      ]
    }
  }
}