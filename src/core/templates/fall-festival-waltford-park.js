import { solidColor } from './'

export default {
  id: 45,
  title: 'Fall Festival Waltford Park',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-orange-leaves-fall-festival-flyer-MAC3X3Fhbtc.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#222c34'),
  decor: {
    y: .2,
    x: .1,
  },
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: "Let's Enjoy This Season!"},
          ],
          color: solidColor('#fdefc4'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.12,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Fall Festival 2020'},
            {type: 'eventName', text: 'at Waltford Park'},
          ],
          color: solidColor('#ee5830'),
          font: {
            family: 'Playlist',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: "Enjoy the season of fall while giving back"},
            {type: 'descriptive', text: 'to charity.'},
          ],
          color: solidColor('#fdefc4'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'September 24, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '9 AM to 6 PM'},
            {type: 'location', text: 'Beechtown Park'},
          ],
          color: solidColor('#ee5830'),
          w: 'fill',
          textAlign: 'center',
          font: {
            family: 'Raleway',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: "This year, Beechtown Park will be donating all the proceeds"},
            {type: 'details', text: "of the fall festival to our friends at Winslough Charity."},
          ],
          color: solidColor('#fdefc4'),
          font: {
            family: 'Raleway',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}