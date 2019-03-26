import { solidColor } from './'

export default {
  id: 64,
  title: 'Save the Earth',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-purple-and-green-earth-volunteer-flyer-MAC7mtoG_Mk.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#2d1b4d'),
  content: {
    body: {
      h: 'fill',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'A Call for Volunteers'},
          ],
          color: solidColor('#e4fde1'),
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
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Save the Earth.'},
            {type: 'eventName', text: 'Save Lives.'},
          ],
          color: solidColor('#94f9ce'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0,
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
            {type: 'time', text: 'The Beechtown Environmental Organization needs you.'},
          ],
          color: solidColor('#e4fde1'),
          font: {
            family: 'Lato',
            letterSpacing: 0.03,
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
          color: solidColor('#94f9ce'),
          font: {
            family: 'League Spartan',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        { 
          type: 'image',
          background: {
            img: {
              src: '/world.svg',
              meta: {
                w: 1,
                h: 1,
              },
              zoom: 1.6,
              y: 0,
            },
          },
          fill: '#94f9ce',
          bleed: { x: 1 },
          aspectRatio: .55,
          sticky: true,
        },
      ]
    },
    footer: {
      bleed: { a: 1 },
      background: solidColor('#e4fde1'),
      elements: [
        {
          type: 'paragraph',
          color: solidColor('#2d1b4d'),
          lines: [
            {type: 'details', text: 'The Beechtown Enfironmental Organization has been'},
            {type: 'details', text: 'protecting the environment for over 40 years. Will you join us?'},
          ],
          font: {
            family: 'Lato',
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