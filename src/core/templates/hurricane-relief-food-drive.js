import { solidColor, unitValue } from '.'

export default {
  title: 'Park Away From Hunger',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-blue-lines-pattern-food-drive-flyer-MAC3TYAY1fE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 50,
  py: 50,
  border: {
    top: 80,
    bottom: 80,
    left: 40,
    right: 40,
    url: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-blue-lines-pattern-food-drive-flyer-MAC3TYAY1fE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: {all: true},
      background: solidColor('#28373b'),
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      mb: 2.5,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Great Nature Foundation'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Exo',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Hurricane'},
            {type: 'eventName', text: 'Relief Food'},
            {type: 'eventName', text: 'Drive'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Peace Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.0,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            [
              {type: 'date', text: "Sept. 12-14, 2020", format: "MMM. D, YYYY"},
              {type: 'time', text: "9 AM to 6 PM"},
            ],
            {type: 'location', text: 'Winslough Event Center'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#ffffffcc'),
          },
          color: solidColor('#ffffffcc'),
          font: {
            family: 'Exo',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'heading',
          lines: [
            {type: 'descriptive', text: 'For the benefit of the'},
            {type: 'descriptive', text: 'victims of Hurricane Adam'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Peace Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'Last Sept. 1, Hurricane Adam devastated over 1'},
            {type: 'descriptive', text: 'million homes. Join our relief efforts to help'},
            {type: 'descriptive', text: 'victims get back on their feet.'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'Exo',
            letterSpacing: 0,
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