import { solidColor } from './'

export default {
  id: 3,
  title: 'Sunday Noon Football',
  tags: ['event', 'flyer', 'football'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-black-and-yellow-icon-sports-flyer-MAC5t7rcTo0.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#fed23c'),
  content: {
    body: {
      alignX: 'left',
      alignY: 'bottom',
      itemsAlignX: 'left',
      itesmAlignY: 'bottom',
      w: 'fill',
      textAlign: 'left',
      elements: [
        {
          type: 'icon',
          fill: '#000',
          w: 0.2,
          src: '/football.svg',
          meta: {
            w: 30,
            h: 30,
            colors: [],
            filetype: 'svg',
          },
          mb: 1.5,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Watch Live:'},
            {type: 'eventName', text: 'Sunday'},
            {type: 'eventName', text: 'Noon'},
            {type: 'eventName', text: 'Football'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.01,
            lineHeight: 1.2,
            size: 0.9,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
          mb: 0.75,
        },
        {
          type: 'bar',
          background: solidColor('#000'),
          w: 1,
          h: 12,
          mb: 1.5,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Experience football like you never have before!'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.04,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'normal',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'heading',
          lines: [
            {type: 'date-time', text: 'February 26, 2020 from 12NN'},
            {type: 'location', text: 'at Cormoran Sports Pub'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.04,
            lineHeight: 1.4,
            size: 0.6,
            style: 'normal',
            transform: 'normal',
            weight: 900,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: 'Enjoy the game live on our 110" HDTV.'},
            {type: 'descriptive', text: 'Entrance is free, but reservations are required.'},
            {type: 'contact', text: 'Call ahead: (123) 456-7890'},
          ],
          color: solidColor('#000'),
          font: {
            family: 'Raleway',
            letterSpacing: 0.06,
            lineHeight: 1.4,
            size: 0.7,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    header: {
      alignX: 'left',
      itemsAlignX: 'left',
      textAlign: 'left',
      elements: [
        {
          type: 'small',
          color: solidColor('#000'),
          lines: [
            {type: 'host', text: 'Cormoran Sports Pub'},
          ],
          font: {
            family: 'Raleway',
            letterSpacing: 0.4,
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