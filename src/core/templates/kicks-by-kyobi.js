import { basicColor } from '../utils/color-utils';

export default {
  id: 13,
  title: 'Kicks by Kyobi',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-white-collage-fashion-show-flyer-MAC4DkO_3zY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.pexels.com/photos/9379/drinking-alley-fun-bowling-9379.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      meta: { w: 1000, h: 662 },
    },
  },
  pa: 1.5,
  content: {
    background: { 
  color: basicColor('#1a1a1a'),
},
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Calling All'},
            {type: 'descriptive', text: 'Sneakerheads!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.2,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 2,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Kicks By'},
            {type: 'eventName', text: 'Kyobi Sale is'},
            {type: 'eventName', text: 'Here!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.05,
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
            {type: 'descriptive', text: 'Enjoy up to 70% off on all'},
            {type: 'descriptive', text: 'shoe styles and trends!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.05,
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
            {type: 'time', text: 'Hurry! Sale runs from June 15 -'},
            {type: 'time', text: 'August 15, 2020.'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.11,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Ditch your old shoes and snag some fresh'},
            {type: 'details', text: 'new ones at affordable prices! Shop in-'},
            {type: 'details', text: 'store at 123 Anywhere St., Any City today!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}