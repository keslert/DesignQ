import { solidColor } from './'

export default {
  id: 60,
  title: 'Fallfields Fall Festival',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-and-red-leaves-fall-festival-flyer-MAC5t4eyqbI.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#fdcf19'),
  border: {
    r: .3,
  },
  content: {
    body: {
      alignX: 'left',
      alignY: 'top',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Come Join the Festival!'},
          ],
          color: solidColor('#db4439'),
          font: {
            family: 'Roboto',
            letterSpacing: 0.12,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: "Fallfield's"},
            {type: 'eventName', text: 'Fall'},
            {type: 'eventName', text: 'Festival'},
          ],
          color: solidColor('#db4439'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0.03,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background:  solidColor('#db4439'),
          h: 10,
          w: .33,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'We have a million reasons to'},
            {type: 'descriptive', text: 'celebrate the new season!'},
          ],
          color: solidColor('#db4439'),
          font: {
            family: 'Roboto',
            letterSpacing: 0.01,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      textAlign: 'left',
      elements: [
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'Oct. 30, 2020', format: 'MMM. D, YYYY'},
            {type: 'time', text: '10 AM - 9 PM'},
            {type: 'location', text: 'Fallfield Public Park'},
          ],
          color: solidColor('#db4439'),
          font: {
            family: 'League Gothic',
            letterSpacing: 0.07,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Enjoy the fall season with great'},
            {type: 'details', text: 'food, drinks and a fresh lineup of'},
            {type: 'details', text: 'performers. Admission is free and'},
            {type: 'details', text: 'everyone\'s invited!'},
          ],
          color: solidColor('#db4439'),
          font: {
            family: 'Roboto',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    }
  }
}