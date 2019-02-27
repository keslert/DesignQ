import { solidColor, unitValue } from '.'

export default {
  title: 'Fitness and Health Fair',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-medicine-icons-health-fair-flyer-MAC4Dj6eGos.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#ffffff'),
  decor: {
    t: .3,
  },
  content: {
    body: {
      elements: [
        // {
        //   type: 'image',
        //   url: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/images%2Fmedical-icons.png?alt=media&token=62159492-11d2-4b87-be52-7fe70058a703',
        //   flex: 1,
        //   bleed: {all: true, bottom: false},
        // },
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Conrado Clinic'},
            {type: 'host', text: 'Presents'},
          ],
          color: solidColor('#292a25'),
          font: {
            family: 'Aleo',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Fitness and'},
            {type: 'eventName', text: 'Health Fair'},
            {type: 'eventName', text: '2020'},
          ],
          color: solidColor('#52b24f'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'A convention of informative talks and'},
            {type: 'descriptive', text: 'free health booths'},
          ],
          color: solidColor('#292a25'),
          font: {
            family: 'Aleo',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.6,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'August 1-3, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '9 am to 5 pm'},
            {type: 'location', text: 'Hisburgh Public Park'},
          ],
          color: solidColor('#52b24f'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 0.3,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'Admission Fee: $6 (unlimited entrace'},
            {type: 'descriptive', text: 'for all event days)'},
            {type: 'descriptive', text: 'Get a consulatation or medical test for'},
            {type: 'descriptive', text: 'free at our health booths!'},
          ],
          color: solidColor('#292a25'),
          font: {
            family: 'Aleo',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}