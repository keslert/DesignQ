import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Fallfield Food Drive',
  tags: ['event', 'flyer', 'food drive'],
  px: 36,
  py: 36,
  border: {
    top: 100,
    bottom: 100,
    left: 50,
    right: 50,
    color: striped(45, "#ef8332", 20, "#f19a57", 20),
  },
  content: {
    bleed: { all: true },
    background: solidColor('#fff'),
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    width: unitValue(100, '%'),
    flex: 1,
    mb: 2,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Fallfield Foundation'},
        ],
        color: solidColor('#ef8332'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
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
          family: 'Bebas Neue',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'For the homeless members of the'},
          {type: 'descriptiveText', text: 'Fallfield community.'},
        ],
        color: solidColor('#ef8332'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'small',
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
          family: 'Bebas Neue',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
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
        color: solidColor('#ef8332'),
        font: {
          family: 'Muli',
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