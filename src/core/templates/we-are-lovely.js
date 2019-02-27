import { solidColor, unitValue } from '.'

export default {
  title: 'We are lovely',
  px: 72,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1470163395405-d2b80e7450ed?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    filters: {
      brightness: 0.8,
    }
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
            {type: 'descriptive', text: 'Valentine\'s Celebration'},
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
            {type: 'eventName', text: 'We Are'},
            {type: 'eventName', text: 'Lovely'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Voga',
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
            {type: 'location', text: '540 Country Club Drive'},
            [
              {type: 'city-state', text: 'Dalton, GA 30721'},
              {type: 'time', text: '6PM'},
            ],
          ],
          color: solidColor('#fff'),
          divider: {
            type: 'line',
            size: 2,
            color: solidColor('#D1BC8B'),
          },
          mb: 1,
          font: {
            family: 'Muli',
            weight: 400,
            size: 0.8,
            style: 'normal',
            lineHeight: 1.4,
            transform: 'uppercase',
            letterSpacing: .3, // uses ems
          },
        },
      ],
    },
  }
}