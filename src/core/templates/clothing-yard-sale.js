import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Clothing Yard Sale',
  tags: ['event', 'yard-sale'],
  px: 72,
  py: 48,
  border: {
    bottom: 10,
    color: basicColor('#5ea9df'),
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      width: unitValue(100, '%'),
      flex: 1,
      alignX: 'left',
      alignY: 'center',
      background: { 
  color: basicColor('#ffeeca'),
},
      bleed: { all: true },
      elements: [
        { 
          type: 'image',
          flex: 1,
          bleed: { all: true },
          url: 'https://images.pexels.com/photos/325867/pexels-photo-325867.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Yard'},
            {type: 'eventName', text: 'Sale!'},
          ],
          background: { 
  color: basicColor('#e64d45'),
},
          color: basicColor('#fcda57'),
          font: {
            transform: 'uppercase',
            size: 1,
            family: 'Roboto Condensed',
            weight: 400,
            style: 'normal',
            lineHeight: 1.2,
            letterSpacing: 0,
          },
          overlap: .5,
          px: 2,
          py: 1.5,
          mb: 2,
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'pre-loved clothing, shoes, home'},
            {type: 'descriptive', text: 'decor, books, stationary, and more...'},
          ],
          color: basicColor('#e64d45'),
          font: {
            size: 1.5,
            family: 'Muli',
            weight: 400,
            style: 'normal',
            lineHeight: 1.4,
          },
        },
      ]
    }
  }
}