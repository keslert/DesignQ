import { solidColor, unitValue } from '.'

export default {
  title: 'Learn To Brew Your Best Coffee',
  px: 36,
  py: 72,
  background: {
    url: 'https://images.unsplash.com/photo-1509042239860-f550ce710b93?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: solidColor('#3c342d'),
    backgroundBlendMode: 'exclusion',
    filters: {
      brightness: 0.5,
    },
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { left: true, top: true, bottom: true },
      background: { 
  color: solidColor('#692a3b'),
},
      alignX: 'center',
      alignY: 'center',
      textAlign: 'left',
      width: unitValue(100, '%'),
      py: 2,
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Learn To'},
            {type: 'eventName', text: 'Brew Your'},
            {type: 'eventName', text: 'Best Coffee'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Josefin Slab',
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
          type: 'bridge',
          lines: [
            {type: 'time', text: 'A coffee brewing session for the uninitiated'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'italic',
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
      elements: [
        {
          type: 'heading',
          color: solidColor('#ffffff'),
          lines: [
            [
              {type: 'date', text: 'July 15'},
              {type: 'day-of-week', text: 'Saturday'},
              {type: 'time', text: '3-5 pm'},
            ],
            {type: 'location', text: '123 Anywhere St.'},
          ],
          divider: {
            size: 1,
            type: 'dot',
            color: solidColor('#ffffff'),
          },
          font: {
            family: 'Josefin Slab',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1.5,
        },
        {
          type: 'paragraph',
          color: solidColor('#ffffff'),
          lines: [
            {type: 'details', text: 'Learn how to make brewed coffee right in the'},
            {type: 'details', text: 'comfort of your own home and experiment with'},
            {type: 'details', text: 'many coffee-based beverages'},
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
          mb: 1,
        },
      ]
    },
    header: {
      bleed: { all: true },
      width: unitValue(100, '%'),
      textAlign: 'left',
      elements: [
        {
          type: 'icon',
          src: '/coffee.png',
          size: 1,
          meta: {
            width: 64,
            height: 87,
            colors: [],
            filetype: 'png', // y = 0 if at bottom of page, y=1 if a top
          }
        },
        {
          type: 'small',
          color: solidColor('#ffffff'),
          lines: [
            {type: 'host', text: 'Vigilatte Coffee Presents'},
          ],
          divider: {
            size: 1,
            type: 'dot',
            color: solidColor('#ffffff'),
          },
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
      ]
    }
  }
}