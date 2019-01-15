import { solidColor, unitValue, linear } from '.'

export default {
  title: 'Inhale Exhale',
  px: 36,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1485727749690-d091e8284ef3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    x: .35,
    y: 1,
    zoom: 1.75,
    color: '#49065f',
    filters: {
      brightness: .7,
    },
    backgroundBlendMode: 'luminosity',
  },
  content: {
    w: .7,
    alignY: 'center',
    textAlign: 'left',
    elements: [
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Inhale'}, 
          {type: 'eventName', text: 'Exhale'},
        ],
        color: solidColor('#fade77'),
        font: {
          family: 'Roboto Condensed',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'normal',
          lineHeight: 1.2,
        },
      },
      { 
        type: 'small', 
        lines: [
          {type: 'descriptiveText', text: 'Yoga Therapy'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Roboto Condensed',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
      },
    ],
  },
  footer: {
    type: 'basic',
    overlay: false,
    width: unitValue(100, '%'),
    background: solidColor('#49065f'),
    textAlign: 'center',
    elements: [{
      type: 'small',
      lines: [
        {type: 'website', text: 'www.silkyoga.com'},
      ],
      color: solidColor('#fade77'),
      font: {
        family: 'Roboto Condensed',
        weight: 400,
        size: 0.8,
        style: 'normal',
        transform: 'uppercase', // TODO: I like the name appearance for this. carrd.co
        lineHeight: 1.4,
        letterSpacing: .5,
      },
    }]
  },
  header: {
    type: 'basic',
    overlay: false,
    width: unitValue(100, '%'),
    textAlign: 'right',
    elements: [{
      type: 'logo',
      url: '/silk-yoga.png',
      meta: {
        width: 88,
        height: 100,
        colors: [],
        filetype: 'png', // y = 0 if at bottom of page, y=1 if a top
      }
    }]
  },
}