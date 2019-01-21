import { solidColor, unitValue } from './'

export default {
  title: 'Clean & Green',
  version: 1,
  px: 36,
  py: 36,
  background: solidColor('#1B5C50'),
  border: {
    top: 120, 
    bottom: 120,
    color: '#B9E6BF',
  },
  content: {
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    bleed: { all: true },
    elements: [
      { 
        type: 'small', 
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: '#jointheearthmovement'},
        ],
        font: {
          family: 'Muli',
          weight: 400,
          size: 0.6,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Clean'}, 
          {type: 'eventName', text: '&'}, 
          {type: 'eventName', text: 'Green'}
        ],
        color: solidColor('#F9CE00'),
        font: {
          family: 'Muli',
          weight: 900,
          size: 1,
          // fitToWidth: true,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      { 
        type: 'bridge', 
        lines: [
          {type: 'descriptiveText', text: 'Providing organic and environmentally'},
          {type: 'descriptiveText', text: 'friendly cleaning services since 2019'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 1,
          style: 'normal',
          lineHeight: 1.2,
        },
      },
    ],
  },
}