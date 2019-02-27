import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Witch Wars',
  tags: ['event', 'flyer'],
  inspiration: "https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-dark-purple-orange-witch's-hat-halloween-flyer-MAC5D3BIrJY.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08",
  background: solidColor('#bf6a1a'),
  border: {
    a: .05,
    background: solidColor('#3c2e3e'),
  },
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Beechtown High School'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'logo',
          url: '/witch-hat.svg',
          fill: '#3c2e3e',
          color: striped(135, '#3c2e3e44', 2, 'transparent', 2),
          size: 2,
          aspectRatio: 1,
          borderRadius: unitValue(50, '%'),
          px: 0.01,
          py: 0.01,
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
          color: solidColor('#ffffff'),
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
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'bar',
          background: solidColor('#3c2e3e'),
          h: 10,
          w: .25,
        },
        {
          type: 'heading',
          lines: [
            {type: 'date', text: 'October 31, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '5 pm onwards'},
            {type: 'location', text: 'Beechtown Open Field'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.3,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: "There's a battle raging among the creatures of the"},
            {type: 'descriptive', text: 'school. Whose side are you on? Join the party and place'},
            {type: 'descriptive', text: 'your bets!'},
          ],
          color: solidColor('#3c2e3e'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
  }
}