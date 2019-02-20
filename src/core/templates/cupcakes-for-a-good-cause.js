import { solidColor, unitValue } from '.'

export default {
  title: 'Cupcakes for a Good Cause',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-cream-and-blue-cupcake-fundraiser-flyer-MAC5EBZuooM.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 50,
  py: 50,
  border: {
    left: 40,
    right: 40,
    color: '#9ddcdc',
  },
  background: solidColor('#fff4e9'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'center',
      width: unitValue(100, '%'),
      textAlign: 'center',
      flex: 1,
      elements: [
        {
          type: 'logo',
          url: '/shop.svg',
          fill: '#9ddcdc',
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
          mb: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Kyobi Confections'},
          ],
          color: solidColor('#9ddcdc'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
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
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptiveText', text: 'A charity bake sale to'},
            {type: 'descriptiveText', text: 'help fight world hunger'},
          ],
          color: solidColor('#9ddcdc'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
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
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          color: solidColor('#9ddcdc'),
          lines: [
            {type: 'descriptiveText', text: 'Have an enjoyable weekend that\'s sure'},
            {type: 'descriptiveText', text: "to make your tummy and heart feel good!"},
            {type: 'descriptiveText', text: "Don't miss the sweetest event in town!"},
          ],
          font: {
            family: 'Kollektif',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.3,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
  }
}