import { solidColor, unitValue } from '.'

export default {
  title: 'Halloween Lantern Fest',
  tags: ['event', 'halloween'],
  px: 36,
  py: 36,
  background: solidColor('#4d3a6e'),
  border: {
    width: 150,
    sides: {top: true, bottom: true},
    seed: 2,
    color: '#4d3a6e',
    layout: 'confetti',
    items: [
      {type: 'party-hat', color: '#fff', size: 32},
      {type: 'party-hat', color: '#faa329', size: 32},
    ],
  },
  content: {
    alignY: 'center',
    elements: [
      { 
        type: 'small', 
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'Everyone is invited!'},
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .1,
        },
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Halloween'}, 
          {type: 'eventName', text: 'Lantern Fest'},
        ],
        color: solidColor('#faa329'),
        font: {
          family: 'Londrina Sketch',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .05,
        },
      },
      { 
        type: 'small', 
        color: solidColor('#fff'),
        lines: [
          {type: 'date-time', text: 'October 31 @ 7pm'},
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .1,
        },
        mb: 1,
      },
    ],
  },
}