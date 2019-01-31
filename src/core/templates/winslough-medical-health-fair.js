import { solidColor, unitValue } from './index'

export default {
  title: 'Winslow Medical Health Fair',
  tags: ['event', 'flyer'],
  px: 48,
  py: 48,
  border: {
    left: 20,
    color: '#fb972e',
  },
  background: {
    url: 'https://images.unsplash.com/photo-1527613426441-4da17471b66d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: '#58a2c1',
    backgroundBlendMode: 'luminosity',
    filters: {
      brightness: 0.7,
    },
    x: 0.25,
  },
  content: {
    bleed: { all: true },
    alignX: 'flex-start',
    alignY: 'flex-end',
    textAlign: 'left',
    width: unitValue(100, '%'),
    flex: 1,
    mb: 1.5,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Winslough Medical Center'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.2,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'The Annual'},
          {type: 'eventName', text: 'Health Fair'},
          {type: 'eventName', text: '2020'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 0.7,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: "Participate in this year's health talks and"},
          {type: 'descriptiveText', text: "screenings"},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'italic',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          [
            {type: 'date', text: 'November 17, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '10 a.m.'},
          ],
          {type: 'location', text: '123 Anywhere St.'},
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
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'Our health fair is free and open to everyone. Simply register'},
          {type: 'descriptiveText', text: 'your attendance at www.reallygreatsite.com and take a'},
          {type: 'descriptiveText', text: 'screenshot.'},
        ],
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