import { solidColor, unitValue } from './'

export default {
  title: 'Art Talk',
  px: 36,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.pexels.com/photos/1030973/pexels-photo-1030973.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    size: 2.20,
    x: .04,
    y: .69,
    filters: {
      sepia: 0.4,
      // brightness: 1.5,
      // contrast: 1.2,
    },
  },
  content: {
    w: .7,
    // h: null,
    // alignX: 'left',
    alignY: 'center',
    textAlign: 'left',
    elements: [
      { 
        type: 'small', 
        color: solidColor('#fff'),
        background: solidColor('#8F5B68'),
        bleed: 'left',
        lines: ['Superfood Corner'],
        font: {
          family: 'Muli',
          weight: 400,
          size: 20,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      { 
        type: 'dominant', 
        lines: ['Resurgance', 'of Coconut'],
        color: solidColor('#8F5B68'),
        font: {
          family: 'Bebas Neue',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        marginBottom: 1,
      },
      {
        type: 'bar',
        background: solidColor('#8F5B68'),
        width: unitValue(70, '%'),
        height: unitValue(8, 'px'),
        marginBottom: 1,
      },
      { 
        type: 'bridge', 
        lines: [
          'The coconut provides a nutritious source',
          'of meat, juice, milk, and oil that has fed',
          'and nourished populations around the',
          'world for generations. On many islands',
          'coconut is a staple in the diet and provides',
          'the majority of the food eaten.'
        ],
        color: solidColor('#8F5B68'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 20,
          style: 'normal',
          lineHeight: 1.2,
        },
        marginBottom: 1,
      },
    ],
  },
  footer: null,
  header: null,
}