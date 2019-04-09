import { basicColor } from '../utils/color-utils';

export default {
  id: 62,
  title: 'Gold Cheetah Survival Camp',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-orange-mountains-summer-camp-flyer-MAC3Y6D0AFU.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: { 
  color: basicColor('#fef8e9'),
},
  content: {
    body: {
      h: 'fill',
      elements: [
        {
          type: 'icon',
          src: '/yacht.svg',
          fill: '#f48842',
          size: 1,
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Trek! Swim! Paddle!'},
          ],
          color: basicColor('#f25938'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.12,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Gold Cheetah Survival'},
            {type: 'eventName', text: 'Summer Camp'},
          ],
          color: basicColor('#f25938'),
          font: {
            family: 'Norwester',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1.0,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Get together with friends and be wilderness'},
            {type: 'descriptive', text: 'explorers!'},
          ],
          color: basicColor('#f25938'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'heading',
          color: basicColor('#f25938'),
          lines: [
            [
              {type: 'date', text: 'June 8-21, 2020', format: 'MMMM D, YYYY'},
              {type: 'location', text: 'Gold Cheetah Camp'},
            ],
            {type: 'city-state', text: 'Lake Sandio, PA'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#f25938'),
          },
          font: {
            family: 'Montserrat',
            letterSpacing: 0.12,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'image',
          background: {
            img: {
              src: '/mountain.svg',
              meta: {
                w: 1,
                h: 1,
              },
              zoom: 1.2,
              y: 0.6,
            },
          },
          bleed: { x: 1 },
          fill: '#94f9ce',
          aspectRatio: .5,
          sticky: true,
        },
      ]
    },
    footer: {
      background: { 
  color: basicColor('#f48842'),
},
      bleed: { a: 1 },
      py: .5,
      elements: [
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Open for kids aged 11 to 13. Our team of skilled and'},
            {type: 'details', text: 'professional camp counselors ensures all kids are safe 24/7.'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    }
  }
}