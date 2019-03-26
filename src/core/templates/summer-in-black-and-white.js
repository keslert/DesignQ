import { solidColor } from './'

export default {
  id: 93,
  title: 'Summer in Black and White',
  tags: ['event', 'yard-sale'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-monochrome-model-photo-fashion-show-flyer-MAC5vQWghwE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1534534665817-8493579d3fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 1385 },
      zoom: 2,
      y: .35,
      filters: {
        grayscale: 1,
        brightness: 0.6,
      },
    }
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Baks Clothing Company'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            lineHeight: 1.4,
            letterSpacing: .222,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Summer'},
            {type: 'eventName', text: 'In Black'},
            {type: 'eventName', text: 'And White'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Playfair Display',
            letterSpacing: 0,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 900,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Modified classic silhouettes. Timeless color stories.'},
          ],
          color: solidColor('#ffffff'),
          font: {
            size: 1,
            family: 'Glacial Indifference',
            weight: 400,
            style: 'normal',
            lineHeight: 1.4,
          },
        },
      ]
    },
    footer: {
      background: solidColor('#000'),
      bleed: { a: 1 },
      alignX: 'left',
      itemsAlignX: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          color: solidColor('#ffffff'),
          lines: [
            {type: 'descriptive', text: 'Fashion show'},
            {type: 'date', text: 'June 20, 2020', format: 'MMMM D, YYYY'},
            {type: 'location', text: 'Beechtown Auditorium'},
          ],
          font: {
            family: 'Playfair Display',
            weight: 900,
            size: 1,
            style: 'normal',
            transform: 'normal',
            lineHeight: 1.4,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#ffffff'),
          lines: [
            {type: 'details', text: 'A collection inspired by vintage music festival'},
            {type: 'details', text: 'photos, Summer in Black and White will feel'},
            {type: 'details', text: 'nostalgic and modern at the same time.'},
          ],
          font: {
            family: 'Glacial Indifference',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'normal',
            lineHeight: 1.6,
          },
        }
      ]
    }
  }
}