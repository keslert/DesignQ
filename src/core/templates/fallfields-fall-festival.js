import { solidColor, unitValue } from '.'

export default {
  title: 'Fallfields Fall Festival',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-and-red-leaves-fall-festival-flyer-MAC5t4eyqbI.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 36,
  py: 36,
  border: {
    right: 210,
    url: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-and-red-leaves-fall-festival-flyer-MAC5t4eyqbI.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
    zoom: 1,
    x: 1,
  },
  background: {
    color: '#fdcf19',
  },
  content: {
    bleed: { top: true, left: true, right: true },
    alignX: 'flex-start',
    alignY: 'flex-start',
    textAlign: 'left',
    width: unitValue(100, '%'),
    mb: 1,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: 'Come Join the Festival!'},
        ],
        color: solidColor('#db4439'),
        font: {
          family: 'Roboto',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.4,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 2,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: "Fallfield's"},
          {type: 'eventName', text: 'Fall'},
          {type: 'eventName', text: 'Festival'},
        ],
        color: solidColor('#db4439'),
        font: {
          family: 'League Gothic',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 0.8,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bar',
        background:  solidColor('#db4439'),
        height: unitValue(10, 'px'),
        width: unitValue(50, '%'),
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptiveText', text: 'We have a million reasons to'},
          {type: 'descriptiveText', text: 'celebrate the new season!'},
        ],
        color: solidColor('#db4439'),
        font: {
          family: 'Roboto',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.4,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  footer: {
    bleed: {all: true},
    width: unitValue(100, '%'),
    textAlign: 'left',
    mb: 1.25,
    elements: [
      {
        type: 'heading',
        lines: [
          {type: 'date', text: 'Oct. 30, 2020', format: 'MMM. D, YYYY'},
          {type: 'time', text: '10 AM - 9 PM'},
          {type: 'location', text: 'Fallfield Public Park'},
        ],
        color: solidColor('#db4439'),
        font: {
          family: 'League Gothic',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.7,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        bleed: {left: true},
        width: unitValue(100, '%'),
        mb: 2,
        py: 1.5,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptive', text: 'Enjoy the fall season with great'},
          {type: 'descriptive', text: 'food, drinks and a fresh lineup of'},
          {type: 'descriptive', text: 'performers. Admission is free and'},
          {type: 'descriptive', text: 'everyone\'s invited!'},
        ],
        color: solidColor('#db4439'),
        font: {
          family: 'Roboto',
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
  }
}