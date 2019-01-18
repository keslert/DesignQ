import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Turn Fat Into Fit',
  tags: ['event', 'brand'],
  px: 36,
  py: 36,
  background: {
    type: 'image', 
    url: 'https://images.unsplash.com/photo-1530822847156-5df684ec5ee1?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    filters: {
      grayscale: .9,
      brightness: 0.7,
    }
  },
  border: {
    width: 8,
    left: true, 
    right: true,
    color: striped(0, '#fb7c00', 10, '#303030', 10),
  },
  content: {
    alignY: 'center',
    alignX: 'center',
    textAlign: 'center',
    bleed: { all: true },
    elements: [
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Turn'}, 
          {type: 'eventName', text: 'Fat'},
          {type: 'eventName', text: 'Into'},
          {type: 'eventName', text: 'Fit!'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          weight: 700,
          size: 0.5,
          style: 'italic',
          transform: 'uppercase',
          lineHeight: 1.1,
          letterSpacing: .05,
        },
        mb: 1,
      },
      { 
        type: 'small', 
        color: solidColor('#fff'),
        background: solidColor('#fb7c00'),
        lines: [
          {type: 'host', text: 'Bellar\'s Fitness Gym'},
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 1.2,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .1,
        },
        px: 2.4,
        py: 1.2,
        mb: 1,
      },
    ],
  },
}