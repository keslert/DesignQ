import { unitValue } from '.'
import { basicColor, stripedColor } from '../utils/color-utils';

export default {
  id: 12,
  title: 'Quarktown Hair Donation Program',
  tags: ['event', 'flyer'],
  background: { 
  color: basicColor('#f2f0e2'),
},
  border: {
    a: .04,
    aOffset: .02,
    background: {
      color: stripedColor(45, '#43a7dd', 40, '#ee505a'),
    },
  },
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Long overdue for a cut?'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0.2,
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
            {type: 'eventName', text: 'Quarktown Hair'},
            {type: 'eventName', text: 'Donation Program'},
          ],
          color: basicColor('#43a7dd'),
          font: {
            family: 'Playlist',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Get a drastic haircut to contribute to a noble cause!'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'heading',
          lines: [
            {type: 'contact', text: 'Interested? Sign up now by'},
            {type: 'contact', text: 'calling us at (123) 456 7890'},
          ],
          color: basicColor('#43a7dd'),
          font: {
            family: 'Montserrat',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'details', text: 'Each of your hair donations will be fashioned'},
            {type: 'details', text: 'into a wig and be donated to people suffering'},
            {type: 'details', text: 'from sudden and extreme hair loss.'},
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
    },
  }
}