import { solidColor, striped } from '.'

export default {
  id: 22,
  title: 'Fallfield Food Drive',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-orange-border-diagonal-line-food-drive-flyer-MAC3TTBdtfM.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    color: striped(45, "#ef8332", 22, "#f19a57", 20),
  },
  content: {
    h: 'auto',
    background: solidColor('#fff'),
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Fallfield Foundation'},
          ],
          color: solidColor('#f38229'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.13,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
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
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'For the homeless members of the'},
            {type: 'descriptive', text: 'Fallfield community.'},
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
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'location', text: 'See you at 189 49th Avenue, Grise Fiord, NU.'},
            {type: 'descriptive', text: 'Together we can make a difference in the'},
            {type: 'descriptive', text: 'lives of others! Let\'s spread the love!'},
          ],
          color: solidColor('#f38229'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
      ]
    },
  }
}