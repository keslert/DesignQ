import { solidColor, unitValue } from '.'

export default {
  id: 27,
  title: 'Cupcakes for a Good Cause',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-cream-and-blue-cupcake-fundraiser-flyer-MAC5EBZuooM.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#fff4e9'),
  border: {
    x: .03,
    xOffset: .03,
    background: solidColor('#9ddcdc'),
  },
  content: {
    body: {
      elements: [
        {
          type: 'icon',
          src: '/shop.svg',
          fill: '#9ddcdc',
          size: 1,
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
        },
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Kyobi Confections'},
          ],
          color: solidColor('#9ddcdc'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.04,
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
            {type: 'eventName', text: 'Cupcakes for'},
            {type: 'eventName', text: 'a Good Cause'},
          ],
          color: solidColor('#e77880'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.02,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'A charity bake sale to'},
            {type: 'descriptive', text: 'help fight world hunger'},
          ],
          color: solidColor('#9ddcdc'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.02,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'heading',
          color: solidColor('#e77880'),
          lines: [
            [
              {type: 'date', text: 'May 15-17, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '9 AM to 6 PM'},
            ],
            {type: 'location', text: 'Shira Convention Center'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#e77880'),
          },
          font: {
            family: 'Kollektif',
            letterSpacing: 0.02,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#9ddcdc'),
          lines: [
            {type: 'descriptive', text: 'Have an enjoyable weekend that\'s sure'},
            {type: 'descriptive', text: "to make your tummy and heart feel good!"},
            {type: 'descriptive', text: "Don't miss the sweetest event in town!"},
          ],
          font: {
            family: 'Kollektif',
            letterSpacing: 0.02,
            lineHeight: 1.4,
            size: 1.3,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}