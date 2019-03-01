import { solidColor, unitValue } from '.'

export default {
  title: 'Happy Hour',
  px: 36,
  py: 36,
  background: solidColor('#ED5B48'),
  overlay: {
    img: {
      src: '/grunge-1.png',
    },
    backgroundBlendMode: 'lighten',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      width: unitValue(100, '%'),
      flex: 1,
      alignX: 'center',
      alignY: 'flex-start',
      bleed: { all: true },
      elements: [
        {
          type: 'small',
          lines: [
            [
              {type: 'dayOfWeek', text: 'Every Thursday'},
              {type: 'time', text: '6pm-Closing'},
            ]
          ],
          divider: {
            type: 'none',
            size: 0.3,
            color: solidColor('#fff'),
          },
          color: solidColor('#fff'),
          mb: 0.5,
          font: {
            family: 'Bebas Neue',
            weight: 400,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Happy'}, 
            {type: 'eventName', text: 'Hour'},
          ],
          color: solidColor('#FFDB00'),
          font: {
            family: 'Bebas Neue',
            weight: 400,
            size: 0.8,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.1,
          },
        },
        {
          type: 'image',
          flex: 1,
          bleed: { b: 1 },
          src: '/beer-pint.png',
          y: 0.0,
          filters: [],
        },
      ]
    },
    header: {
      bleed: { all: true },
      elements: [{
        type: 'icon',
        src: '/taverns.png',
        meta: {
          width: 152,
          height: 75,
          colors: [],
          filetype: 'png', // y = 0 if at bottom of page, y=1 if a top
        }
      }]  
    }
  }
}