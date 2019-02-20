import { solidColor, unitValue, striped } from '.'

export default {
  title: 'The Health is Wealth Fair',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-illustrated-heart-health-fair-flyer-MAC7m1QGUWA.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  tags: ['event'],
  px: 48,
  py: 48,
  background: solidColor('#58c4ce'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      alignY: 'flex-end',
      alignX: 'center',
      textAlign: 'left',
      bleed: { all: true },
      elements: [
        { 
          type: 'small', 
          color: solidColor('#fff'),
          lines: [
            {type: 'host', text: 'Dr. Nathanial Morrison Presents'},
          ],
          font: {
            family: 'Nunito',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'normal',
            lineHeight: 1.2,
            letterSpacing: 0,
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
            family: 'Fredoka One',
            weight: 400,
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
            family: 'Nunito',
            weight: 400,
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
}