import { solidColor, unitValue } from '.'

export default {
  title: 'Bark in the Park',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  background: {
    url: 'https://images.unsplash.com/photo-1447768005573-3b54cdf058a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: '#32641f',
    zoom: .73,
    x: 1.7,
  },
  content: {
    bleed: { all: true },
    background: solidColor('#32641f'),
    alignX: 'left',
    alignY: 'center',
    textAlign: 'left',
    pr: 2,
    w: .7,
    flex: 1,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'host', text: 'Night Owl Pet Center'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
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
          {type: 'eventName', text: 'Bark In'},
          {type: 'eventName', text: 'The Park'},
          {type: 'eventName', text: 'Fundraiser'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0,
          lineHeight: 1.2,
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
          {type: 'descriptiveText', text: 'A benefit event for the stray dogs of'},
          {type: 'descriptiveText', text: 'Nightowl PPC'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'heading',
        lines: [
          {type: 'date', text: 'July 17, 2020', format: 'MMMM D, YYYY'},
          {type: 'time', text: '8 am to 4 pm'},
          {type: 'location', text: '123 Anywhere St., Any City'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: 'Bring your dog and enjoy the day\'s festivities!'},
          {type: 'descriptiveText', text: 'We\'ll be having loads of fun activities and'},
          {type: 'descriptiveText', text: 'awesome games for all attendees.'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
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