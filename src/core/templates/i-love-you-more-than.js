import { solidColor, unitValue } from '.'

export default {
  title: 'I love you more than',
  px: 72,
  py: 48,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1534790566855-4cb788d389ec?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    filters: {
      brightness: .6,
    },
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      bleed: { all: true },
      elements: [
        { 
          type: 'small', 
          color: solidColor('#fff'),
          lines: [
            {type: 'descriptive', text: 'Burger Soldier Presents'},
          ],
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .3, // uses ems
          },
          mb: 1.5,
        },
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'I Love'},
            {type: 'eventName', text: 'You'},
            {type: 'eventName', text: 'More'},
            {type: 'eventName', text: 'Than'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Londrina Sketch',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .05,
          },
        },
        { 
          type: 'small', 
          lines: [
            {type: 'descriptive', text: 'Celebrate your Valentines with this'},
            {type: 'descriptive', text: 'treat for two promo'},
          ],
          color: solidColor('#fff'),
          mb: 1,
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            style: 'normal',
            lineHeight: 1.6,
            transform: 'uppercase',
          },
        },
        { 
          type: 'bridge', 
          lines: [
            {type: 'descriptive', text: 'Buy 1 Get 1 Free'},
          ],
          color: solidColor('#fff'),
          mb: 1,
          font: {
            family: 'Londrina Sketch',
            weight: 700,
            size: 1.8,
            style: 'normal',
            lineHeight: 1.4,
            transform: 'uppercase',
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'location', text: 'Visit us at 334 Homestead Drive Mount Holly, NJ 08060'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Muli',
            weight: 400,
            size: 2,
            style: 'normal',
            lineHeight: 1.2,
          },
        }
      ],
    },
  }
}