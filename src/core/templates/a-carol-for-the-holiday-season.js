import { solidColor, unitValue } from '.'

export default {
  title: 'A carol for the holiday season',
  tags: ['event', 'flyer'],
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
          {type: 'host', text: 'The Winslow Chapel'},
        ],
        color: solidColor('#454a80'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
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
          {type: 'eventName', text: 'A Carol For'},
          {type: 'eventName', text: 'The Holiday'},
          {type: 'eventName', text: 'Season'},
        ],
        color: solidColor('#f68464'),
        font: {
          family: 'Josefin Slab',
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
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'A special concert by the Winslough\'s'},
          {type: 'descriptiveText', text: 'award-winning choir.'},
        ],
        color: solidColor('#454a80'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
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
          color: '#fff',
        },
        color: solidColor('#454a80'),
        font: {
          family: 'Muli',
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
          family: 'Muli',
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