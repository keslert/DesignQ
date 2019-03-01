import { solidColor, unitValue, splitColor } from '.'

export default {
  id: 28,
  title: 'Support Sandios Food Drive',
  tags: ['event', 'flyer', 'food-drive'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-cream-and-purple-icons-food-drive-flyer-MAC5t38U8lM.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      x: 0.3,
      y: -.4,
      zoom: 1.35,
    },
    color: splitColor(0, 'transparent', '#fff1d9'),
    backgroundBlendMode: 'lighten',
  },
  content: {
    body: {
      w: 'auto',
      bleed: { l: 1 },
      background: solidColor('#251a4b'),
      alignX: 'left',
      alignY: 'bottom',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'We Need Volunteers!'},
          ],
          color: solidColor('#fff1d9'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.2,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
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
            family: 'League Spartan',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'For the benefit of our less fortunate neighbors'},
          ],
          color: solidColor('#fff1d9'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          color: solidColor('#251a4b'),
          lines: [
            {type: 'location', text: 'Located at 123 Anywhere St.'},
            {type: 'descriptive', text: 'Any City, Open Daily.'},
          ],
          font: {
            family: 'Montserrat',
            letterSpacing: 0.12,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#251a4b'),
          lines: [
            {type: 'descriptive', text: 'The food drive is sponsored by Sandio'},
            {type: 'descriptive', text: 'Foundation, TCEN Hotel, Bijou Solutions, Inc.'},
            {type: 'descriptive', text: 'Gold Cheetah Bar and Tools Hardware & Co.'},
          ],
          font: {
            family: 'Montserrat',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    }
  }
}