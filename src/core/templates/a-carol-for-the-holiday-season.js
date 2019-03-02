import { solidColor, striped } from './'

export default {
  id: 49,
  title: 'A carol for the holiday season',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-christmas-birds-festive-holidays-flyer-MAC4XH26kEo.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.pexels.com/photos/691710/pexels-photo-691710.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    },
    color: striped(135, '#f68464', 80, '#454a80', 40),
    backgroundBlendMode: 'overlay',
  },
  content: {
    h: 'auto',
    w: 'auto',
    alignX: 'left',
    bleed: { l: 1 },
    background: solidColor('#fcfdf5'),
    body: {
      alignX: 'left',
      alignY: 'center',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'The Winslough Chapel'},
          ],
          color: solidColor('#454a80'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.02,
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
            {type: 'eventName', text: 'A Carol For'},
            {type: 'eventName', text: 'The Holiday'},
            {type: 'eventName', text: 'Season'},
          ],
          color: solidColor('#f68464'),
          font: {
            family: 'Aleo',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 300,
          },
          mb: 0.5,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'A special concert by the Winslough\'s'},
            {type: 'descriptive', text: 'award-winning choir.'},
          ],
          color: solidColor('#454a80'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.02,
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
              {type: 'date', text: 'December 23, 2020', format: 'MMMM D, YYYY'},
              {type: 'descriptive', text: 'Starts At'},
            ],
            [
              {type: 'time', text: '6pm'},
              {type: 'location', text: '123 Anywhere St.'},
            ]
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#454a80'),
          },
          color: solidColor('#454a80'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.02,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'Make this holiday season the best one yet. Watch as'},
            {type: 'descriptive', text: "the Winslough Songbirds perform the best"},
            {type: 'descriptive', text: "Christmas carols"},
          ],
          color: solidColor('#454a80'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.02,
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