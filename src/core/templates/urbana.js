import { unitValue } from '.'
import { stripedColor, basicColor } from '../utils/color-utils';

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
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      w: .6,
      background: { 
  color: basicColor('#202020'),
},
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      bleed: { all: true },
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Urbana'},
          ],
          color: basicColor('#f5d300'),
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
          lines: [
            {type: 'descriptive', text: 'A Street'},
            {type: 'descriptive', text: 'Photography'},
            {type: 'descriptive', text: 'Workshop'},  
          ],
          color: basicColor('#ffffff'),
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
            color: stripedColor(135, '#f5d300', 6, '#202020', 2)
          },
          width: unitValue(50, '%'),
          height: unitValue(16, 'px'),
          mb: 2,
        },
        {
          type: 'small',
          lines: [
            {type: 'day-of-week', text: 'Friday'}, 
            {type: 'date', text: 'June 5, 2019', format: 'MMM D, YYYY'},
          ],
          color: basicColor('#ffffff'),
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
}