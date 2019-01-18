import { solidColor, unitValue } from '.'

export default {
  title: 'Back to School',
  px: 64,
  py: 36,
  background: solidColor('#030F5B'),
  content: {
    bleed: {all: true },
    background: solidColor('#030F5B'),
    width: unitValue(100, '%'),
    flex: 1,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'eventNameIntro', text: 'Back to School'},
        ],
        color: solidColor('#D786D5'),
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          fitToWidth: true,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Holiday Bake Sale'},
        ],
        color: solidColor('#D786D5'),
        // background: solidColor('#fff'),
        px: 1.5,
        py: 1.1,
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          fitToWidth: true,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .1,
        },
      },
      {
        type: 'bridge',
        lines: [
          {type: 'time', text: 'Wednesday at 12pm'}
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          fitToWidth: true,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      {
        type: 'image',
        url: 'https://images.unsplash.com/photo-1513519683267-4ee6761728ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        bleed: {all: true},
        flex: 1,
      },
    ]
  },
  footer: {
    bleed: {all: true },
    background: solidColor('#D978C9'),
    width: unitValue(100, '%'),
    elements: [{
      type: 'small',
      color: solidColor('#fff'),
      lines: [
        {type: 'descriptiveText', text: 'Proceeds Benefit Spark High School Spirit Squad'}
      ],
      font: {
        family: 'Muli',
        weight: 700,
        size: 1,
        fitToWidth: true,
        style: 'normal',
        transform: 'uppercase',
        lineHeight: 1.2,
      },
    }]
  }
}