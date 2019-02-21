import { solidColor, striped } from './'

export default {
  title: 'Football Varsity Tryouts',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-&-white-bold-creative-sport-football-tryouts-flyer-MAC6S8qYjo8.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 1,
  py: 1,
  background: solidColor('#FF5200'),
  border: {
    l: 50,
    background: {
      color: striped(30, '#000', 40, '#fff', 40),
    },
  },
  decor: {
    r: .3,
    background: {
      img: {
        src: '/football-player.png',
        w: 557,
        h: 960,
      },
      zoom: 1,
      x: 0,
      backgroundBlendMode: 'multiply',
      color: '#FF5200',
    }
  },
  content: {
    h: 'fill',
    w: 'fill',
    alignX: 'left',
    alignY: 'center',
    body: {
      w: 'fill',
      h: 'auto',
      alignX: 'left',
      alignY: 'bottom',
      itemsAlignX: 'left',
      itemsAlignY: 'top',
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Football'},
            {type: 'eventName', text: 'Varsity'},
            {type: 'eventName', text: 'Tryouts 2020'},
          ],
          color: solidColor('#000'),
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
            {type: 'descriptiveText', text: 'Represent the school by'},
            {type: 'descriptiveText', text: 'doing what you love the most!'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Arvo',
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
            {type: 'date', text: 'March 25, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '4:00 PM - 6:00 PM'},
            {type: 'location', text: 'Football Field'},
          ],
          background: solidColor('#000'),
          color: solidColor('#fff'),
          font: {
            family: 'Arvo',
            letterSpacing: 0,
            lineHeight: 1.6,
            size: 0.7,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
          bleed: {pl: 1},
          w: 'fill',
          mb: 1,
          py: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: 'The Broadus Football Varsity is looking for strong,'},
            {type: 'descriptiveText', text: 'hardworking, and talented football players'},
            {type: 'descriptiveText', text: 'to join the team.'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Arvo',
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
    header: {
      w: 'fill',
      alignX: 'left',
      alignY: 'top',
      itemsAlignY: 'top',
      itemsAlignX: 'left',
      textAlign: 'left',
      // background: solidColor('#f00'),
      elements: [
        {
          type: 'small',
          color: solidColor('#fff'),
          lines: [
            {type: 'host', text: 'Broadus High School'},
          ],
          font: {
            family: 'Arvo',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.6,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
      ]
    }
  }
}