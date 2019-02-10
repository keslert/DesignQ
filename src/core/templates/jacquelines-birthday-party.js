import { solidColor, unitValue } from '.'

export default {
  title: "Jacqueline's Birthday Party",
  tags: ['event', 'flyer'],
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-coral-&-black-photo-birthday-flyer-MAC4Cw5ADUo.jpg?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  px: 48,
  py: 36,
  background: {
    url: 'https://images.unsplash.com/photo-1494652588305-d663c5a1eb31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    zoom: 1.8,
    y: 0.65,
    color: '#909090',
    backgroundBlendMode: 'overlay',
    filters: {
      brightness: 0.9,
      grayscale: 1,
    },
  },
  content: {
    bleed: { all: true },
    alignX: 'center',
    alignY: 'flex-end',
    textAlign: 'center',
    mb: 2,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: "You're All Invited!"},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Yellowtail',
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
        type: 'dominant',
        lines: [
          {type: 'eventName', text: "Jacqueline's"},
          {type: 'eventName', text: "Birthday Party"},
        ],
        color: solidColor('#f17365'),
        font: {
          family: 'Oswald',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.8,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: "Let's Party and Celebrate 21 Awesome"},
          {type: 'descriptiveText', text: "Years!"},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Lato',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  footer: {
    bleed: { all: true },
    background: solidColor('#1d1e20'),
    width: unitValue(100, '%'),
    textAlign: 'center',
    mb: 2,
    elements: [
      {
        type: 'heading',
        color: solidColor('#f17365cc'),
        lines: [
          {type: 'date', text: 'September 20, 2020'},
          {type: 'time', text: 'Party Starts 8:00 pm'},
          {type: 'location', text: 'Venue: My House'},
        ],
        font: {
          family: 'Lato',
          letterSpacing: 0.15,
          lineHeight: 1.6,
          size: 0.1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        color: solidColor('#f17365cc'),
        lines: [
          {type: 'descriptiveText', text: 'There will be beer kegs, cocktails, and loads of bar chow! Let me know if you'},
          {type: 'descriptiveText', text: 'can make it through hello@reallygreatsite.com'},
        ],
        font: {
          family: 'Lato',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  }
}