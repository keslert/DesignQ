import { solidColor, unitValue } from '.'

export default {
  title: 'Sunday Noon Football',
  tags: ['event', 'flyer', 'football'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-yellow-icon-sports-flyer-MAC5t7rcTo0.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 48,
  background: solidColor('#fed23c'),
  content: {
    bleed: { all: true },
    alignX: 'left',
    alignY: 'flex-end',
    width: unitValue(100, '%'),
    textAlign: 'left',
    mb: 1,
    elements: [
      {
        type: 'logo',
        url: '/football.svg',
        fill: '#000',
        size: 0.8,
        meta: {
          width: 30,
          height: 30,
          colors: [],
          filetype: 'svg',
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Watch Live:'},
          {type: 'eventName', text: 'Sunday'},
          {type: 'eventName', text: 'Noon'},
          {type: 'eventName', text: 'Football'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Raleway',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 900,
        },
        mb: 0.75,
      },
      {
        type: 'bar',
        background: solidColor('#000'),
        width: unitValue(100, '%'),
        height: unitValue(12, 'px'),
        mb: 1.5,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Experience football like you never have before!'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Raleway',
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
          {type: 'date-time', text: 'February 26, 2020 from 12NN'},
          {type: 'location', text: 'at Cormoran Sports Pub'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Raleway',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          weight: 900,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'Enjoy the game live on our 110" HDTV.'},
          {type: 'descriptiveText', text: 'Entrance is free, but reservations are required.'},
          {type: 'contact', text: 'Call ahead: (123) 456-7890'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Raleway',
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
    bleed: { all: true },
    width: unitValue(100, '%'),
    textAlign: 'left',
    elements: [
      {
        type: 'small',
        color: solidColor('#000'),
        lines: [
          {type: 'host', text: 'Cormoran Sports Pub'},
        ],
        font: {
          family: 'Raleway',
          letterSpacing: 0.2,
          lineHeight: 1.4,
          size: 0,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
    ]
  }
}