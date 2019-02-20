import { solidColor, unitValue } from '.'

export default {
  title: 'Beechtown Lodge Summer Camp',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-and-orange-tent-flyer-summer-camp-flyer-MAC3TSOmKhg.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 60,
  py: 30,
  background: solidColor('#022f2f'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'flex-start',
      textAlign: 'center',
      width: unitValue(100, '%'),
      mb: 1.5,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Explore the Outdoors!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Roboto',
            letterSpacing: 0.1,
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
            {type: 'eventName', text: 'Beechtown Lodge'},
            {type: 'eventName', text: 'Teen Summer Camp'},
          ],
          color: solidColor('#fbad5c'),
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
            {type: 'time', text: 'A place for building friendship and learning life skills'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Roboto',
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
    footer: {
      bleed: { all: true },
      background: solidColor('#fbad5c'),
      width: unitValue(100, '%'),
      textAlign: 'center',
      mb: 2,
      elements: [
        {
          type: 'heading',
          color: solidColor('#022f2f'),
          lines: [
            {type: 'date', text: 'June 21 to 23, 2020', format: "MMMM D, YYYY"},
            {type: 'location', text: 'Beechtown Lodge & National Park'},
          ],
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
          type: 'paragraph',
          color: solidColor('#fff'),
          lines: [
            {type: 'descriptive', text: 'The Beechtown Lodge Summer Camp helps teens aged 14 to'},
            {type: 'descriptive', text: '18 learn life survival skills in a fun, friendly setting.'},
          ],
          font: {
            family: 'Roboto',
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