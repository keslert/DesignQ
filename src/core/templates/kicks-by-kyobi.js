import { solidColor } from './'

export default {
  title: 'Kicks by Kyobi',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-white-collage-fashion-show-flyer-MAC4DkO_3zY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.pexels.com/photos/9379/drinking-alley-fun-bowling-9379.jpg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
  },
  content: {
    background: solidColor('#1a1a1a'),
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Calling All'},
            {type: 'descriptive', text: 'Sneakerheads!'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.2,
            lineHeight: 1.6,
            size: 0.8,
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
          color: solidColor('#ffffff'),
          font: {
            family: 'Oswald',
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
            {type: 'descriptiveText', text: 'Enjoy up to 70% off on all'},
            {type: 'descriptiveText', text: 'shoe styles and trends!'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
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
          color: solidColor('#ffffff'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.1,
            lineHeight: 1.6,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: 'Ditch your old shoes and snag some fresh'},
            {type: 'descriptiveText', text: 'new ones at affordable prices! Shop in-'},
            {type: 'descriptiveText', text: 'store at 123 Anywhere St., Any City today!'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}