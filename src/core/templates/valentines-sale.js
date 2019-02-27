import { solidColor, unitValue, splitColor } from '.'

export default {
  title: 'Valentine\'s Sale',
  px: 72,
  py: 48,
  background: {
    color: splitColor(180, '#fef6f0', '#ff8c8c'),
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      width: unitValue(100, '%'),
      // flex: 1,
      alignX: 'left',
      alignY: 'center',
      bleed: { all: true },
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Valentine\'s Sale'}
          ],
          color: solidColor('#fef6f0'),
          font: {
            transform: 'uppercase',
            size: 1,
            family: 'Muli',
            weight: 400,
            style: 'normal',
            lineHeight: 1,
            letterSpacing: .1,
          },
          mb: 1,
        },
        { 
          type: 'image',
          url: 'https://images.unsplash.com/photo-1505249961684-d696cc2bb301?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
          aspectRatio: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Up to 70% Off'},
          ],
          color: solidColor('#000'),
          font: {
            fitToWidth: true,
            size: 1,
            family: 'Muli',
            weight: 700,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1,
            letterSpacing: 0.1,
          },
          marginBottom: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'date', text: '02.14.2018', format: 'MM.DD.YYYY'},
          ],
          color: solidColor('#ff8c8c'),
          font: {
            transform: 'uppercase',
            size: 1.5,
            family: 'Muli',
            weight: 400,
            style: 'normal',
            lineHeight: 1,
            letterSpacing: .3,
          },
        },
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'True Chic Apparel'},
          ],
          color: solidColor('#fff'),
          background: solidColor('#ff8c8c'),
          font: {
            transform: 'uppercase',
            size: 1.4,
            family: 'Muli',
            weight: 400,
            style: 'normal',
            lineHeight: 1,
          },
          px: 2,
        },
      ]
    }
  }
}