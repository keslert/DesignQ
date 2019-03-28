import { solidColor } from './'

export default {
  id: 40,
  title: 'Annual All-White Charity Party',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-white-and-charcoal-all-white-party-flyer-MAC7mt5CsZA.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: solidColor('#ffffff'),
},
  content: {
    body: {
      elements: [
        {
          type: 'icon',
          size: 1,
          src: '/yacht.svg',
          fill: '#373737',
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
        },
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Bijou Solutions, Inc.'},
          ],
          color: solidColor('#373737'),
          font: {
            family: 'Aileron',
            letterSpacing: 0.15,
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
            {type: 'eventName', text: 'Annual All-White'},
            {type: 'eventName', text: 'Charity Party'},
          ],
          color: solidColor('#373737'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.01,
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
            {type: 'descriptive', text: 'Break out your best all-white outfit and steal the show!'},
          ],
          color: solidColor('#373737'),
          font: {
            family: 'Aileron',
            letterSpacing: 0.03,
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
      bleed: { a: 1 },
      background: { 
        color: solidColor('#373737'),
      },
      elements: [
        {
          type: 'heading',
          color: solidColor('#ffffff'),
          lines: [
            [
              {type: 'date', text: 'October 12, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '6:00pm'},
            ],
            {type: 'location', text: 'San Dias Party Place'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#ffffff'),
          },
          font: {
            family: 'Aileron',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#ffffff'),
          lines: [
            {type: 'details', text: 'This year, all proceeds from this event will go to the George'},
            {type: 'details', text: 'Hewes Foundation. Come and party for a good cause!'},
          ],
          font: {
            family: 'Aileron',
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