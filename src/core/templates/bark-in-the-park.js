import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Bark in the Park',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-dog-with-shades-pet-fundraising-flyer-MAC4XeJseVQ.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 1,
  py: 1,
  background: solidColor('#32641f'),
  decor: {
    r: .3,
    background: {
      img: {
        src: 'https://images.unsplash.com/photo-1447768005573-3b54cdf058a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
        w: 421,
        h: 729,
      },
      color: '#400D2A',
      zoom: .8,
      x: 2,
    }
  },
  content: {
    border: {
      y: .02,
      yOffset: .03,
      background: {
        color: '#ffffffaa',
      },
    },
    background: {
      color: '#32641f',
    },
    bleed: {a: 1},
    alignX: 'left',
    alignY: 'center',
    h: 'fill',
    w: 'fill',
    body: {
      alignX: 'left',
      alignY: 'center',
      itemsAlignX: 'left',
      itemsAlignY: 'center',
      textAlign: 'left',
      w: 'fill',
      mb: 1,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Night Owl Pet Center'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Lato',
            letterSpacing: 0.3,
            lineHeight: 1.4,
            size: 1,
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
            family: 'League Gothic',
            letterSpacing: 0.05,
            lineHeight: 1.2,
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
            {type: 'descriptiveText', text: 'A benefit event for the stray dogs of'},
            {type: 'descriptiveText', text: 'Nightowl PPC'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Lato',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'italic',
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
            family: 'Lato',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
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
            family: 'Lato',
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