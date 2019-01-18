import { solidColor, unitValue } from '.'

export default {
  title: 'Bawres Fall Festival',
  px: 64,
  py: 32,
  background: solidColor('#191e3c'),
  border: {
    width: 100,
    top: true, 
    bottom: true,
    seed: 2,
    color: '#191e3c',
    layout: 'confetti',
    items: [
      {type: 'party-hat', color: '#fff', size: 32},
      {type: 'party-hat', color: '#ff8400', size: 32},
      {type: 'party-hat', color: '#fa905e', size: 32},
    ],
  },
  content: {
    alignY: 'center',
    width: unitValue(100, '%'),
    bleed: { all: true },
    elements: [
      {
        type: 'small', 
        lines: [
          {type: 'descriptiveText', text: 'Bawres Fort Presents'},
        ],
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Fall'}, 
          {type: 'eventName', text: 'Festival'},
        ],
        color: solidColor('#ff8400'),
        font: {
          family: 'Josefin Slab',
          weight: 700,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
      {
        type: 'bridge', 
        lines: [
          {type: 'descriptiveText', text: 'A Fundraising Event'},
        ],
        color: solidColor('#fa905e'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.4,
        },
        mb: 1.5,
      },
      { 
        type: 'small', 
        lines: [
          [
            {type: 'date', text: '4 September 2025', format: 'D MMMM YYYY'},
            {type: 'time', text: '1 PM - 10 PM'},
          ],
          [
            {type: 'location', text: 'Golden Plaza'},
            {type: 'cost', text: 'Admission Fee: $2'},
          ]
        ],
        divider: {
          type: 'dot',
          size: 1,
          color: solidColor('#fff'),
        },
        color: solidColor('#fff'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 1,
          style: 'normal',
          // transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
    ],
  },
}