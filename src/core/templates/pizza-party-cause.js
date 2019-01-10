import { striped, solidColor, unitValue } from '.'

export default {
  title: 'Pizza Party for Cause',
  px: 48,
  py: 72,
  border: {
    width: 10,
    color: '#fff',
    sides: {
      all: true,
    }
  },
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1506354666786-959d6d497f1a?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80',
  },
  content: {
    w: .6,
    background: solidColor('rgba(156,34,16,.84)'),
    flex: 1,
    alignX: 'flex-end',
    alignY: 'center',
    elements: [
      {
        type: 'small',
        lines: ['Help feed the kids!'],
        color: solidColor('#fff'),
        font: {
          family: 'Roboto Condensed',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.1,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: ['Pizza', 'Party', 'For A', 'Cause'],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          // letterSpacing: .025,
        },
        mb: 2,
      },
      {
        type: 'bridge',
        lines: ['09.18.19'],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          weight: 700,
          size: 1.5,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.6,
          letterSpacing: .1,
        },
        mb: 1,
      },
      {
        type: 'small',
        lines: [['12-6pm', 'Saturday'], 'Gino\'s Pizzaria'],
        divider: {
          type: 'line',
          size: 1,
          color: solidColor('#fff'),
        },
        color: solidColor('#fff'),
        font: {
          family: 'Roboto Condensed',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
      },
    ]
  },
  _user: {
    content: {
      eventName: 'Pizza Party for a cause',
      date: '09.18.19',
      dayOfWeek: 'Saturday',
      time: '12-6pm',
      location: 'Gino\'s Pizzaria',
      descriptiveText: [
        'Help feed the kids!',
      ]
    }
  }
}