import { solidColor, unitValue, linear } from '.'

export default {
  title: 'Autumn Music Festival 2020',
  tags: ['event', 'flyer'],
  px: 60,
  py: 60,
  background: {
    url: 'https://images.unsplash.com/photo-1429198739803-7db875882052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: linear(0, '#0a5673', '#2fa992'),
    backgroundBlendMode: 'soft-light',
    filters: {
      brightness: 0.8,
    }
  },
  content: {
    bleed: { left: true, right: true },
    alignX: 'flex-start',
    alignY: 'flex-start',
    textAlign: 'left',
    elements: [
      {
        type: 'bar',
        background: solidColor('#fff'),
        height: unitValue(12, 'px'),
        width: unitValue(100, '%'),
      },
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Mathika Music Productions'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.3,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Autumn Music'},
          {type: 'eventName', text: 'Festival 2020'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0.1,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'time', text: 'Enjoy an afternoon of'},
          {type: 'time', text: 'amazing musical performances!'},
        ],
        color: solidColor('#fff'),
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
        type: 'heading',
        lines: [
          [
            {type: 'date', text: 'September 23, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: 'Gates Open'},
          ],
          [
            {type: 'time', text: 'at 3pm'},
            {type: 'location', text: 'Beechtown Park'},
          ],
        ],
        divider: {
          type: 'line',
          size: 1,
          color: solidColor('#fff'),
        },
        color: solidColor('#fff'),
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
    ]
  },
  footer: {
    bleed: { all: true },
    width: unitValue(100, '%'),
    textAlign: 'left',
    elements: [
      {
        type: 'paragraph',
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'Tickets are priced at $20 each. Buy your tickets'},
          {type: 'descriptiveText', text: 'now at www.reallygreatsites.com or at designated'},
          {type: 'descriptiveText', text: 'booths at Beechtown Park.'},
        ],
        font: {
          family: 'Muli',
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
  }
}