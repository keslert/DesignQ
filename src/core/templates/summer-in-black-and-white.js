import { solidColor, unitValue } from '.'

export default {
  title: 'Summer in Black and White',
  tags: ['event', 'yard-sale'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-monochrome-model-photo-fashion-show-flyer-MAC5vQWghwE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 48,
  py: 40,
  background: {
    url: 'https://images.unsplash.com/photo-1534534665817-8493579d3fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    filters: {
      grayscale: 1,
      brightness: 0.6,
    },
    zoom: 2,
    y: .35,
  },
  content: {
    alignX: 'left',
    alignY: 'flex-start',
    textAlign: 'left',
    width: unitValue(100, '%'),
    bleed: {all: true},
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Baks Clothing Company'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Glacial Indifference',
          lineHeight: 1.4,
          letterSpacing: .2,
          size: 0.6,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1.5,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Summer'},
          {type: 'eventName', text: 'In Black'},
          {type: 'eventName', text: 'And White'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Playfair Display',
          letterSpacing: 0,
          lineHeight: 1.6,
          size: 0.7,
          style: 'normal',
          transform: 'normal',
          weight: 900,
        },
        mb: 1.5,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Modified classic silhouettes. Timeless color stories.'},
        ],
        color: solidColor('#fff'),
        font: {
          size: 1,
          family: 'Glacial Indifference',
          weight: 400,
          style: 'normal',
          lineHeight: 1.4,
        },
      },
    ]
  },
  footer: {
    background: solidColor('#000'),
    width: unitValue(100, '%'),
    bleed: {all: true},
    textAlign: 'left',
    elements: [
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'Fashion show'},
          {type: 'date', text: 'June 20, 2020', format: 'MMMM D, YYYY'},
          {type: 'location', text: 'Beechtown Auditorium'},
        ],
        font: {
          family: 'Playfair Display',
          weight: 700,
          size: 0.7,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.4,
        },
        mb: 1.5,
      },
      {
        type: 'paragraph',
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'A collection inspired by vintage music festival'},
          {type: 'descriptiveText', text: 'photos, Summer in Black and White will feel'},
          {type: 'descriptiveText', text: 'nostalgic and modern at the same time.'},
        ],
        font: {
          family: 'Glacial Indifference',
          weight: 400,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.6,
        },
      }
    ]
  }
}