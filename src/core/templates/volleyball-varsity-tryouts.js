import { solidColor } from './'

export default {
  id: 15,
  title: 'Volleyball Varsity Tryouts',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-yellow-volleyball-icons-sports-flyer-MAC3X5T2nN8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
    color: solidColor('#fcd352'),
  },
  decor: {
    t: .3,
    r: .35,
  },
  content: {
    body: {
      h: 'auto',
      alignX: 'left',
      alignY: 'bottom',
      itemsAlignX: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Anouba High School'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'bar',
          h: 5,
          w: 1,
          background: { 
  color: solidColor('#000'),
},
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Volleyball'},
            {type: 'eventName', text: 'Varsity'},
            {type: 'eventName', text: 'Tryouts'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Norwester',
            letterSpacing: 0,
            lineHeight: 1.3,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Join the team and be part of'},
            {type: 'descriptive', text: 'something awesome!'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
        },
        {
          type: 'bar',
          h: 5,
          w: 1,
          background: { 
  color: solidColor('#000'),
},
        },
        {
          type: 'heading',
          lines: [
            
            {type: 'date', text: 'September 20, 2020 From', format: 'MMMM D, YYYY'},
            {type: 'time', text: '10 am - 3 pm at'},
            {type: 'location', text: 'Anouba Court'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0.05,
            lineHeight: 1.6,
            size: 1.0,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Want to know what it takes? Email Coach'},
            {type: 'details', text: "Jennifer at hello@reallygreatsite.com for more"},
            {type: 'details', text: "information on tryouts!"},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Open Sans',
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