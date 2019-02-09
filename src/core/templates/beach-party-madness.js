import { solidColor, unitValue } from '.'

export default {
  title: 'Beach Party Madness',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-dark-maroon-and-yellow-beach-party-flyer-MAC5p09I7SY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 48,
  py: 48,
  background: {
    url: 'https://images.unsplash.com/photo-1529182856268-587c45053e0f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: '#516c5c',
    backgroundBlendMode: 'overlay',
    filters: {
      brightness: 0.4,
    }
  },
  content: {
    bleed: { all: true },
    alignX: 'left',
    alignY: 'flex-start',
    textAlign: 'left',
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'Come Party With Us!'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0.15,
          lineHeight: 1.4,
          size: 0.4,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Beachtown Beach'},
          {type: 'eventName', text: 'Party Madness'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'League Gothic',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bar',
        background: solidColor('#f7f1af'),
        width: unitValue(120, 'px'),
        height: unitValue(8, 'px'),
        mb: 1,
      },
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Proudly sponsored by Lamplight Mobile System'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
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
    alignX: 'flex-right',
    textAlign: 'right',
    width: unitValue(100, '%'),
    mb: 2,
    elements: [
      {
        type: 'heading',
        lines: [
          [

            {type: 'date', text: 'July 9, 2020'},
            {type: 'time', text: '3 pm onwards'},
          ],
          {type: 'location', text: 'Beechtown Beach'},
        ],
        divider: {
          type: 'line',
          size: 1,
          color: solidColor('#fff'),
        },
        color: solidColor('#fff'),
        font: {
          family: 'League Gothic',
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
        type: 'bar',
        background: solidColor('#f7f1af'),
        width: unitValue(120, 'px'),
        height: unitValue(8, 'px'),
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'Put on your swimsuit, leave your stresses away'},
          {type: 'descriptiveText', text: 'and get ready for a night of partying by the'},
          {type: 'descriptiveText', text: 'ocean! Everyone is invited to join!'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.2,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  }
}