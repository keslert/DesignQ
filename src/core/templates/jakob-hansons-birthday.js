import { basicColor } from '../utils/color-utils';

export default {
  id: 38,
  title: 'Jakob Hansons Birthday',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-with-monkey-llustration-birthday-flyer-MAC5t3-JpG8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  border: {
    a: .05,
    background: { 
  color: basicColor('#ffffff'),
},
  },
  background: { 
  color: basicColor('#fff9ea'),
},
  content: {
    body: {
      elements: [
        {
          type: 'icon',
          size: 1.6,
          src: '/monkey-birthday.png',
          meta: {
            width: 232,
            height: 348,
            colors: [],
            filetype: 'png',
          },
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'You Are Cordially Invited'},
          ],
          color: basicColor('#66712c'),
          font: {
            family: 'Aleo',
            letterSpacing: 0.13,
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
            {type: 'eventName', text: 'Jakob Hanson\'s'},
            {type: 'eventName', text: '9th Birthday'},
          ],
          color: basicColor('#fbd071'),
          font: {
            family: 'Lilita One',
            letterSpacing: 0.03,
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
            {type: 'time', text: 'Bring your friends and enjoy the night with us!'},
          ],
          color: basicColor('#66712c'),
          font: {
            family: 'Aleo',
            letterSpacing: 0.04,
            lineHeight: 1.4,
            size: 1,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: { 
  color: basicColor('#fbd071'),
},
          h: 8,
          w: .33,
        },
        {
          type: 'heading',
          lines: [
            [
              {type: 'date', text: 'June 25, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '6pm onwards'},
            ],
            {type: 'location', text: '123 Anywhere St.'},
          ],
          divider: {
            type: 'dot',
            size: 1,
            color: basicColor('#fbd071'),
          },
          color: basicColor('#fbd071'),
          font: {
            family: 'Lilita One',
            letterSpacing: 0.05,
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
            {type: 'details', text: 'Please join the Hanson family in celebrating the special day'},
            {type: 'details', text: 'of our beloved, rambunctious little boy! See you there!'},
          ],
          color: basicColor('#66712c'),
          font: {
            family: 'Aleo',
            letterSpacing: 0.04,
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