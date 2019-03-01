import { solidColor, unitValue } from '.'

export default {
  id: 26,
  title: "Jacqueline's Birthday Party",
  tags: ['event', 'flyer'],
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-coral-&-black-photo-birthday-flyer-MAC4Cw5ADUo.jpg?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1494652588305-d663c5a1eb31?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      zoom: 1.8,
      y: 0.65,
      filters: {
        brightness: 0.9,
        grayscale: 1,
      },
    },
    color: '#909090',
    backgroundBlendMode: 'overlay',
  },
  content: {
    body: {
      alignY: 'bottom',
      pb: 2,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: "You're All Invited!"},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Mr Dafoe',
            letterSpacing: 0.01,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
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
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: "Let's Party and Celebrate 21 Awesome"},
            {type: 'descriptive', text: "Years!"},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Lato',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      bleed: { a: 1 },
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
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#f17365cc'),
          lines: [
            {type: 'descriptive', text: 'There will be beer kegs, cocktails, and loads of bar chow! Let me know if you'},
            {type: 'descriptive', text: 'can make it through hello@reallygreatsite.com'},
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
        },
      ]
    }
  }
}