import { solidColor, unitValue } from '.'

export default {
  title: 'Craft Fair',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-event-flyer-MADKJzVJFo8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#e33260'),
  decor: {
    l: .2,
  },
  content: {
    body: {
      h: 'auto',
      alignX: 'right',
      alignY: 'bottom',
      textAlign: 'right',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Craft'},
            {type: 'eventName', text: 'Fair'},
          ],
          color: solidColor('#fef093'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'lowercase',
            weight: 900,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'date', text: 'April 14 & 15, 2018', format: 'MMMM D, YYYY'},
          ],
          color: solidColor('#fef093'),
          font: {
            family: 'Quicksand',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'small',
          lines: [
            {type: 'time', text: 'from 10am to 7pm'},
            {type: 'host', text: 'at the Creative Corner'},
            {type: 'location', text: '5431 Sunny Lane, Nashville'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'Quicksand',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: solidColor('#fef093'),
          h: 2,
          w: .5,
        },
        {
          type: 'small',
          lines: [
            [
              {type: 'descriptive', text: 'Crafts'},
              {type: 'descriptive', text: 'Jewelries'},
              {type: 'descriptive', text: 'Clothing'},
            ],
            [
              {type: 'descriptive', text: 'Fine Art'},
              {type: 'descriptive', text: 'Housewares'},
            ],
            [
              {type: 'descriptive', text: 'Plush Items'},
              {type: 'descriptive', text: 'Sweet Treats'},
            ]
          ],
          divider: {
            type: 'dot',
            size: 1,
            color: solidColor('#ffffffcc'),
          },
          color: solidColor('#ffffffcc'),
          font: {
            family: 'Quicksand',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'website', text: 'www.craftfair2016.com'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'Quicksand',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.4,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}