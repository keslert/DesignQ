import { solidColor } from './'

export default {
  id: 14,
  title: 'Quark Summer Camp',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-yellow-tent-summer-camp-flyer-MAC5t7rVvJ4.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08', 
  background: { 
  color: solidColor('#212932'),
},
  decor: {
    b: .4,
  },
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Quark Adventure Club'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'PT Sans',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Join Us for Quark'},
            {type: 'eventName', text: 'Summer Camp 2020'},
          ],
          color: solidColor('#f5d746'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.05,
            lineHeight: 1.4,
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
            {type: 'descriptive', text: 'Ready to spend a fun-filled summer in the woodlands?'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'PT Sans',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bar',
          background: { 
  color: solidColor('#f5d746'),
},
          h: 6,
          w: .25,
        },
        {
          type: 'heading',
          lines: [
            {type: 'call-to-action', text: 'Send us an email at'},
            {type: 'call-to-action', text: 'hello@reallygreatsite.com'},
            {type: 'call-to-action', text: 'to sign up!'},
          ],
          color: solidColor('#f5d746'),
          font: {
            family: 'PT Sans',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Spend all summer learning toasting marshmallows over'},
            {type: 'details', text: 'a fire, swimming in the lake, or watching out for the'},
            {type: 'details', text: 'forest wildlife!'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'PT Sans',
            letterSpacing: 0.09,
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
  }
}