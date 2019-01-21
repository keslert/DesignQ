import { solidColor, unitValue } from '.'

export default {
  title: 'Austfam Charity Food Drive',
  tags: ['event', 'flyer'],
  px: 36,
  py: 36,
  background: {
    url: 'https://images.unsplash.com/photo-1508116916455-2857e44c161e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    zoom: 1,
    y: 2.9,
  },
  content: {
    bleed: { all: true },
    background: solidColor('#262c2a'),
    alignX: 'center',
    alignY: 'flex-end',
    textAlign: 'center',
    width: unitValue(100, '%'),
    py: 2,
    px: 2,
    elements: [
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Austham Charity'},
          {type: 'eventName', text: 'Food Drive'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          letterSpacing: 0,
          lineHeight: 1.2,
          size: 0.7,
          style: 'normal',
          transform: 'uppercase',
          weight: 400,
        },
        mb: 1,
      },
      {
        type: 'small',
        lines: [
          {type: 'descriptiveText', text: "Let's give a helping hand to the victims"},
          {type: 'descriptiveText', text: "of Typhoon Ovia."},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
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
        type: 'bridge',
        lines: [
          [
            {type: 'date', text: "October 20-25, 2020", format: "MMMM D, YYYY"},
            {type: 'time', text: "9 AM to 7 PM"},
          ],
          {type: 'location', text: "Beechtown Gymnasium"},
        ],
        divider: {
          type: 'blank',
          size: 1,
          color: '#fff',
        },
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'paragraph',
        lines: [
          {type: 'descriptiveText', text: "Typhoon Ovia caused great damage to the community of San Clemence."},
          {type: 'descriptiveText', text: "Hundreds of evacuees are in dire need of food."},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
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
    bleed: { right: true },
    background: solidColor('#262c2a'),
    // width: unitValue(100, '%'),
    pl: 3,
    alignX: 'flex-end',
    textAlign: 'right',
    elements: [
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'A Little Goes A'},
          {type: 'descriptiveText', text: 'Long Way!'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0.15,
          lineHeight: 1.6,
          size: 0,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
    ]
  }
}