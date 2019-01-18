import { solidColor, unitValue } from './'

export default {
  title: 'Yard Sale',
  px: 36,
  py: 36,
  background: solidColor('#fed631'),
  overlay: {
    type: 'image',
    url: '/grunge-2.png',
    backgroundBlendMode: 'lighten',
  },
  content: {
    width: unitValue(100, '%'),
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    background: solidColor('#fed631'),
    bleed: { all: true },
    flex: 1,
    elements: [
      { 
        type: 'image',
        flex: 1,
        bleed: {all: true},
        url: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      },
      { 
        type: 'small', 
        color: solidColor('#031f52'),
        lines: [
          {type: 'descriptiveText', text: 'A huge assorted'},
        ],
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
        lines: [
          {type: 'eventName', text: 'Yard Sale'},
        ],
        width: unitValue(100, '%'),
        color: solidColor('#031f52'),
        background: solidColor('#fff'),
        bleed: {all: true },
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
        lines: [
          {type: 'date', text: 'September 22-25, 2019', format: 'MMMM D, YYYY'},
        ],
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