import { solidColor, unitValue } from '.'

export default {
  title: 'Park Away From Hunger',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-beige-photo-food-drive-flyer-MAC4DTDfljc.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 50,
  py: 50,
  background: {
    url: 'https://images.unsplash.com/photo-1506368083636-6defb67639a7?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: {},
      background: solidColor('#f1e4c6'),
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      mb: 1.5,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Quark Community Center'},
          ],
          color: solidColor('#442d34'),
          font: {
            family: 'Glacial Indifference',
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
            {type: 'eventName', text: 'Park Away'},
            {type: 'eventName', text: 'From'},
            {type: 'eventName', text: 'Hunger'},
            {type: 'eventName', text: 'Food Drive'},
          ],
          color: solidColor('#442d34'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: "The county's best food trucks gather for"},
            {type: 'descriptive', text: 'a good cause'},
          ],
          color: solidColor('#442d34'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'October 12-20, 2020', format: 'MMM D, YYYY'},
            {type: 'time', text: '2:00PM-8:00PM'},
            {type: 'location', text: '123 Anywhere Street'},
          ],
          color: solidColor('#442d34'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'A gathering of best-known, local food trucks to'},
            {type: 'descriptive', text: 'raise money and food supplies for the homeless'},
            {type: 'descriptive', text: 'victims of the recent tornado.'},
          ],
          color: solidColor('#442d34'),
          font: {
            family: 'Glacial Indifference',
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