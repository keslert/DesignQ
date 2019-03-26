import { solidColor } from './'

export default {
  id: 36,
  title: 'Plan Your Career',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-and-black-vector-job-fair-flyer-MAC7m4cpzFQ.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#fbab32'),
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Plan Your'},
            {type: 'eventName', text: 'Career the'},
            {type: 'eventName', text: 'Right Way.'},
          ],
          color: solidColor('#2b2b2b'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0.046,
            lineHeight: 1.25,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'host', text: 'Come to the EDU Job Fair and get into your dream company.'},
          ],
          color: solidColor('#2b2b2b'),
          font: {
            family: 'Lato',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.2,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    header: {
      bleed: { a: 1 },
      alignX: 'left',
      textAlign: 'left',
      background: solidColor('#2b2b2b'),
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'El Dorado University'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Lato',
            letterSpacing: 0.13,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
      ]
    },
    footer: {
      alignX: 'right',
      textAlign: 'right',
      elements: [
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'July 19, 2020'},
            {type: 'time', text: '10 AM to 5 PM'},
            [
              {type: 'location', text: '123 Anywhere St.'},
              {type: 'city-state', text: 'Any City'},
            ]
          ],
          divider: {
            type: 'comma',
            size: 1,
            color: solidColor('#2b2b2b'),
          },
          color: solidColor('#2b2b2b'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0.043,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'The EDU Job Fair is an annual event where students can get to know'},
            {type: 'details', text: 'over 100 amazing companies in various fields of study.'},
          ],
          color: solidColor('#2b2b2b'),
          font: {
            family: 'Lato',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
      ]
    }
  }
}