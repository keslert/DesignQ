import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'The Union Club and Bar'},
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
    {type: 'eventName', text: 'Easy'},
    {type: 'eventName', text: 'Listening'},
    {type: 'eventName', text: 'And Smooth'},
    {type: 'eventName', text: 'Jazz'},
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
    {type: 'descriptive', text: 'Listen, relax, and enjoy the'},
    {type: 'descriptive', text: 'hottest covers'},
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
    {type: 'descriptive', text: 'Brought to you by Amara Jazz Productions &'},
    {type: 'descriptive', text: 'Lightshow Co.'},
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
    {type: 'eventName', text: 'Ticket price: $10, not including food and drinks'},
    {type: 'eventName', text: 'For table bookings and ticket packages, please feel'},
    {type: 'eventName', text: 'free to contact us.'},
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
  id: 19,
  title: 'Easy Listening and Smooth Jazz',
  tags: ['event', 'flyer'],
  background: solidColor('#e54049'),
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
      eleemnts: [
        bridge,
        heading,
        paragraph,
      ]
    }
  }
}