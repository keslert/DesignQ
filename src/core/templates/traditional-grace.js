import { striped, solidColor, unitValue } from '.'

export default {
  title: 'Traditional Grace',
  px: 36,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1533677535047-ebf597e41eef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      textAlign: 'left',
      alignY: 'flex-end',
      alignX: 'left',
      bleed: { all: true },
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'For Sale'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
          mb: 0.75,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Traditional'},
            {type: 'eventName', text: 'Grace'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Roboto Condensed',
            weight: 700,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
          mb: 1,
        },
        {
          type: 'bar',
          background: { 
  color: solidColor('#ffffff'),
},
          width: unitValue(60, 'px'),
          height: unitValue(5, 'px'),
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'An offering unmatched in quality or setting, this'},
            {type: 'descriptive', text: 'lovely cottage offers a life of absolute luxery and'},
            {type: 'descriptive', text: 'convenience. A beautiful home for those who wish'},
            {type: 'descriptive', text: 'for the quiet and quaint.'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Muli',
            weight: 400,
            size: 1,
            style: 'normal',
            lineHeight: 1.4,
          },
          mb: 1,
        },
      ]
    },
  }
}