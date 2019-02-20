import { solidColor, unitValue } from '.'

export default {
  title: 'Austfam Charity Food Drive',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-charcoal-photo-food-drive-flyer-MAC3ToeVKl4.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 60,
  background: {
    url: 'https://images.unsplash.com/photo-1508116916455-2857e44c161e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    zoom: 1,
    y: 6.0,
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      background: solidColor('#262c2a'),
      alignX: 'center',
      alignY: 'flex-end',
      textAlign: 'center',
      width: unitValue(100, '%'),
      mb: 1.25,
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
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptiveText', text: "Let's give a helping hand to the victims"},
            {type: 'descriptiveText', text: "of Typhoon Ovia."},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
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
            size: 0.7,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: "Typhoon Ovia caused great damage to the community of San Clemence."},
            {type: 'descriptiveText', text: "Hundreds of evacuees are in dire need of food."},
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
          mb: 1,
        },
      ]
    },
    header: {
      bleed: { right: true },
      background: solidColor('#262c2a'),
      pl: 3,
      py: 0.5,
      alignX: 'flex-end',
      textAlign: 'right',
      elements: [
        {
          type: 'small',
          color: solidColor('#fff'),
          lines: [
            {type: 'descriptiveText', text: 'A Little Goes A'},
            {type: 'descriptiveText', text: 'Long Way!'},
          ],
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.15,
            lineHeight: 1.6,
            size: 0,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
      ]
    }
  }
}