import { solidColor, unitValue } from '.'

export default {
  title: 'All-White Holiday Fundraiser',
  tags: ['event', 'flyer'],
  px: 72,
  py: 72,
  border: {
    top: 10,
    bottom: 10,
    color: '#dfd7a6',
  },
  background: solidColor('#fff'),
  content: {
    bleed: { all: true },
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'The 15th Annual'},
        ],
        color: solidColor('#666'),
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
      {
        type: 'logo',
        url: '/champagne.svg',
        fill: '#dfd7a6',
        size: 1,
        meta: {
          width: 100,
          height: 100,
          colors: [],
          filetype: 'svg',
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'All-White Holiday'},
          {type: 'eventName', text: 'Fundraiser Party'},
        ],
        color: solidColor('#666'),
        font: {
          family: 'Voga',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'All proceeds will fund the Winslow'},
          {type: 'descriptiveText', text: 'Women\'s Organization'},
        ],
        color: solidColor('#666'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bar',
        background: solidColor('#dfd7a6'),
        width: unitValue(70, '%'),
        height: unitValue(8, 'px'),
        mb: 1.5,
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
          color: '#fff',
          size: 1,
        },
        color: solidColor('#666'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'Enjoy hors d\'oeuvres and cocktails as you are'},
          {type: 'descriptiveText', text: 'serenaded by the angelic voice of renowned jazz'},
          {type: 'descriptiveText', text: 'singer Antonina Berkeley.'},
        ],
        color: solidColor('#666'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
}