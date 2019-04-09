import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  id: 32,
  title: 'Mitchell Family Cookie Exchange',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-and-red-cookie-exchange-consumer-personal-flyer-MADI6f2rupo.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#fefffa'),
},
  decor: {
    a: .15,
  },
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Ready, Get Set, Bake!'},
          ],
          color: basicColor('#a09056'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.146,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'The'},
            {type: 'eventName', text: 'Mitchell'},
            {type: 'eventName', text: 'Family'},
            {type: 'eventName', text: 'Cookie'},
            {type: 'eventName', text: 'Exchange'},
          ],
          color: basicColor('#49673f'),
          font: {
            family: 'Lato',
            letterSpacing: 0.107,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'host', text: 'Bring your favorite homebaked'},
            {type: 'host', text: 'cookies, then let\'s swap!'},
          ],
          color: basicColor('#a09056'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.127,
            lineHeight: 1.4,
            size: 1.2,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      elements: [
        {
          type: 'heading',
          lines: [
            [
              {type: 'date', text: 'Dec. 20, 2020', format: 'MMM. D, YYYY'},
              {type: 'time', text: '3pm'},
            ],
            {type: 'location', text: '123 Anywhere St., Any City'},
          ],
          divider: {
            type: 'dot',
            size: 1,
            color: basicColor('#f34535'),
          },
          color: basicColor('#f34535'),
          font: {
            family: 'Lato',
            letterSpacing: 0.122,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 900,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: "Don't forget to bring your own"},
            {type: 'details', text: 'reusable cookie containers!'},
          ],
          color: basicColor('#49673f'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.081,
            lineHeight: 1.4,
            size: 1.1,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
        },
      ]
    }
  }
}