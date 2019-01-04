import { solidColor, unitValue } from '.'

export default {
  title: 'Urbana',
  px: 48,
  py: 72,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1541702467897-41915a07d3a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
    filters: {
      grayscale: 1,
    }
    // color: '#00C9CC',
    // zoom: 1.4,
    // y: .0,
  },
  content: {
    w: .6,
    background: solidColor('#202020'),
    // width: unitValue(100, '%'),
    alignX: 'center',
    elements: [
      {
        type: 'dominant',
        lines: ['Urbana'],
        color: solidColor('#f5d300'),
        font: {
          family: 'Roboto Condensed',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.1,
        },
        mb: 1.5,
      },
      {
        type: 'bridge',
        lines: ['A Street', 'Photography', 'Workshop'],
        color: solidColor('#fff'),
        font: {
          family: 'Roboto Condensed',
          weight: 700,
          size: 1.5,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.6,
          letterSpacing: .1,
        },
        mb: 2,
      },
      {
        type: 'bar',
        background: {
          color: '#f5d300',
        },
        width: unitValue(33, '%'),
        height: unitValue(16, 'px'),
        mb: 2,
      },
      {
        type: 'small',
        lines: ['Friday', 'June 5, 2019'],
        color: solidColor('#fff'),
        font: {
          family: 'Roboto Condensed',
          weight: 400,
          size: 1.2,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
      },
    ]
  },
}