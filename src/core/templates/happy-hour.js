import { solidColor, unitValue } from '.'

export default {
  title: 'Happy Hour',
  px: 36,
  py: 36,
  background: solidColor('#ED5B48'),
  overlay: {
    type: 'image',
    url: '/grunge-1.png',
    backgroundBlendMode: 'lighten',
  },
  content: {
    width: unitValue(100, '%'),
    alignX: 'center',
    flex: 1,
    elements: [
      {
        type: 'small',
        lines: ['Every Thursday 6pm-Closing'],
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
        lines: ['Happy', 'Hour'],
        color: solidColor('#FFDB00'),
        font: {
          family: 'Bebas Neue',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.1,
        },
      },
      {
        type: 'image',
        flex: 1,
        bleed: 'full',
        url: '/beer-pint.png',
        // zoom: 1,
        y: 0.0,
        filters: [],
      },
    ]
  },
  header: {
    type: 'basic',
    elements: [{
      type: 'logo',
      url: '/taverns.png',
      meta: {
        width: 152,
        height: 75,
      }
    }]  
  }
}