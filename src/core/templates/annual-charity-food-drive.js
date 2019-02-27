import { solidColor } from './'

export default {
  id: 23,
  title: 'Annual Charity Food Drive',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-photo-collage-food-drive-flyer-MAC7mgTLvk0.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
  },
  content: {
    body: {
      background: solidColor('#fffcf2'),
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Beechtown High School'},
          ],
          color: solidColor('#394e6d'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 300,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Annual'},
            {type: 'eventName', text: 'Charity Food'},
            {type: 'eventName', text: 'Drive 2020'},
          ],
          color: solidColor('#394e6d'),
          font: {
            family: 'Sifonn',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'We welcome donations'},
            {type: 'descriptive', text: 'and student volunteers!'},
          ],
          color: solidColor('#394e6d'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
        {
          type: 'bar',
          background: solidColor('#394e6d'),
          h: 5,
          w: .33,
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'December 12-15, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '10:00AM Onwards'},
            {type: 'location', text: 'Room 123'},
          ],
          color: solidColor('#394e6d'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 300,
          },
        },
      ]
    },
    footer: {
      bleed: { x: 1, b: 1 },
      background: solidColor('#fffcf2'),
      elements: [
        {
          type: 'paragraph',
          color: solidColor('#394e6d'),
          lines: [
            {type: 'description', text: "This year's food drive will be done for"},
            {type: 'description', text: "Beechtown's Homeless Foundation."},
            {type: 'description', text: 'We appreciate all the help you can give us.'},
          ],
          font: {
            family: 'Montserrat',
            letterSpacing: 0.03,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
      ]
    }
  }
}