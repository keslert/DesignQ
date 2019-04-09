import { basicColor, stripedColor } from '../utils/color-utils';

export default {
  id: 89,
  title: 'Witch Wars',
  tags: ['event', 'flyer'],
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-dark-purple-orange-witch's-hat-halloween-flyer-MAC5D3BIrJY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  background: { 
  color: basicColor('#bf6a1a'),
},
  border: {
    a: .05,
    background: { 
  color: basicColor('#3c2e3e'),
},
  },
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Beechtown High School'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'icon',
          src: '/witch-hat.svg',
          fill: '#3c2e3e',
          background: {
            color: stripedColor(135, basicColor('#3c2e3e', .3), 3, basicColor('#3c2e3e', 0), 3),
            borderRadius: 9999,
          },
          aspectRatio: 1,
          pa: 0.01,
          size: 2,
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Witch Wars: A'},
            {type: 'eventName', text: 'Halloween Event'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Creepster',
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
            {type: 'time', text: 'Experience a fun-omenal street'},
            {type: 'time', text: 'party like no other!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
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
  color: basicColor('#3c2e3e'),
},
          h: 10,
          w: .15,
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'October 31, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '5 pm onwards'},
            {type: 'location', text: 'Beechtown Open Field'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.099,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: "There's a battle raging among the creatures of the"},
            {type: 'details', text: 'school. Whose side are you on? Join the party and place'},
            {type: 'details', text: 'your bets!'},
          ],
          color: basicColor('#3c2e3e'),
          font: {
            family: 'Glacial Indifference',
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