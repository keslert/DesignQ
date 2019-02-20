import { solidColor, unitValue, striped } from '.'

export default {
  title: 'Bark in the Park',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-dog-with-shades-pet-fundraising-flyer-MAC4XeJseVQ.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 1,
  py: 1,
  background: solidColor('#140A25'),
  border: {
    a: .005,
    aOffset: .015,
    background: {
      color: '#fff',
    }
  },
  decor: {
    r: .2,
    background: {
      // url: 'https://images.unsplash.com/photo-1447768005573-3b54cdf058a2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      url: '#',
      color: '#400D2A',
      zoom: .8,
      x: 2,
    }
  },
  content: {
    background: solidColor('#5A142A'),
    // border: {
    //   t: .005,
    //   b: .005,
    //   background: {
    //     color: striped(45, '#6e9460', 20, 'transparent', 20),
    //   },
    // },
    bleed: {t: 0},
    alignX: 'right',
    alignY: 'center',
    h: 'auto',
    w: 'auto',
    body: {
      alignX: 'left',
      alignY: 'top',
      textAlign: 'left',
      w: 'fill',
      border: {
        a: .005,
        aOffset: .005,
        background: {
          color: '#ffffff66',
        }
      },
      background: solidColor('#8F1D2C'),
      // bleed: {l: 2, r: 1},
      bleed: {t: 1, l: 1},
      mb: 1,
      elements: [
        // {
        //   type: 'small',
        //   lines: [
        //     {type: 'host', text: 'Night Owl Pet Center'},
        //   ],
        //   background: solidColor('#333'),
        //   color: solidColor('#fff'),
        //   font: {
        //     family: 'Lato',
        //     letterSpacing: 0.3,
        //     lineHeight: 1.4,
        //     size: 1,
        //     style: 'normal',
        //     transform: 'uppercase',
        //     weight: 400,
        //   },
        //   mb: 1,
        // },
        {
          type: 'dominant',
          bleed: {l: 0},
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
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        // {
        //   type: 'bridge',
        //   lines: [
        //     {type: 'descriptiveText', text: 'A benefit event for the stray dogs of'},
        //     {type: 'descriptiveText', text: 'Nightowl PPC'},
        //   ],
        //   color: solidColor('#fff'),
        //   font: {
        //     family: 'Lato',
        //     letterSpacing: 0,
        //     lineHeight: 1.4,
        //     size: 1,
        //     style: 'italic',
        //     transform: 'normal',
        //     weight: 400,
        //   },
        //   mb: 1,
        // },
        // {
        //   type: 'heading',
        //   lines: [
        //     {type: 'date', text: 'July 17, 2020', format: 'MMMM D, YYYY'},
        //     {type: 'time', text: '8 am to 4 pm'},
        //     {type: 'location', text: '123 Anywhere St., Any City'},
        //   ],
        //   color: solidColor('#fff'),
        //   font: {
        //     family: 'Lato',
        //     letterSpacing: 0,
        //     lineHeight: 1.4,
        //     size: 1,
        //     style: 'normal',
        //     transform: 'normal',
        //     weight: 700,
        //   },
        //   mb: 1,
        // },
        // {
        //   type: 'paragraph',
        //   lines: [
        //     {type: 'descriptiveText', text: 'Bring your dog and enjoy the day\'s festivities!'},
        //     {type: 'descriptiveText', text: 'We\'ll be having loads of fun activities and'},
        //     {type: 'descriptiveText', text: 'awesome games for all attendees.'},
        //   ],
        //   color: solidColor('#fff'),
        //   font: {
        //     family: 'Lato',
        //     letterSpacing: 0,
        //     lineHeight: 1.4,
        //     size: 1,
        //     style: 'normal',
        //     transform: 'normal',
        //     weight: 400,
        //   },
        //   mb: 1,
        // },
      ]
    },
  }
}