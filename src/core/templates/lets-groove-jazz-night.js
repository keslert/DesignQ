import { basicColor } from '../utils/color-utils';

export default {
  id: 10,
  title: "Let's Groove Jazz Night",
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-yellow-and-black-jazz-night-saxophone-illustration-concert-flyer-MAC4_opPoG0.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#000000'),
},
  border: {
    r: .05,
    background: { 
  color: basicColor('#f3d030'),
},
  },
  decor: {
    r: .2,
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignY: 'top',
      itemsAlignX: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Audios Co. Presents'},
          ],
          color: basicColor('#f4d55e'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.16,
            lineHeight: 1.4,
            size: 1,
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
          color: basicColor('#ffffff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.02,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: { 
  color: basicColor('#f4d55e'),
},
          h: 8,
          w: .2,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Enjoy a night of soothing music'},
            {type: 'descriptive', text: 'from the best artists.'},
          ],
          color: basicColor('#ffffffcc'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.09,
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
          color: basicColor('#f4d55e'),
          lines: [
            {type: 'date', text: 'March 19, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '6:30pm'},
            {type: 'location', text: '123 Anywhere St.,'},
            {type: 'city-state', text: 'Any City'},
          ],
          font: {
            family: 'Raleway',
            letterSpacing: 0.04,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          color: basicColor('#ffffffcc'),
          lines: [
            {type: 'details', text: 'Join us for jaxx night and enjoy'},
            {type: 'details', text: 'great music from the best'},
            {type: 'details', text: 'artists in town. Purchase your'},
            {type: 'details', text: 'tickets online:'},
            {type: 'details', text: 'reallygreatsite.com'},
          ],
          font: {
            family: 'Raleway',
            letterSpacing: 0.09,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    }
  }
}