import { solidColor, unitValue } from '.'

export default {
  title: 'Back to School',
  px: 64,
  py: 36,
  background: solidColor('#030F5B'),
  content: {
    background: solidColor('#030F5B'),
    width: unitValue(100, '%'),
    flex: 1,
    elements: [
      {
        type: 'small',
        lines: ['Back to School'],
        color: solidColor('#D786D5'),
        font: {
          family: 'Muli',
          weight: 700,
          size: 20,
          fitToWidth: true,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      {
        type: 'dominant',
        lines: ['Holiday Bake Sale'],
        color: solidColor('#D786D5'),
        font: {
          family: 'Bebas Neue',
          weight: 700,
          size: 80,
          fitToWidth: true,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      {
        type: 'bridge',
        lines: ['Wednesday at 12pm'],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 700,
          size: 20,
          fitToWidth: true,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      {
        type: 'image',
        flex: 1,
        bleed: 'full',
        src: 'https://images.unsplash.com/photo-1513519683267-4ee6761728ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        filters: [],
      },
      // {
      //   type: 'footer',
      //   lines: ['Proceeds Benefit Spark High Spirit Squad'],
      //   width: unitValue(100, '%'),
      //   background: solidColor('#D786D5'),
      //   color: solidColor('#fff'),
      //   bleed: 'full',
      //   font: {
      //     family: 'Muli',
      //     weight: 700,
      //     size: 1,
      //     fitToWidth: true,
      //     style: 'normal',
      //     transform: 'uppercase',
      //     lineHeight: 1.2,
      //   },
      // }
    ]
  },
  footer: {
    background: solidColor('#D978C9'),
    width: unitValue(100, '%'),
    bleed: 'full',
    type: 'basic',
    elements: [{
      type: 'small',
      color: solidColor('#fff'),
      lines: ['Proceeds Benefit Spark High School Spirit Squad'],
      font: {
        family: 'Muli',
        weight: 700,
        size: 1,
        fitToWidth: true,
        style: 'normal',
        transform: 'uppercase',
        lineHeight: 1.2,
      },
    }]
    
    
  }
}