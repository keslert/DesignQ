import { linear, solidColor, unitValue } from '.'

export default {
  title: 'Dessert Dash',
  px: 72,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1505394033641-40c6ad1178d7?ixlib=rb-1.2.1&auto=format&fit=crop&w=1106&q=80',
  },
  content: {
    w: .6,
    background: solidColor('rgba(0,0,0,.9'),
    alignX: 'center',
    alignY: 'center',
    bleed: { all: true },
    elements: [
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Dessert'},
          {type: 'eventName', text: 'Dash'},
        ],
        color: solidColor('#E5E5E5'),
        font: {
          family: 'Josefin Slab',
          weight: 700,
          size: 1,
          style: 'normal',
          lineHeight: 1.2,
        },
        mb: 1,
      },
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'Fundraiser'},
        ],
        color: solidColor('#E5E5E5'),
        font: {
          family: 'Roboto Condensed',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.6,
          letterSpacing: .1,
        },
        mb: 1,
      },
      {
        type: 'bar',
        background: solidColor('#fff'),
        width: unitValue(5, '%'),
        height: unitValue(4, 'px'),
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'date', text: '08 June 2019', format: 'DD MMMM YYYY'}, 
          {type: 'time', text: '2PM-Closing'},
        ],
        color: solidColor('#E5E5E5'),
        font: {
          family: 'Josefin Slab',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
      },
    ]
  },
  footer: {
    background: solidColor('#000'),
    width: unitValue(100, '%'),
    bleed: { all: true },
    py: .75,
    elements: [{
      type: 'small',
      color: solidColor('#fff'),
      lines: [
        {type: 'website', text: 'treatstempations.co'}
      ],
      font: {
        family: 'Roboto Condensed',
        weight: 700,
        size: 1,
        style: 'normal',
        transform: 'uppercase',
        lineHeight: 1.2,
        letterSpacing: 0.8,
      },
    }]
  }
}