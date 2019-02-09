import { solidColor, unitValue } from '.'

export default {
  title: 'A carol for the holiday season',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-christmas-birds-festive-holidays-flyer-MAC4XH26kEo.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 48,
  background: {
    url: '/bird-print.png',
  },
  content: {
    bleed: { all: true },
    background: solidColor('#fcfdf5'),
    alignX: 'left',
    alignY: 'center',
    textAlign: 'left',
    w: .82,
    mb: 2,
    pr: 2,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'The Winslough Chapel'},
        ],
        color: solidColor('#454a80'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.35,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
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
          weight: 400,
        },
        mb: 0.5,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'A special concert by the Winslough\'s'},
          {type: 'descriptiveText', text: 'award-winning choir.'},
        ],
        color: solidColor('#454a80'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.3,
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
            {type: 'date', text: 'December 23, 2020', format: 'MMMM D, YYYY'},
            {type: 'descriptiveText', text: 'Starts At'},
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
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'Make this holiday season the best one yet. Watch as'},
          {type: 'descriptiveText', text: "the Winslough Songbirds perform the best"},
          {type: 'descriptiveText', text: "Christmas carols"},
        ],
        color: solidColor('#454a80'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
}