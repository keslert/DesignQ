import { solidColor, unitValue } from './'

export default {
  title: 'Coconut Resurgance',
  px: 36,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.pexels.com/photos/1030973/pexels-photo-1030973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    zoom: 2.20,
    x: .01,
    y: .69,
    filters: {
      sepia: 0.4,
    },
  },
  content: {
    w: .7,
    alignY: 'center',
    textAlign: 'left',
    bleed: { all: true },
    elements: [
      { 
        type: 'small', 
        color: solidColor('#fff'),
        background: solidColor('#8F5B68'),
        bleed: { left: true },
        lines: [
          {type: 'descriptiveText', text: 'Superfood Corner'}
        ],
        font: {
          family: 'Muli',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .05,
        },
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Resurgance'}, 
          {type: 'eventName', text: 'of Coconut'},
        ],
        color: solidColor('#6b474f'),
        font: {
          family: 'Bebas Neue',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      {
        type: 'bar',
        background: solidColor('#8F5B68'),
        width: unitValue(70, '%'),
        height: unitValue(8, 'px'),
      },
      { 
        type: 'bridge', 
        lines: [
          {type: 'descriptiveText', text: 'The coconut provides a nutritious source'},
          {type: 'descriptiveText', text: 'of meat, juice, milk, and oil that has fed'},
          {type: 'descriptiveText', text: 'and nourished populations around the'},
          {type: 'descriptiveText', text: 'world for generations. On many islands'},
          {type: 'descriptiveText', text: 'coconut is a staple in the diet and provides'},
          {type: 'descriptiveText', text: 'the majority of the food eaten.'},
        ],
        color: solidColor('#6b474f'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 1,
          style: 'normal',
          lineHeight: 1.2,
        },
      },
    ],
  },
  footer: {
    overlay: true,
    width: unitValue(100, '%'),
    textAlign: 'left',
    bleed: { all: true },
    elements: [{
      type: 'small',
      lines: [
        {type: 'website', text: 'coconutfacts.net'},
      ],
      color: solidColor('#8F5B68'),
      font: {
        family: 'Muli',
        weight: 400,
        size: 1,
        style: 'normal',
        lineHeight: 1.2,
      },
    }]
  },
  header: null,
}