import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Christmas Under the Stars',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-gold-christmas-party-flyer-MAC5DgISwgk.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 50,
  py: 50,
  border: {
    bottom: 20,
    color: striped(135, "#303030", 16, "#d99b47", 16),
  },
  background: solidColor('#303030'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'flex-end',
      textAlign: 'center',
      width: unitValue(100, '%'),
      mb: 1.5,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptiveText', text: 'A Holiday Celebration'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Lato',
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
            {type: 'eventName', text: 'Christmas Under'},
            {type: 'eventName', text: 'the Stars'},
          ],
          color: solidColor('#d99b47'),
          font: {
            family: 'Grand Hotel',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.65,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptiveText', text: 'Join us for a holiday feast with'},
            {type: 'descriptiveText', text: 'friends and family!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Lato',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'December 22nd', format: 'MMMM DDD'},
            {type: 'time', text: '6:00 in the evening'},
            {type: 'location', text: 'At the Wine Canopy'},
          ],
          color: solidColor('#d99b47'),
          font: {
            family: 'Lato',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: 'Food and beverages catered by the Beechtown Culinary Hall.'},
            {type: 'descriptiveText', text: 'The event is open to all, so feel free to bring anyone you want!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Lato',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.5,
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