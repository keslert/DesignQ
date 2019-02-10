import { solidColor, unitValue } from '.'

export default {
  title: 'Volleyball Varsity Tryouts',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-yellow-volleyball-icons-sports-flyer-MAC3X5T2nN8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 36,
  border: {
    top: 200,
    right: 200,
    color: '#fcd352',
  },
  background: {
    color: '#fcd352',
  },
  content: {
    bleed: { all: true },
    alignX: 'flex-start',
    alignY: 'flex-end',
    textAlign: 'left',
    width: unitValue(100, '%'),
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Anouba High School'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Open Sans',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'bar',
        height: unitValue(5, 'px'),
        width: unitValue(100, '%'),
        background: solidColor('#000'),
        mb: 1.5,
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
          size: 0.9,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'Join the team and be part of'},
          {type: 'descriptiveText', text: 'something awesome!'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Open Sans',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'bar',
        height: unitValue(5, 'px'),
        width: unitValue(100, '%'),
        background: solidColor('#000'),
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
          letterSpacing: 0.1,
          lineHeight: 1.6,
          size: 1.0,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'Want to know what it takes? Email Coach'},
          {type: 'descriptiveText', text: "Jennifer at hello@reallygreatsite.com for more"},
          {type: 'descriptiveText', text: "information on tryouts!"},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Open Sans',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
}