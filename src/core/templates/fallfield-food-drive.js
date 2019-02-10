import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Fallfield Food Drive',
  tags: ['event', 'flyer', 'food drive'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-orange-border-diagonal-line-food-drive-flyer-MAC3TTBdtfM.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 36,
  border: {
    top: 100,
    bottom: 100,
    left: 50,
    right: 50,
    color: striped(45, "#ef8332", 22, "#f19a57", 20),
  },
  content: {
    bleed: { all: true },
    background: solidColor('#fff'),
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    width: unitValue(100, '%'),
    flex: 1,
    mb: 1.5,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Fallfield Foundation'},
        ],
        color: solidColor('#f38229'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1.5,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: '14th Annual'},
          {type: 'eventName', text: 'Fairfield Food'},
          {type: 'eventName', text: 'Drive'},
        ],
        color: solidColor('#07284f'),
        font: {
          family: 'League Gothic',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 0.5,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'For the homeless members of the'},
          {type: 'descriptiveText', text: 'Fallfield community.'},
        ],
        color: solidColor('#f38229'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'heading',
        lines: [
          [
            {type: 'date', text: 'October 29, 2020'},
            {type: 'time', text: '1pm to 7pm'},
          ],
          {type: 'time', text: 'Everybody\'s Welcome!'},
        ],
        divider: {
          type: 'line',
          size: 1,
          color: solidColor('#07284f')
        },
        color: solidColor('#07284f'),
        font: {
          family: 'League Gothic',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1.2,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'location', text: 'See you at 189 49th Avenue, Grise Fiord, NU.'},
          {type: 'descriptiveText', text: 'Together we can make a difference in the'},
          {type: 'descriptiveText', text: 'lives of others! Let\'s spread the love!'},
        ],
        color: solidColor('#f38229'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
}