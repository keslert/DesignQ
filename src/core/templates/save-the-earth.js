import { solidColor, unitValue } from '.'

export default {
  title: 'Save the Earth',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-purple-and-green-earth-volunteer-flyer-MAC7mtoG_Mk.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#2d1b4d'),
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'A Call for Volunteers'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'Lato',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Save the Earth.'},
            {type: 'eventName', text: 'Save Lives.'},
          ],
          color: solidColor('#94f9cd'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'time', text: 'The Beechtown Environmental Organization needs you.'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'Lato',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'heading',
          lines: [
            {type: 'contact', text: 'Register Online at'},
            {type: 'contact', text: 'www.reallygreatsite.com'},
          ],
          color: solidColor('#94f9cd'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 0.4,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
      ]
    },
    footer: {
      bleed: { a: 1 },
      background: solidColor('#e5fce1'),
      elements: [
        // { 
        //   type: 'image',
        //   fill: '#94f9cd',
        //   bleed: {all: true},
        //   url: '/world.svg',
        //   aspectRatio: .55,
        //   zoom: 1.6,
        //   y: 0,
        // },
        {
          type: 'paragraph',
          color: solidColor('#2d1b4d'),
          lines: [
            {type: 'descriptive', text: 'The Beechtown Enfironmental Organization has been'},
            {type: 'descriptive', text: 'protecting the environment for over 40 years. Will you join us?'},
          ],
          font: {
            family: 'Lato',
            letterSpacing: 0,
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