import { solidColor, unitValue } from './'

export default {
  title: 'Valentines Day Mixer',
  px: 36,
  py: 36,
  border: {
    all: 12,
    color: '#fff',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      // w: .70,
      width: unitValue(100, '%'),
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      background: solidColor('#31302c'),
      bleed: {all: true},
      flex: 1,
      elements: [
        { 
          type: 'image',
          flex: 1,
          bleed: {all: true},
          url: 'https://images.unsplash.com/photo-1484678002699-0e7dc5fa52c2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          filters: {
            sepia: 0.3,
          },
        },
        { 
          type: 'small', 
          color: solidColor('#fff'),
          lines: [
            {type: 'descriptiveText', text: 'Celebrate the Day of Hearts'},
          ],
          mb: 1,
          font: {
            family: 'Muli',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .3, // uses ems
          },
        },
        { 
          type: 'dominant', 
          lines: [
            {type: 'eventName', text: 'Valentine\'s'},
            {type: 'eventName', text: 'Day Mixer'},
          ],
          color: solidColor('#D1BC8B'),
          font: {
            family: 'Josefin Slab',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
        { 
          type: 'small', 
          lines: [
            [
              {type: 'date', text: '02.14.19', format: 'MM.DD.YY'}, 
              {type: 'time', text: '7PM'},
              {type: 'location', text: '71 Park Lane'},
            ],
          ],
          color: solidColor('#fff'),
          divider: {
            type: 'line',
            size: 2,
            color: solidColor('#fff'),
          },
          mb: 1,
          font: {
            family: 'Muli',
            weight: 400,
            size: 1,
            style: 'normal',
            lineHeight: 1.2,
            transform: 'uppercase',
            letterSpacing: .3, // uses ems
          },
        },
      ],
    },
  }
}