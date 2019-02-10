import { solidColor, unitValue } from '.'

export default {
  title: 'Craft Fair',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-event-flyer-MADKJzVJFo8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 48,
  background: {
    color: '#e33260',
  },
  content: {
    bleed: { all: true },
    alignX: 'flex-end',
    alignY: 'flex-end',
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
        mb: 2,
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
        mb: 0.5,
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
        mb: 1,
      },
      {
        type: 'bar',
        background: solidColor('#fef093'),
        height: unitValue(2, 'px'),
        width: unitValue(50, '%'),
      },
      {
        type: 'small',
        lines: [
          [
            {type: 'descriptiveText', text: 'Crafts'},
            {type: 'descriptiveText', text: 'Jewelries'},
            {type: 'descriptiveText', text: 'Clothing'},
          ],
          [
            {type: 'descriptiveText', text: 'Fine Art'},
            {type: 'descriptiveText', text: 'Housewares'},
          ],
          [
            {type: 'descriptiveText', text: 'Plush Items'},
            {type: 'descriptiveText', text: 'Sweet Treats'},
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
        mb: 1,
      },
      {
        type: 'small',
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
        mb: 1,
      },

    ]
  },
}