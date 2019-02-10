import { solidColor, unitValue } from '.'

export default {
  title: 'Annual Charity Food Drive',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-photo-collage-food-drive-flyer-MAC7mgTLvk0.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 50,
  py: 50,
  background: {
    url: 'https://images.unsplash.com/photo-1423483641154-5411ec9c0ddf?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  },
  content: {
    // bleed: { all: true },
    background: solidColor('#fffcf2'),
    alignX: 'center',
    alignY: 'center',
    textAlign: 'center',
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Beechtown High School'},
        ],
        color: solidColor('#394e6d'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1.5,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Annual'},
          {type: 'eventName', text: 'Charity Food'},
          {type: 'eventName', text: 'Drive 2020'},
        ],
        color: solidColor('#394e6d'),
        font: {
          family: 'League Spartan',
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
          {type: 'descriptive', text: 'We welcome donations'},
          {type: 'descriptive', text: 'and student volunteers!'},
        ],
        color: solidColor('#394e6d'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'bar',
        background: solidColor('#394e6d'),
        height: unitValue(5, 'px'),
        width: unitValue(33, '%'),
      },
      {
        type: 'heading',
        lines: [
          {type: 'date', text: 'December 12-15, 2020', format: 'MMMM D, YYYY'},
          {type: 'time', text: '10:00AM Onwards'},
          {type: 'location', text: 'Room 123'},
        ],
        color: solidColor('#394e6d'),
        font: {
          family: 'Montserrat',
          letterSpacing: 0.1,
          lineHeight: 1.4,
          size: 0.5,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
    ]
  },
  footer: {
    bleed: { all: true },
    background: solidColor('#fffcf2'),
    width: unitValue(100, '%'),
    textAlign: 'center',
    elements: [
      {
        type: 'paragraph',
        color: solidColor('#394e6d'),
        lines: [
          {type: 'description', text: "This year's food drive will be done for"},
          {type: 'description', text: "Beechtown's Homeless Foundation."},
          {type: 'description', text: 'We appreciate all the help you can give us.'},
        ],
        font: {
          family: 'Montserrat',
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