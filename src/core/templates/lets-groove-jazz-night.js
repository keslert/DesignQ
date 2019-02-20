import { solidColor, unitValue } from '.'

export default {
  title: "Let's Groove Jazz Night",
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-yellow-and-black-jazz-night-saxophone-illustration-concert-flyer-MAC4_opPoG0.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 48,
  border: {
    right: 40,
    color: '#f3d030',
  },
  background: {
    color: '#000',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'flex-start',
      alignY: 'flex-start',
      textAlign: 'left',
      pr: 3,
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
          mb: 2,
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
          mb: 1,
        },
        {
          type: 'bar',
          background: solidColor('#f4d55e'),
          height: unitValue(8, 'px'),
          width: unitValue(40, '%'),
          mb: 1.5,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptiveText', text: 'Enjoy a night of soothing music'},
            {type: 'descriptiveText', text: 'from the best artists.'},
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
          mb: 1,
        },
      ]
    },
    footer: {
      bleed: { all: true },
      width: unitValue(100, '%'),
      textAlign: 'left',
      mb: 2.5,
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
            {type: 'descriptiveText', text: 'Join us for jaxx night and enjoy'},
            {type: 'descriptiveText', text: 'great music from the best'},
            {type: 'descriptiveText', text: 'artists in town. Purchase your'},
            {type: 'descriptiveText', text: 'tickets online:'},
            {type: 'descriptiveText', text: 'reallygreatsite.com'},
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
          mb: 1,
        },
      ]
    }
  }
}