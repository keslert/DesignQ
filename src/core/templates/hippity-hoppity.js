import { solidColor, unitValue } from '.'

export default {
  title: '',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  background: { 
  color: solidColor('#e54049'),
},
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      background: { 
  color: solidColor('#e54049'),
},
      alignX: 'center',
      alignY: 'center',
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Annual'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: '',
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
          type: 'small',
          lines: [
            {type: 'time', text: '10AM'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Muli',
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
      bleed: { all: true },
      background: { 
  color: solidColor('#6b6f39'),
},
      width: unitValue(100, '%'),
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          color: solidColor('#ffffff'),
          lines: [
            {type: 'location', text: '123 Anywhere St.'},
          ],
          font: {
            family: 'Muli',
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
    }
  }
}