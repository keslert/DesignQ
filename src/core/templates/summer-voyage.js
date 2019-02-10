import { solidColor, unitValue } from '.'

export default {
  title: 'Summer Voyage',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-brown-and-grey-illustrated-icons-summer-camp-flyer-MAC3XzSjncw.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 48,
  py: 48,
  background: solidColor('#363440'),
  content: {
    bleed: { all: true },
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    width: unitValue(100, '%'),
    mb: 1.5,
    flex: 1,
    elements: [
      { 
        type: 'image',
        flex: 1,
        bleed: {top: true, left: true, right: true},
        url: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/images%2Fbackpacking.png?alt=media&token=7d1bd771-6748-409b-a1f3-bf798df29f54',
        filters: [],
        mb: 2,
      },
      {
        type: 'small',
        lines: [
          {type: 'descriptive', text: 'Summer Camp for Kids'},
        ],
        color: solidColor('#ffffff'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.2,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1.5,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Summer Voyage:'},
          {type: 'eventName', text: 'Where to Next?'},
        ],
        color: solidColor('#b6a989'),
        font: {
          family: 'Lilita One',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 0.8,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 0.5,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'descriptive', text: 'Are you ready for the most adventure-filled'},
          {type: 'descriptive', text: 'summer camp?'},
        ],
        color: solidColor('#ffffffcc'),
        font: {
          family: 'Glacial Indifference',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1.1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'heading',
        lines: [
          {type: 'date', text: 'July 15-16, 2020'},
          {type: 'location', text: 'South Winslough Camp Grounds'},
        ],
        color: solidColor('#b6a989'),
        font: {
          family: 'Lilita One',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1.2,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptive', text: 'If exploration and adventure are on the top of your summer bucketlist,'},
          {type: 'descriptive', text: 'the Summer Voyage: Where to Next? is the camp to go to!'},
        ],
        color: solidColor('#ffffffcc'),
        font: {
          family: 'Glacial Indifference',
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