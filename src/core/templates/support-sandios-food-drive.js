import { solidColor, unitValue, splitColor } from '.'

export default {
  title: 'Support Sandios Food Drive',
  tags: ['event', 'flyer', 'food-drive'],
  px: 36,
  py: 48,
  background: {
    url: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: splitColor(0, '#fff1d9', 'transparent'),
    backgroundBlendMode: 'lighten',
    x: 0.3,
    y: -.4,
    zoom: 1.3,
  },
  content: {
    bleed: { left: true },
    background: solidColor('#251a4b'),
    alignX: 'left',
    alignY: 'flex-end',
    textAlign: 'left',
    pr: 3,
    mb: 2,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'We Need Volunteers!'},
        ],
        color: solidColor('#fff1d9'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Support'},
          {type: 'eventName', text: 'Sandio\'s'},
          {type: 'eventName', text: 'Food Drive'},
          {type: 'eventName', text: '2020'},
        ],
        color: solidColor('#fff1d9'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 900,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'For the benefit of our less fortunate neighbors'},
        ],
        color: solidColor('#fff1d9'),
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
  footer: {
    bleed: { all: true },
    width: unitValue(100, '%'),
    textAlign: 'left',
    mb: 2,
    elements: [
      {
        type: 'heading',
        color: solidColor('#251a4b'),
        lines: [
          {type: 'location', text: 'Located at 123 Anywhere St.'},
          {type: 'descriptiveText', text: 'Any City, Open Daily.'},
        ],
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
        color: solidColor('#251a4b'),
        lines: [
          {type: 'descriptiveText', text: 'The food drive is sponsored by Sandio'},
          {type: 'descriptiveText', text: 'Foundation, TCEN Hotel, Bijou Solutions, Inc.'},
          {type: 'descriptiveText', text: 'Gold Cheetah Bar and Tools Hardware & Co.'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 700,
        },
        mb: 1,
      },
    ]
  }
}