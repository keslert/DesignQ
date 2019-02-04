import { solidColor, unitValue } from '.'

export default {
  title: 'Annual All-White Charity Parity',
  tags: ['event', 'flyer'],
  px: 36,
  py: 48,
  background: solidColor('#fff'),
  content: {
    bleed: { all: true },
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    elements: [
      {
        type: 'logo',
        size: 1,
        url: '/yacht.svg',
        fill: '#373737',
        meta: {
          width: 50,
          height: 50,
          colors: [],
          filetype: 'svg',
        },
        mb: 1,
      },
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Bijou Solutions, Inc.'},
        ],
        color: solidColor('#373737'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Annual All-White'},
          {type: 'eventName', text: 'Charity Party'},
        ],
        color: solidColor('#373737'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0.05,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Break out your best all-white outfit and steal the show!'},
        ],
        color: solidColor('#373737'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.6,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  footer: {
    bleed: { all: true },
    background: solidColor('#373737'),
    width: unitValue(100, '%'),
    textAlign: 'center',
    elements: [
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          [
            {type: 'date', text: 'October 12, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '6:00pm'},
          ],
          {type: 'location', text: 'San Dias Party Place'},
        ],
        divider: {
          type: 'line',
          size: 1,
          color: solidColor('#fff'),
        },
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: .5,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 2,
      },
      {
        type: 'paragraph',
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'This year, all proceeds from this event will go to the George'},
          {type: 'descriptiveText', text: 'Hewes Foundation. Come and party for a good cause!'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: .5,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  }
}