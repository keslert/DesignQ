import { solidColor } from './'

export default {
  id: 34,
  title: 'El Dorado Bake Sale',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-illustrated-bake-sale-flyer-MAC4C3eiDho.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#c8deb7'),
  decor: {
    t: .3,
  },
  content: {
    body: {
      bleed: { a: 1 },
      background: solidColor('#fff4e9'),
      alignY: 'center',
      elements: [
        {
          type: 'icon',
          src: '/shop.svg',
          fill: '#fff4e9',
          background: {
            color: '#c3996f',
            borderRadius: 9999,
          },
          overlap: 0.5,
          size: 1,
          aspectRatio: 1,
          pa: 1,
          // py: 1,
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
            {type: 'descriptive', text: 'Bread for a Cause'},
          ],
          color: solidColor('#c3996f'),
          font: {
            family: 'Cooper Hewitt',
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
            {type: 'eventName', text: 'El Dorado Bake Sale'},
            {type: 'eventName', text: 'Bazaar'},
          ],
          color: solidColor('#c3996f'),
          font: {
            family: 'Norwester',
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
            {type: 'descriptive', text: 'Baked goodies from more than 10 concessionaires'},
          ],
          color: solidColor('#c3996f'),
          font: {
            family: 'Cooper Hewitt',
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
          color: solidColor('#c3996f'),
          lines: [
            {type: 'descriptive', text: 'See you there on July 8 at El Dorado Field', meta: ['date', 'location']},
          ],
          font: {
            family: 'Cooper Hewitt',
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
          color: solidColor('#c3996f'),
          lines: [
            {type: 'descriptive', text: 'All proceeds obtained from the Bazaar will be donated to El'},
            {type: 'descriptive', text: 'Dorado Public Academy for their upcoming scholarship program.'},
          ],
          font: {
            family: 'Cooper Hewitt',
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
  }
}