import { solidColor, unitValue } from './'

export default {
  title: 'Clean & Green',
  px: 36,
  py: 36,
  background: solidColor('#1B5C50'),
  border: {
    width: 120,
    sides: {top: true, bottom: true},
    color: '#B9E6BF',
  },
  content: {
    // w: .70,
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    elements: [
      { 
        type: 'small', 
        color: solidColor('#fff'),
        lines: ['#jointheearthmovement'],
        font: {
          family: 'Muli',
          weight: 400,
          size: 20,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      { 
        type: 'dominant', 
        lines: ['Clean', '&', 'Green'],
        color: solidColor('#F9CE00'),
        font: {
          family: 'Muli',
          weight: 900,
          size: 40,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      { 
        type: 'bridge', 
        lines: [
          'Providing organic and environmentally friendly',
          'cleaning services since 2019',
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 20,
          style: 'normal',
          lineHeight: 1.2,
        },
      },
    ],
  },
}