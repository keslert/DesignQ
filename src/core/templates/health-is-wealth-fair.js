import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Health is Wealth Fair 2020',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-illustrated-heart-health-fair-flyer-MAC7m1QGUWA.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  tags: ['event'],
  px: 40,
  py: 40,
  background: solidColor('#58c4ce'),
  content: {
    alignY: 'flex-end',
    alignX: 'center',
    textAlign: 'left',
    bleed: { all: true },
    width: unitValue(100, '%'),
    mb: 1.25,
    elements: [
      { 
        type: 'small', 
        color: solidColor('#fff'),
        lines: [
          {type: 'host', text: 'The Winslough Hospital'},
        ],
        font: {
          family: 'Nunito',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.4,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Health is'},
          {type: 'eventName', text: 'Wealth Fair 2020'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Fredoka One',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.4,
          letterSpacing: .05,
        },
        mb: 1,
      },
      { 
        type: 'bridge', 
        color: solidColor('#fff'),
        lines: [
          [
            {type: 'descriptive', text: 'Join us for the annual community health fair!'},
          ]
        ],
        font: {
          family: 'Nunito',
          letterSpacing: .1,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      { 
        type: 'heading', 
        color: solidColor('#fff'),
        background: solidColor('#ff8b7b'),
        borderRadius: unitValue(8, 'px'),
        width: unitValue(100, '%'),
        pl: 2,
        py: 1.5,
        lines: [
          [
            {type: 'date', text: 'October 16, 2020', format: 'MMM D, YYYY'},
            {type: 'time', text: '9 A.M. - 5 P.M.'},
          ],
          {type: 'location', text: '123 Anywhere St.'},
        ],
        divider: {
          type: 'line',
          size: 1,
          color: solidColor('#fff'),
        },
        font: {
          family: 'Fredoka One',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
          letterSpacing: 0.05,
        },
        mb: 1,
      },
      { 
        type: 'paragraph', 
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'Make your health always your priority.'},
          {type: 'descriptiveText', text: 'Participate in this year\'s exciting activities'},
          {type: 'descriptiveText', text: 'and take steps towards a better lifestyle!'},
        ],
        font: {
          family: 'Nunito',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.4,
          letterSpacing: 0,
        },
        mb: 1,
      },
    ],
  },
}