import { solidColor } from './'

export default {
  id: 41,
  title: 'Allergen-Free Donut Sale',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-white-with-donuts-bake-sale-flyer-MAC4CsQClwE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#ffffff'),
  content: {
    h: 'auto',
    alignY: 'bottom',
    body: {
      elements: [
        { 
          type: 'image',
          flex: 1,
          bleed: {top: true, left: true, right: true},
          url: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          zoom: 1,
          y: 0.75,
          filters: {
            "brightness": 1.2
          },
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Indulge the Safe Way'},
          ],
          color: solidColor('#d45e8f'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 0.4,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: "Cia's Allergen-Free"},
            {type: 'eventName', text: 'Donut Sale'},
          ],
          color: solidColor('#d45e8f'),
          font: {
            family: 'Oswald',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'bridge',
          lines: [
            [
              {type: 'date', text: 'August 8-10'},
              {type: 'time', text: '1-6PM'},
            ],
            {type: 'location', text: 'Beechtown Community Park'},

          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#d45e8f'),
          },
          color: solidColor('#d45e8f'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.4,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: solidColor('#d45e8f'),
          h: 6,
          w: .33,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'time', text: "Now's your chance to get a batch of these special homemade donuts"},
            {type: 'time', text: "while they're still hot and fresh from the oven!"},
          ],
          color: solidColor('#d45e8f'),
          font: {
            family: 'Kollektif',
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