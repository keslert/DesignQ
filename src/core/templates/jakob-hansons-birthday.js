import { solidColor, unitValue } from '.'

export default {
  title: 'Jakob Hansons Birthday',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-with-monkey-llustration-birthday-flyer-MAC5t3-JpG8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 48,
  py: 48,
  border: {
    all: 20,
    color: '#fff',
  },
  background: solidColor('#fff9ea'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      mb: 0.75,
      elements: [
        {
          type: 'logo',
          size: 1.6,
          url: '/monkey-birthday.png',
          meta: {
            width: 232,
            height: 348,
            colors: [],
            filetype: 'png',
          },
          mb: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'You Are Cordially Invited'},
          ],
          color: solidColor('#66712c'),
          font: {
            family: 'Aleo',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Jakob Hanson\'s'},
            {type: 'eventName', text: '9th Birthday'},
          ],
          color: solidColor('#fbd071'),
          font: {
            family: 'Lilita One',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'time', text: 'Bring your friends and enjoy the night with us!'},
          ],
          color: solidColor('#66712c'),
          font: {
            family: 'Aleo',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bar',
          background: solidColor('#fbd071'),
          height: unitValue(8, 'px'),
          width: unitValue(33, '%'),
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
            color: solidColor('#fbd071'),
          },
          color: solidColor('#fbd071'),
          font: {
            family: 'Lilita One',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: 'Please join the Hanson family in celebrating the special day'},
            {type: 'descriptiveText', text: 'of our beloved, rambunctious little boy! See you there!'},
          ],
          color: solidColor('#66712c'),
          font: {
            family: 'Aleo',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
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