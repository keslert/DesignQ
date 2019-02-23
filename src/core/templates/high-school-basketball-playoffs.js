import { solidColor, unitValue } from '.'

export default {
  title: 'High School Basketball Playoffs',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: '',
    },
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'bottom',
      itemsAlignX: 'left',
      itemsAlignY: 'bottom',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Winslough Academy'},
          ],
          color: solidColor('#fcbf2f'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'High School'},
            {type: 'eventName', text: 'Basketball'},
            {type: 'eventName', text: 'Playoffs'},
          ],
          color: solidColor('#fcbf2f'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    footer: {
      bleed: { x: 1, b: 1 },
      background: solidColor('#fcbf2f'),
      textAlign: 'left',
      elements: [
        {
          type: 'bridge',
          color: solidColor('#000000'),
          lines: [
            {type: 'descriptive', text: 'Basketball games in celebration of'},
            {type: 'descriptive', text: 'intramurals week'},
          ],
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'heading',
          color: solidColor('#000000'),
          lines: [
            [
              {type: 'date', text: 'Sept. 6, 2020'},
              {type: 'time', text: '8 am to 2 pm'},
            ],
            {type: 'location', text: 'Winslough Academy Gymnasium'},
          ],
          divider: {
            type: 'bar',
            size: 1,
            color: solidColor('#000000'),
          },
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#000000'),
          lines: [
            {type: 'descriptive', text: 'Show support for your year-level teams! Get in the'},
            {type: 'descriptive', text: 'game and come to the gymnasium to cheer the players'},
            {type: 'descriptive', text: 'to victory!'},
          ],
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
      ]
    }
  }
}