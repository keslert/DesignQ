import { solidColor, unitValue, splitColor } from '.'

export default {
  id: 28,
  title: 'Support Sandios Food Drive',
  tags: ['event', 'flyer', 'food-drive'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-cream-and-purple-icons-food-drive-flyer-MAC5t38U8lM.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    color: solidColor('#fff1d9'),
  },
  decor: {
    t: .75,
    background: {
      img: {
        src: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        meta: { w: 800, h: 533 },
        x: 0,
        y: 0,
        zoom: 1,
      },
    }
  },
  pr: 2,
  content: {
    bleed: { t: 1 },
    body: {
      bleed: { l: 1 },
      background: { 
        color: solidColor('#251a4b'),
      },
      alignX: 'left',
      alignY: 'bottom',
      itemsAlignX: 'left',
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
            size: 1,
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
            size: 1,
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
            {type: 'details', text: 'The food drive is sponsored by Sandio'},
            {type: 'details', text: 'Foundation, TCEN Hotel, Bijou Solutions, Inc.'},
            {type: 'details', text: 'Gold Cheetah Bar and Tools Hardware & Co.'},
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