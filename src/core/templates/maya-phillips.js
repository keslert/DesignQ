import { basicColor } from '../utils/color-utils';

export default {
  id: 82,
  title: 'Maya Phillips',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-colorful-confetti-background-birthday-celebration-event-flyer-MAC7mrsHwDA.jpg?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-colorful-confetti-background-birthday-celebration-event-flyer-MAC7mrsHwDA.jpg?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
      meta: { w: 393, h: 550 },
    }
  },
  content: {
    background: { 
      color: basicColor('#ffffff'),
    },
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Celebrate With Us!'},
          ],
          color: basicColor('#000000'),
          font: {
            family: 'Montserrat',
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
            {type: 'eventName', text: 'Maya Phillips'},
            {type: 'eventName', text: 'Is Twenty-One!'},
          ],
          color: basicColor('#000000'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.08,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: "We're having a party and"},
            {type: 'descriptive', text: 'we hope you can join us!'},
          ],
          color: basicColor('#000000'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
        {
          type: 'heading',
          lines: [
            [
              {type: 'date', text: 'May 19, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '7:00 pm'},
            ],
            {type: 'location', text: 'The Union Club and Bar'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#ffffff'),
          },
          color: basicColor('#ffffff'),
          background: { 
            color: basicColor('#000000'),
          },
          w: 'auto',
          py: 1.25,
          font: {
            family: 'Montserrat',
            letterSpacing: 0.12,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: "This is a special birthday, so let's party all night!"},
            {type: 'descriptive', text: "Please come in black or pink."},
            {type: 'contact', text: 'Call Adora at 123-456-7890 to confirm.'},
          ],
          color: basicColor('#000000'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 300,
          },
        },
      ]
    },
  }
}