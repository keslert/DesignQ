import { solidColor, unitValue } from '.'

export default {
  title: 'Save the Earth',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  background: solidColor('#2d1b4d'),
  content: {
    bleed: { all: true },
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'A Call for Volunteers'},
        ],
        color: solidColor('#ffffffcc'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.8,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 2,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Save the Earth.'},
          {type: 'eventName', text: 'Save Lives.'},
        ],
        color: solidColor('#94f9cd'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.8,
          style: 'normal',
          transform: 'uppercase',
          weight: 900,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'time', text: 'The Beechtown Environmental Organization needs you.'},
        ],
        color: solidColor('#ffffffcc'),
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
          {type: 'contact', text: 'Register Online at'},
          {type: 'contact', text: 'www.reallygreatsite.com'},
        ],
        color: solidColor('#94f9cd'),
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
    ]
  },
  footer: {
    bleed: { all: true },
    width: unitValue(100, '%'),
    textAlign: 'center',
    elements: [
      { 
        type: 'image',
        fill: '#94f9cd',
        bleed: {all: true},
        url: '/world.svg',
        zoom: 1.6,
        y: 0,
      },
      {
        width: unitValue(100, '%'),
        type: 'paragraph',
        bleed: { all: true },
        background: solidColor('#ffffff'),
        color: solidColor('#2d1b4d'),
        lines: [
          {type: 'descriptiveText', text: 'The Beechtown Enfironmental Organization has been'},
          {type: 'descriptiveText', text: 'protecting the environment for over 40 years. Will you join us?'},
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
        py: 2,
        mb: 1,
      },
    ]
  }
}