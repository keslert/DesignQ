import { solidColor, unitValue } from '.'

export default {
  title: 'Job Fair 2019',
  px: 36,
  py: 36,
  background: solidColor('#fff'),
  border: {
    color: '#ddd1e2',
    top: 80, 
    bottom: 80,
  },
  content: {
    alignY: 'center',
    alignX: 'center',
    bleed: { all: true },
    elements: [
      { 
        type: 'small', 
        lines: [
          {type: 'descriptiveText', text: 'Middleton College'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Roboto Condensed',
          weight: 400,
          size: 1.3,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
          letterSpacing: .3,
        },
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Job'}, 
          {type: 'eventName', text: 'Fair'},
          {type: 'eventName', text: '2019'},
        ],
        color: solidColor('#51aad6'),
        font: {
          family: 'Roboto Condensed',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        mb: 2,
      },
      { 
        type: 'small', 
        lines: [
          {type: 'date', text: 'August 10-13', format: 'MMMM D'},
          {type: 'time', text: '9am - 4pm'},
          {type: 'location', text: 'Jackson Function Hall'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Roboto Condensed',
          weight: 400,
          size: 1.3,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
          letterSpacing: .3,
        },
      },
    ],
  },
}