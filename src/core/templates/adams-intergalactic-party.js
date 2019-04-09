import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  title: '',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  background: { 
  color: basicColor('#e54049'),
},
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      background: { 
  color: basicColor('#e54049'),
},
      alignX: 'center',
      alignY: 'center',
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Annual'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: '',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'time', text: '10AM'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    footer: {
      bleed: { all: true },
      background: { 
  color: basicColor('#6b6f39'),
},
      width: unitValue(100, '%'),
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          color: basicColor('#ffffff'),
          lines: [
            {type: 'location', text: '123 Anywhere St.'},
          ],
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    }
  }
}