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
        bleed: 'full',
        url: '/beer-pint.png',
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
        colors: [],
        filetype: 'png', // y = 0 if at bottom of page, y=1 if a top
      }
    }]  
  }
}