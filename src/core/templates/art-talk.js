import { unitValue } from './'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Art Talk',
  px: 48,
  py: 36,
  background: {
    url: 'https://images.unsplash.com/photo-1532640331846-d2da5987c3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80',
    filters: [],
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      w: 0.5,
      bleed: {all: true },
      alignX: 'flex-start',
      alignY: 'center',
      background: { 
  color: basicColor('#ffffff'),
}, 
      border: {
        color: basicColor('#EE445A'),
        top: 12,
        bottom: 12,
      },
      elements: [
        { 
          type: 'small', 
          color: basicColor('#EF4260'),
          lines: [
            {type: 'date', text: '3rd of', format: 'Do of'}, 
            {type: 'date', text: 'September', format: 'MMMM'}
          ],
          font: {
            family: 'Bebas Neue',
            weight: 400,
            size: 1.0,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
          mb: 1,
        },
        {
          type: 'bar',
          background: { 
  color: basicColor('#FECF82'),
},
          width: unitValue(80, 'px'),
          height: unitValue(8, 'px'),
          mb: 1,
        },
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Art'}, 
            {type: 'eventName', text: 'Talk'},
          ],
          color: basicColor('#EF4260'),
          font: {
            family: 'Bebas Neue',
            weight: 400,
            size: 1.0,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
          mb: 1,
        },
        { 
          type: 'bridge', 
          lines: [
            {type: 'descriptive', text: 'Things you need to know'}, 
            {type: 'descriptive', text: 'about your art'},
          ],
          color: basicColor('#8C8C8C'),
          font: {
            family: 'Muli',
            weight: 700,
            size: 1, // based on the small size
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
          mb: 1,
        },
        {
          type: 'bar',
          background: { 
  color: basicColor('#FECF82'),
},
          width: unitValue(80, 'px'),
          height: unitValue(8, 'px'),
          mb: 1,
        },
        { 
          type: 'small', 
          color: basicColor('#EF4260'),
          lines: [
            {type: 'time', text: '4-7pm'}, 
            {type: 'location', text: 'Athena Hall'},
          ],
          font: {
            family: 'Bebas Neue',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          }
        },
      ],
    },
  }
}