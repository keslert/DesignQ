import { solidColor } from './'

export default {
  id: 16,
  title: 'Austfam Charity Food Drive',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-charcoal-photo-food-drive-flyer-MAC3ToeVKl4.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1508116916455-2857e44c161e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      zoom: 1,
      y: 1.0,
    }
  },
  content: {
    body: {
      bleed: { a: 1 },
      background: solidColor('#262c2a'),
      alignX: 'center',
      alignY: 'bottom',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Austham Charity'},
            {type: 'eventName', text: 'Food Drive'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.04,
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
            {type: 'descriptive', text: "Let's give a helping hand to the victims"},
            {type: 'descriptive', text: "of Typhoon Ovia."},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.04,
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
            [
              {type: 'date', text: "October 20-25, 2020", format: "MMMM D, YYYY"},
              {type: 'time', text: "9 AM to 7 PM"},
            ],
            {type: 'location', text: "Beechtown Gymnasium"},
          ],
          divider: {
            type: 'blank',
            size: 1,
            color: solidColor('#fff'),
          },
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: "Typhoon Ovia caused great damage to the community of San Clemence."},
            {type: 'descriptive', text: "Hundreds of evacuees are in dire need of food."},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    header: {
      w: 'auto',
      bleed: { r: 1 },
      background: solidColor('#262c2a'),
      pl: 3,
      py: 0.5,
      alignX: 'right',
      textAlign: 'right',
      elements: [
        {
          type: 'small',
          color: solidColor('#fff'),
          lines: [
            {type: 'descriptive', text: 'A Little Goes A'},
            {type: 'descriptive', text: 'Long Way!'},
          ],
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.12,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
      ]
    }
  }
}