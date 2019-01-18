import { striped, solidColor, unitValue } from '.'

export default {
  title: 'Traditional Grace',
  px: 36,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1533677535047-ebf597e41eef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  content: {
    textAlign: 'left',
    alignY: 'flex-end',
    alignX: 'left',
    bleed: { all: true },
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'For Sale'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
        mb: 0.75,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Traditional'},
          {type: 'eventName', text: 'Grace'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Roboto Condensed',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        mb: 1,
      },
      {
        type: 'bar',
        background: solidColor('#fff'),
        width: unitValue(60, 'px'),
        height: unitValue(5, 'px'),
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'An offering unmatched in quality or setting, this'},
          {type: 'descriptiveText', text: 'lovely cottage offers a life of absolute luxery and'},
          {type: 'descriptiveText', text: 'convenience. A beautiful home for those who wish'},
          {type: 'descriptiveText', text: 'for the quiet and quaint.'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 0.5,
          style: 'normal',
          lineHeight: 1.4,
        },
        mb: 1,
      },
    ]
  },
}