import { solidColor, unitValue } from '.'

export default {
  title: 'El Dorado Bake Sale',
  tags: ['event', 'flyer'],
  px: 48,
  py: 48,
  background: solidColor('#fff4e9'),
  content: {
    bleed: { all: true },
    background: solidColor('#fff4e9'),
    alignX: 'center',
    alignY: 'flex-start',
    width: unitValue(100, '%'),
    textAlign: 'center',
    flex: 1,
    elements: [
      { 
        type: 'image',
        flex: 1,
        bleed: {all: true},
        url: '/el-dorado.png',
        background: '#c3996f'
      },
      {
        type: 'logo',
        url: '/shop.svg',
        fill: '#fff4e9',
        color: '#c3996f',
        overlap: 0.5,
        size: 0.8,
        aspectRatio: 1,
        borderRadius: unitValue(50, '%'),
        px: 2,
        py: 2,
        meta: {
          width: 50,
          height: 50,
          colors: [],
          filetype: 'svg', // y = 0 if at bottom of page, y=1 if a top
        },
        mb: 1,
      },
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'Bread for a Cause'},
        ],
        color: solidColor('#c3996f'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
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
          {type: 'eventName', text: 'El Dorado Bake Sale'},
          {type: 'eventName', text: 'Bazaar'},
        ],
        color: solidColor('#c3996f'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Baked goodies from more than 10 concessionaires'},
        ],
        color: solidColor('#c3996f'),
        font: {
          family: 'Muli',
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
        color: solidColor('#c3996f'),
        lines: [
          {type: 'descriptiveText', text: 'See you there on July 8 at El Dorado Field', meta: ['date', 'location']},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        color: solidColor('#c3996f'),
        lines: [
          {type: 'descriptiveText', text: 'All proceeds obtained from the Bazaar will be donated to El'},
          {type: 'descriptiveText', text: 'Dorado Public Academy for their upcoming scholarship program.'},
        ],
        font: {
          family: 'Muli',
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
}