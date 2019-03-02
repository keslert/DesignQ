import { solidColor } from './'

export default {
  id: 5,
  title: 'All-White Holiday Fundraiser',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-gold-all-white-party-flyer-MAC7msY4lpw.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#fff'),
  border: {
    y: .01,
    yOffset: .03,
    background: solidColor('#dfd7a6'),
  },
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'The 15th Annual'},
          ],
          color: solidColor('#666'),
          font: {
            family: 'Libre Baskerville',
            letterSpacing: 0.23,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 0,
        },
        {
          type: 'icon',
          src: '/champagne.svg',
          fill: '#dfd7a6',
          size: 1.2,
          meta: {
            width: 100,
            height: 100,
            colors: [],
            filetype: 'svg',
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'All-White Holiday'},
            {type: 'eventName', text: 'Fundraiser Party'},
          ],
          color: solidColor('#666'),
          font: {
            family: 'Libre Baskerville',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'All proceeds will fund the Winslow'},
            {type: 'descriptive', text: 'Women\'s Organization'},
          ],
          color: solidColor('#666'),
          font: {
            family: 'Libre Baskerville',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: solidColor('#dfd7a6'),
          w: .5,
          h: 4,
        },
        {
          type: 'heading',
          lines: [
            [
              {type: 'date', text: 'November 25, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '6:00pm'},
            ],
            {type: 'location', text: 'The Winslow Chateau'},
          ],
          divider: {
            type: 'line',
            size: 2,
            color: solidColor('#666'),
          },
          color: solidColor('#666'),
          font: {
            family: 'Libre Baskerville',
            letterSpacing: 0.23,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'Enjoy hors d\'oeuvres and cocktails as you are'},
            {type: 'descriptive', text: 'serenaded by the angelic voice of renowned jazz'},
            {type: 'descriptive', text: 'singer Antonina Berkeley.'},
          ],
          color: solidColor('#666'),
          font: {
            family: 'Libre Baskerville',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}