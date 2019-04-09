import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Back to School',
  px: 64,
  py: 36,
  background: { 
  color: basicColor('#030F5B'),
},
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: {all: true },
      background: { 
  color: basicColor('#030F5B'),
},
      width: unitValue(100, '%'),
      flex: 1,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'eventNameIntro', text: 'Back to School'},
          ],
          color: basicColor('#D786D5'),
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            fitToWidth: true,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Holiday Bake Sale'},
          ],
          color: basicColor('#D786D5'),
          px: 1.5,
          py: 1.1,
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            fitToWidth: true,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
            letterSpacing: .1,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'time', text: 'Wednesday at 12pm'}
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Muli',
            weight: 700,
            size: 1,
            fitToWidth: true,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
        {
          type: 'image',
          url: 'https://images.unsplash.com/photo-1513519683267-4ee6761728ac?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
          bleed: {all: true},
          flex: 1,
        },
      ]
    },
    footer: {
      bleed: {all: true },
      background: { 
  color: basicColor('#D978C9'),
},
      width: unitValue(100, '%'),
      elements: [{
        type: 'small',
        color: basicColor('#ffffff'),
        lines: [
          {type: 'descriptive', text: 'Proceeds Benefit Spark High School Spirit Squad'}
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 1,
          fitToWidth: true,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      }]
    }
  }
}