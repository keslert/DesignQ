import { solidColor, unitValue } from '.'

export default {
  title: 'Quark Summer Camp',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-yellow-tent-summer-camp-flyer-MAC5t7rVvJ4.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08', 
  px: 50,
  py: 50,
  background: solidColor('#212932'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'flex-start',
      textAlign: 'center',
      width: unitValue(100, '%'),
      flex: 1,
      mb: 1.5,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Quark Adventure Club'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'PT Sans',
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
            {type: 'eventName', text: 'Join Us for Quark'},
            {type: 'eventName', text: 'Summer Camp 2020'},
          ],
          color: solidColor('#f5d746'),
          font: {
            family: 'Norwester',
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
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Ready to spend a fun-filled summer in the woodlands?'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'PT Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bar',
          background: solidColor('#f5d746'),
          height: unitValue(6, 'px'),
          width: unitValue(33, '%'),
        },
        {
          type: 'heading',
          lines: [
            {type: 'call-to-action', text: 'Send us an email at'},
            {type: 'call-to-action', text: 'hello@reallygreatsite.com'},
            {type: 'call-to-action', text: 'to sign up!'},
          ],
          color: solidColor('#f5d746'),
          font: {
            family: 'PT Sans',
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
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'Spend all summer learning toasting marshmallows over'},
            {type: 'descriptive', text: 'a fire, swimming in the lake, or watching out for the'},
            {type: 'descriptive', text: 'forest wildlife!'},
          ],
          color: solidColor('#ffffffcc'),
          font: {
            family: 'PT Sans',
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