import { solidColor, unitValue } from '.'

export default {
  title: 'Football Varsity Tryouts',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  border: {
    color: '#fff',
    left: 50,
  },
  background: {
    url: '/football-player.png',
    zoom: 1.2,
    x: -2.40,
    y: .2,
    backgroundBlendMode: 'multiply',
    color: '#FF5200',
  },
  content: {
    bleed: { all: true },
    alignX: 'flex-start',
    alignY: 'flex-end',
    textAlign: 'left',
    w: .7,
    elements: [
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Football'},
          {type: 'eventName', text: 'Varsity'},
          {type: 'eventName', text: 'Tryouts 2020'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0.05,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Represent the school by'},
          {type: 'descriptiveText', text: 'doing what you love the most!'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Josefin Slab',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'heading',
        lines: [
          {type: 'date', text: 'March 25, 2020', format: 'MMMM D, YYYY'},
          {type: 'time', text: '4:00 PM - 6:00 PM'},
          {type: 'location', text: 'Football Field'},
        ],
        background: solidColor('#000'),
        color: solidColor('#fff'),
        font: {
          family: 'Josefin Slab',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.8,
          style: 'normal',
          transform: 'normal',
          weight: 700,
        },
        bleed: {left: true},
        width: unitValue(100, '%'),
        mb: 1,
        py: 2,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'The Broadus Football Varsity is looking for strong,'},
          {type: 'descriptiveText', text: 'hardworking, and talented football players'},
          {type: 'descriptiveText', text: 'to join the team.'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Josefin Slab',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  header: {
    bleed: {all: true},
    width: unitValue(100, '%'),
    textAlign: 'left',
    elements: [
      {
        type: 'small',
        color: solidColor('#fff'),
        lines: [
          {type: 'host', text: 'Broadus High School'},
        ],
        font: {
          family: 'Josefin Slab',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.3,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
    ]
  }
}