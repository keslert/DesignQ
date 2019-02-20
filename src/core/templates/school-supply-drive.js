import { solidColor, unitValue } from '.'

export default {
  title: 'School Supply Drive',
  tags: ['event', 'school'],
  px: 72,
  py: 48,
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      alignX: 'center',
      alignY: 'center',
      bleed: { all: true },
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Ridgewood'},
            {type: 'host', text: 'High School'},
          ],
          color: solidColor('#404040'),
          font: {
            size: 1,
            family: 'Muli',
            weight: 700,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'School'},
            {type: 'eventName', text: 'Supply'},
            {type: 'eventName', text: 'Drive'},
          ],
          color: solidColor('#fd8e74'),
          font: {
            transform: 'uppercase',
            size: 1,
            family: 'Muli',
            weight: 700,
            style: 'normal',
            lineHeight: 1.2,
            letterSpacing: 0,
          },
          mb: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'date', text: 'July 21-26, 2019', format: 'MMMM D, YYYY'},
          ],
          color: solidColor('#404040'),
          font: {
            size: 1,
            family: 'Muli',
            weight: 700,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.4,
          },
        },
      ]
    }
  }
}