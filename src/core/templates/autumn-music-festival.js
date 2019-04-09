import { basicColor, linearColor } from '../utils/color-utils';

export default {
  id: 90,
  title: 'Autumn Music Festival 2020',
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-fall-festival-event-flyer-MAC7mpRJwkg.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1429198739803-7db875882052?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 1200 },
      filters: {
        brightness: 0.8,
      }
    },
    color: linearColor(0, '#0a5673', '#2fa992'),
    backgroundBlendMode: 'soft-light',
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'bar',
          background: { 
  color: basicColor('#ffffff'),
},
          h: 12,
          w: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Mathika Music Productions'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.12,
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
            {type: 'eventName', text: 'Autumn Music'},
            {type: 'eventName', text: 'Festival 2020'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.12,
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
            {type: 'time', text: 'Enjoy an afternoon of'},
            {type: 'time', text: 'amazing musical performances!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1.0,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
        {
          type: 'heading',
          lines: [
            [
              {type: 'date', text: 'September 23, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: 'Gates Open'},
            ],
            [
              {type: 'time', text: 'at 3pm'},
              {type: 'location', text: 'Beechtown Park'},
            ],
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#ffffff'),
          },
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.12,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
      ]
    },
    footer: {
      alignX: 'left',
      itemsAlignX: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'paragraph',
          color: basicColor('#ffffff'),
          lines: [
            {type: 'details', text: 'Tickets are priced at $20 each. Buy your tickets'},
            {type: 'details', text: 'now at www.reallygreatsites.com or at designated'},
            {type: 'details', text: 'booths at Beechtown Park.'},
          ],
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
      ]
    }
  }
}