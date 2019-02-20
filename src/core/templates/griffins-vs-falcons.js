import { solidColor, unitValue } from '.'

export default {
  title: 'WE Griffins vs BU Falcons',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-and-black-football-party-sports-flyer-MAC3XxQFTlU.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 50,
  background: {
    url: 'https://images.unsplash.com/photo-1538358755974-f350d26af7bd?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1200&q=60',
    zoom: 3,
    x: 0.3,
    y: 0.7,
    color: '#404040',
    backgroundBlendMode: 'multiply',
    filters: {
      grayscale: 0.4,
    },
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { top: true, left: true, right: true },
      alignX: 'flex-start',
      alignY: 'flex-start',
      textAlign: 'left',
      w: .75,
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'WE Griffins vs'},
            {type: 'eventName', text: 'BU Falcons'},
          ],
          color: solidColor('#f98e25'),
          font: {
            family: 'Bebas Neue',
            letterSpacing: 0.05,
            lineHeight: 1.2,
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
            {type: 'descriptiveText', text: 'A viewing party organized by'},
            {type: 'host', text: 'the Silton Football Circle'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Arvo',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.6,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    header: {
      bleed: {all: true},
      width: unitValue(100, '%'),
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          color: solidColor('#fff'),
          lines: [
            {type: 'host', text: 'Get Ready for Game Day!'},
          ],
          font: {
            family: 'Arvo',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 0.1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
      ]
    },
    footer: {
      bleed: {all: true},
      w: .75,
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'March 18, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '5:00 PM to 9:00 PM'},
            {type: 'location', text: 'The Curtain Sports Bar'},
          ],
          background: solidColor('#f98e25'),
          color: solidColor('#fff'),
          font: {
            family: 'Arvo',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
          bleed: {left: true},
          width: unitValue(100, '%'),
          mb: 2,
          py: 1.5,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: 'Get your tickets now! For other reservations and other'},
            {type: 'descriptiveText', text: 'ticket-related inquiries, visit www.reallygreatsite.com.'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Arvo',
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
    }
  }
}