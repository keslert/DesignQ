import { solidColor, unitValue } from './'

export default {
  title: 'Yard Sale',
  px: 36,
  py: 36,
  background: solidColor('#fed631'),
  content: {
    width: unitValue(100, '%'),
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    background: solidColor('#fed631'),
    flex: 1,
    elements: [
      { 
        type: 'image',
        flex: 1,
        bleed: 'full',
        url: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
      { 
        type: 'small', 
        color: solidColor('#031f52'),
        lines: ['A huge assorted'],
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .3, // uses ems
        },
      },
      { 
        type: 'dominant', 
        lines: ['Yard Sale'],
        width: unitValue(100, '%'),
        color: solidColor('#031f52'),
        background: solidColor('#fff'),
        bleed: 'full',
        font: {
          family: 'Muli',
          weight: 900,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .1, // usTes ems
        },
      },
      { 
        type: 'small', 
        lines: ['September 22-25, 2019'],
        color: solidColor('#031f52'),
        divider: {
          type: 'line',
          px: 1,
          color: solidColor('#D1BC8B'),
        },
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          style: 'normal',
          lineHeight: 1.2,
          transform: 'uppercase',
          letterSpacing: .3, // uses ems
        },
      },
    ],
  },
}