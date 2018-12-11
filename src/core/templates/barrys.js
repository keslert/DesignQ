import { solidColor, unitValue } from './'

export default {
  title: 'Barry\'s',
  px: 36,
  py: 18,
  footer: null,
  header: null,
  background: solidColor('#fff'),
  content: {
    width: unitValue(100, '%'),
    flex: 1,
    alignX: 'left',
    alignY: 'center',
    background: solidColor('#000'),
    elements: [
      { 
        type: 'image',
        flex: 1,
        bleed: true,
        src: 'https://images.unsplash.com/photo-1454587399083-b11b22f48fb6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1900&q=80',
        filters: [],
      },
      {
        type: 'dominant',
        lines: ['Barry\'s'],
        background: solidColor('#FFD2A7'),
        color: solidColor('#000'),
        font: {
          transform: 'uppercase',
          size: 1,
          family: 'Josefin Slab',
          weight: 400,
          style: 'normal',
          lineHeight: 1,
        },
        overlap: .5,
        marginBottom: 1,
      },
      {
        type: 'bridge',
        lines: ['stationary for the working professional'],
        color: solidColor('#fff'),
        font: {
          size: 1,
          family: 'Josefin Slab',
          weight: 400,
          style: 'normal',
          lineHeight: 1,
        },
        marginBottom: 1,
      },
      {
        type: 'bar',
        width: unitValue(120, 'px'),
        height: unitValue(4, 'px'),
        background: solidColor('#FFD2A7'),
        marginBottom: 1,
      },
      {
        type: 'small',
        lines: ['Since 1989'],
        color: solidColor('#FFD2A7'),
        font: {
          transform: 'uppercase',
          size: 1,
          family: 'Muli',
          weight: 400,
          style: 'normal',
          lineHeight: 1,
        },
      },
    ]
  }
}