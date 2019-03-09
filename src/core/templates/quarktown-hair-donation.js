import { solidColor, unitValue, striped } from '.'

export default {
  id: 12,
  title: 'Quarktown Hair Donation Program',
  tags: ['event', 'flyer'],
  background: solidColor('#f2f0e2'),
  border: {
    a: .04,
    aOffset: .02,
    background: {
      color: striped(45, '#43a7dd', 40, '#ee505a'),
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
          color: solidColor('#fff'),
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
          color: solidColor('#43a7dd'),
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
          color: solidColor('#fff'),
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
          color: solidColor('#43a7dd'),
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
          color: solidColor('#fff'),
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