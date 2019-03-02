import { solidColor, unitValue } from '.'

export default {
  id: 25,
  title: 'Summer Voyage',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-brown-and-grey-illustrated-icons-summer-camp-flyer-MAC3XzSjncw.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#fef8e9'),
  decor: {
    t: .3,
  },
  content: {
    body: {
      h: 'auto',
      bleed: { a: 1 },
      alignY: 'bottom',
      background: solidColor('#363440'),
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Summer Camp for Kids'},
          ],
          color: solidColor('#fff8e9'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.12,
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
            {type: 'eventName', text: 'Summer Voyage:'},
            {type: 'eventName', text: 'Where to Next?'},
          ],
          color: solidColor('#b7a986'),
          font: {
            family: 'Lilita One',
            letterSpacing: 0.01,
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
            {type: 'descriptive', text: 'Are you ready for the most adventure-filled'},
            {type: 'descriptive', text: 'summer camp?'},
          ],
          color: solidColor('#fff8e9'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.04,
            lineHeight: 1.4,
            size: 1.1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'July 15-16, 2020'},
            {type: 'location', text: 'South Winslough Camp Grounds'},
          ],
          color: solidColor('#b7a986'),
          font: {
            family: 'Lilita One',
            letterSpacing: 0.02,
            lineHeight: 1.4,
            size: 1.2,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'If exploration and adventure are on the top of your summer bucketlist,'},
            {type: 'descriptive', text: 'the Summer Voyage: Where to Next? is the camp to go to!'},
          ],
          color: solidColor('#fff8e9'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
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