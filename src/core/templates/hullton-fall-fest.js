import { solidColor } from './'

export default {
  id: 8,
  title: 'Hullton Fall Fest',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-yellow-and-orange-leaves-fall-festival-flyer-MAC3ZKCrIds.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    color: '#23374a',
  },
  decor: {
    t: .3,
  },
  content: {
    h: 'auto',
    alignY: 'bottom',
    bleed: { x: 1, b: 0},
    mb: 0,
    body: {
      background: solidColor('#ffffff'),
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Hullton Village Presents'},
          ],
          color: solidColor('#23374a'),
          font: {
            family: 'Aleo',
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
            {type: 'eventName', text: 'The Hullton Fall'},
            {type: 'eventName', text: 'Fest 2020'},
          ],
          color: solidColor('#23374a'),
          font: {
            family: 'Norwester',
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
            {type: 'descriptive', text: 'A fun and exciting festival for the whole family'},
          ],
          color: solidColor('#23374a'),
          font: {
            family: 'Aleo',
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
      background: solidColor('#23374a'),
      elements: [
        {
          type: 'heading',
          color: solidColor('#ecda7d'),
          lines: [
            [
              {type: 'date', text: 'October 21, 2020'},
              {type: 'time', text: '4 pm - 11 pm'},
            ],
            {type: 'price', text: 'Tickets at $5'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#ecda7d'),
          },
          font: {
            family: 'Aleo',
            letterSpacing: 0.15,
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
            {type: 'details', text: 'See you all at the Hullton Village Park for a fun day of food'},
            {type: 'details', text: 'games, shopping and prizes! Bringing of pets is highly'},
            {type: 'details', text: 'encouraged.'},
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
        },
      ]
    }
  }
}