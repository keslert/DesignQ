import { basicColor } from '../utils/color-utils';

export default {
  id: 44,
  title: 'Basketball Tournament',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-orange-basketball-fundraiser-flyer-MAC5Lp6K9A8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#101010'),
},
  decor: {
    a: .1,
  },
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Let the games begin!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0.2,
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
            {type: 'eventName', text: '2020'},
            {type: 'eventName', text: 'Basketball'},
            {type: 'eventName', text: 'Tournament'},
          ],
          color: basicColor('#db6936'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'A fundraising game for the'},
            {type: 'descriptive', text: 'Beechtown Foundation'},
          ],
          color: basicColor('#ffffff'),
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
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'March 25-30, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: 'Starts at 1 P.M.'},
            {type: 'location', text: 'Forestov Court'},
          ],
          color: basicColor('#db6936'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0.08,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: "Watch as some of the country's best basketball"},
            {type: 'details', text: 'teams vie for the championship!'},
            {type: 'details', text: 'Tickets are now on sale at reallygreatsite.com!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}