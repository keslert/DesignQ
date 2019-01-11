import { solidColor, unitValue } from './'

export default {
  title: 'Jake\'s Birthday Party',
  px: 72,
  py: 36,
  background: solidColor('#403B57'),
  border: {
    width: 90,
    sides: {top: true, bottom: true},
    seed: 2,
    color: '#403B57',
    layout: 'confetti',
    items: [
      {type: 'party-hat', color: '#F26C46', size: 32},
      {type: 'party-hat', color: '#D7D55F', size: 32},
      {type: 'party-hat', color: '#5FD4CF', size: 32},
    ],
  },
  content: {
    alignY: 'center',
    elements: [
      { 
        type: 'small', 
        color: solidColor('#D7D55F'),
        lines: [
          {type: 'eventNameIntro', text: 'Come Join Us For A'},
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 0.9,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .07,
        },
      },
      { 
        type: 'dominant', 
        lines: [
          {type: 'eventName', text: 'Birthday'}, 
          {type: 'eventName', text: 'Party'},
        ],
        color: solidColor('#59D2CC'),
        font: {
          family: 'Chewy',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .05,
        },
      },
      { 
        type: 'small', 
        color: solidColor('#D7D55F'),
        lines: [
          {type: 'descriptiveText', text: 'Jake Is Turning 10!'}
        ],
        font: {
          family: 'Muli',
          weight: 700,
          size: 0.9,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
          letterSpacing: .07,
        },
        mb: 1.5,
      },
      {
        type: 'bar',
        background: solidColor('#59D2CC'),
        width: unitValue(90, 'px'),
        height: unitValue(12, 'px'),
        mb: 1.5,
      },
      { 
        type: 'bridge', 
        lines: [
          [
            {type: 'dayOfWeek', text: 'Sunday'}, 
            {type: 'date', text: 'April 7, 2018', format: 'MMM D, YYYY'}, 
            {type: 'time', text: '3PM'}
          ],
          {type: 'contact', text: 'RSVP to Lilia at 09 102 029'},
        ],
        divider: {
          type: 'line',
          size: 1,
          color: solidColor('#D7D55F'),
        },
        color: solidColor('#D7D55F'),
        font: {
          family: 'Muli',
          weight: 400,
          size: 0.6,
          style: 'normal',
          lineHeight: 1.4,
        },
      },
    ],
  },
}