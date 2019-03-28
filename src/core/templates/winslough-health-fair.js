import { solidColor } from './'

export default {
  id: 7,
  title: 'Winslough Health Fair 2020',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-vaccine-photo-health-fair-flyer-MAC5uz44Wss.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.pexels.com/photos/1498933/pexels-photo-1498933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
      meta: { w: 1000, h: 1500 },
      filters: {
        brightness: 0.7
      }
    }
  },
  content: {
    body: {
      elements: [
        {
          type: 'icon',
          src: '/heart.svg',
          fill: '#90c8cf',
          background: {
            color: solidColor('#ffffff'),
            borderRadius: 9999,
          },
          size: 1,
          px: 1,
          pt: 1.1,
          pb: 0.9,
          aspectRatio: 1,
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
            {type: 'descriptive', text: 'Winslough Medical Center'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.2,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1.75,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Winslough Health'},
            {type: 'eventName', text: 'Fair 2020'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.07,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Drop by for free flu vaccinations and health screenings.'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.05,
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
  color: solidColor('#90c8cf'),
},
      elements: [
        {
          type: 'heading',
          color: solidColor('#ffffff'),
          lines: [
            [
              {type: 'date', text: 'October 13, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '8-10 AM'},
            ],
            {type: 'location', text: 'The Winslough Gymnasium'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#ffffff'),
          },
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.2,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Winslough Elders Association covers the cost of vaccines for those'},
            {type: 'details', text: 'without insurance. Don\'t miss out on the opportunity!'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.05,
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