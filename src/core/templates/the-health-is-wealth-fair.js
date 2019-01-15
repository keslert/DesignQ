import { solidColor, unitValue, striped } from '.'

export default {
  title: 'The Health is Wealth Fair',
  tags: ['event'],
  px: 48,
  py: 48,
  background: solidColor('#58c4ce'),
  content: {
    alignY: 'flex-end',
    alignX: 'center',
    textAlign: 'left',
    elements: [
      { 
        type: 'small', 
        color: solidColor('#fff'),
        lines: [
          {type: 'host', text: 'Dr. Nathanial Morrison Presents'},
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.2,
          letterSpacing: .1,
        },
        mb: 1,
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'The'}, 
          {type: 'eventName', text: 'Health is'},
          {type: 'eventName', text: 'Wealth Fair'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Roboto Condensed',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.2,
          letterSpacing: .05,
        },
        mb: 1,
      },
      { 
        type: 'small', 
        color: solidColor('#fff'),
        background: solidColor('#ff8b7b'),
        borderRadius: unitValue(8, 'px'),
        lines: [
          [
            {type: 'date', text: 'July 14', format: 'MMMM D'},
            {type: 'location', text: 'Beachtown Park'},
            {type: 'date', text: '10am-5pm'},
          ]
        ],
        divider: {
          size: 2,
          type: 'dot',
          color: solidColor('#fff'),
        },
        font: {
          family: 'Muli',
          weight: 700,
          size: 1.2,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.2,
          letterSpacing: .1,
        },
        px: 2,
        mb: 1,
      },
    ],
  },
}