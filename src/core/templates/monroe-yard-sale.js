import { unitValue } from '.'
import { stripedColor, basicColor } from '../utils/color-utils';

export default {
  title: 'Monroe Yard Sale',
  px: 36,
  py: 36,
  border: {
    top: 120,
    seed: 2,
    layout: 'confetti',
    items: [
      {type: 'party-hat', color: '#ff5145', size: 16 },
    ],
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      width: unitValue(100, '%'),
      alignX: 'center',
      alignY: 'center',
      bleed: { all: true },
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Yard'},
            {type: 'eventName', text: 'Sale'},
          ],
          color: basicColor('#000'),
          font: {
            family: 'Permanent Marker',
            weight: 400,
            size: 1.5,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
          mb: 1,
        },
        {
          type: 'bar',
          background: { 
  color: basicColor('#ff5145'),
},
          width: unitValue(60, '%'),
          height: unitValue(32, 'px'),
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'date', text: 'January 25 - 30, 2019', format: 'MMMM D, YYYY'},
          ],
          color: basicColor('#000'),
          font: {
            family: 'Roboto Condensed',
            weight: 700,
            size: 1.3,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
          mb: 0.5,
        },
        {
          type: 'small',
          lines: [
            {type: 'time', text: '11:00 AM - 5:30 PM'},
            {type: 'location', text: 'The Monroe Residence'},
          ],
          color: basicColor('#000'),
          font: {
            family: 'Roboto Condensed',
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
          mb: 1,
        },
      ]
    },
  }
}