import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Annual Sports Festival',
  tags: ['event', 'flyer'],
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-and-white-icons-sports-flyer-MAC3TYnQPGY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  px: 40,
  py: 40,
  border: {
    right: 200,
    bottom: 120,
    color: '#ec6b42',
  },
  background: solidColor('#ec6b42'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'flex-start',
      alignY: 'flex-start',
      textAlign: 'left',
      mb: 1.75,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Mueller Montessori School'},
          ],
          color: solidColor('#000000'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: '30th Annual'},
            {type: 'eventName', text: 'Sports'},
            {type: 'eventName', text: 'Festival'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0,
            lineHeight: 1.2,
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
            {type: 'time', text: 'Theme: Instilling great values through'},
            {type: 'time', text: 'playing sports'},
          ],
          color: solidColor('#000000'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'Sept. 7 to 11, 2020', format: 'MMMM D, YYYY'},
            {type: 'location', text: 'School Covered Court &'},
            {type: 'location', text: 'Open Field'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.1,
            lineHeight: 1.6,
            size: 1.3,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: "The school's most awaited sporting"},
            {type: 'descriptiveText', text: "event is here! Try out different"},
            {type: 'descriptiveText', text: "sports and enjoy friendly matches"},
            {type: 'descriptiveText', text: "in our annual sports fest!"},
          ],
          color: solidColor('#000000'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.3,
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