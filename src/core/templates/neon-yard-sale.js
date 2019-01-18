import { solidColor, unitValue } from '.'

export default {
  title: 'Neon Yard Sale',
  px: 36,
  py: 72,
  background: {
    url: 'https://images.unsplash.com/photo-1546624538-0a85938a4f2e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    backgroundBlendMode: 'hard-light',
    color: '#000',
    filters: {
      brightness: .4,
    },
  },
  content: {
    width: unitValue(100, '%'),
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    bleed: { all: true },
    elements: [
      { 
        type: 'small', 
        color: solidColor('#00f8e6'),
        lines: [
          {type: 'date', text: '09.21.2019', format: 'MM.DD.YYYY'},
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 0.4,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .1, // uses ems
        },
        mb: 1.25,
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Yard'},
          {type: 'eventName', text: 'Sale'},
        ],
        color: solidColor('#00f8e6'),
        font: {
          family: 'Bebas Neue',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .1,
        },
      },
      { 
        type: 'bridge', 
        lines: [
          {type: 'time', text: '9:00am - 10:00pm'},
        ],
        color: solidColor('#00f8e6'),
        background: solidColor('transparent'),
        border: {
          width: 2,
          all: true,
          color: '#00f8e6',
        },
        mb: 1.25,
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          style: 'normal',
          lineHeight: 1.2,
          transform: 'uppercase',
          letterSpacing: .2, // uses ems
        },
      },
      { 
        type: 'small', 
        color: solidColor('#00f8e6'),
        lines: [
          {type: 'location', text: '3938 Snow Lane'},
          {type: 'state', text: 'Osseo, Michigan'},
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 0.4,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.4,
          letterSpacing: .1, // uses ems
        },
        mb: 1.25,
      },
    ],
  },
}