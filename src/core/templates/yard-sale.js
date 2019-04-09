import { unitValue } from './'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Yard Sale',
  px: 36,
  py: 36,
  background: { 
  color: basicColor('#fed631'),
},
  overlay: {
    type: 'image',
    src: '/grunge-2.png',
    backgroundBlendMode: 'lighten',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      background: { 
  color: basicColor('#fed631'),
},
      elements: [
        { 
          type: 'image',
          flex: 1,
          bleed: {a: 1},
          src: 'https://images.unsplash.com/photo-1505909182942-e2f09aee3e89?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        },
        { 
          type: 'small', 
          color: basicColor('#031f52'),
          lines: [
            {type: 'descriptive', text: 'A huge assorted'},
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
          color: basicColor('#031f52'),
          background: { 
            color: basicColor('#ffffff'),
          },
          bleed: {left: true, right: true },
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
          color: basicColor('#031f52'),
          divider: {
            type: 'line',
            px: 1,
            color: basicColor('#D1BC8B'),
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
}