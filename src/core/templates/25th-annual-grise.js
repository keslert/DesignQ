import { solidColor, unitValue } from '.'

export default {
  title: '25th Annual Grise',
  px: 48,
  py: 48,
  background: {
    url: 'https://images.unsplash.com/photo-1523275033438-8c0a9239935b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    filters: {
      brightness: .8,
    },
  },
  border: {
    width: 40,
    color: '#000',
    all: true,
  },
  content: {
    bleed: { left: true, right: true, border: true },
    background: solidColor('#fff'),
    alignX: 'center',
    alignY: 'top',
    textAlign: 'center',
    px: 1.5,
    mb: 1.2,
    elements: [
      {
        type: 'small',
        lines: [
          {type: 'time', text: 'Feed Someone In Need'},
        ],
        color: solidColor('#dc8120'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 700,
        },
        mb: 1,
      },
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: '25th Annual Grise'},
          {type: 'eventName', text: 'Fiord Food Drive'},
        ],
        color: solidColor('#000'),
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 900,
        },
        mb: 1,
      },
      {
        type: 'bridge',
        lines: [
          {type: 'time', text: 'A campaign by the Grise Fiord Fishermen\'s Assoc.' },
        ],
        color: solidColor('#dc8120'),
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
  footer: {
    bleed: { all: true },
    width: unitValue(100, '%'),
    textAlign: 'center',
    elements: [
      {
        type: 'heading',
        color: solidColor('#fff'),
        lines: [
          [ 
            {type: 'date', text: 'March 3-5, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '8 am to 5 pm'},
          ],
          {type: 'location', text: 'Grise Fiord Public Library'},
        ],
        divider: {
          size: 1,
          type: 'line',
          color: solidColor('#fff'),
        },
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          weight: 900,
        },
        mb: 1.5,
      },
      {
        type: 'paragraph',
        color: solidColor('#fff'),
        lines: [
          {type: 'descriptiveText', text: 'Did you know that thousands of households struggle'},
          {type: 'descriptiveText', text: 'with food security everyday? You can help change'},
          {type: 'descriptiveText', text: 'those statistics.'},
        ],
        font: {
          family: 'Muli',
          letterSpacing: 0,
          lineHeight: 1.4,
          size: 1,
          style: 'normal',
          transform: 'normal',
          weight: 400,
        },
        mb: 1.5,
      },
    ]
  }
}