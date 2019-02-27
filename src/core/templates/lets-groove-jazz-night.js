import { solidColor } from '.'

export default {
  title: "Let's Groove Jazz Night",
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-yellow-and-black-jazz-night-saxophone-illustration-concert-flyer-MAC4_opPoG0.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#000000'),
  border: {
    r: .05,
    background: solidColor('#f3d030'),
  },
  decor: {
    r: .2,
  },
  content: {
    body: {
      alignY: 'top',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Audios Co. Presents'},
          ],
          color: solidColor('#f4d55e'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.2,
            lineHeight: 1.4,
            size: 0.1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: "Let's Groove:"},
            {type: 'eventName', text: 'Jazz Night'},
            {type: 'eventName', text: '2020'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.05,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: solidColor('#f4d55e'),
          height: 8,
          width: .2,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Enjoy a night of soothing music'},
            {type: 'descriptive', text: 'from the best artists.'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1.4,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          color: solidColor('#f4d55e'),
          lines: [
            {type: 'date', text: 'March 19, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '6:30pm'},
            {type: 'location', text: '123 Anywhere St.,'},
            {type: 'city-state', text: 'Any City'},
          ],
          font: {
            family: 'Raleway',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: .3,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#ffffffcc'),
          lines: [
            {type: 'descriptive', text: 'Join us for jaxx night and enjoy'},
            {type: 'descriptive', text: 'great music from the best'},
            {type: 'descriptive', text: 'artists in town. Purchase your'},
            {type: 'descriptive', text: 'tickets online:'},
            {type: 'descriptive', text: 'reallygreatsite.com'},
          ],
          font: {
            family: 'Raleway',
            letterSpacing: 0.1,
            lineHeight: 1.6,
            size: .1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    }
  }
}