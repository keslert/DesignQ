import { solidColor } from './'

export default {
  title: 'Basketball Tournament',
  tags: ['event', 'flyer'],
  inspiration: '',
  background: solidColor('#101010'),
  content: {
    body: {
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Let the games begin!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: '2020'},
            {type: 'eventName', text: 'Basketball'},
            {type: 'eventName', text: 'Tournament'},
          ],
          color: solidColor('#db6936'),
          font: {
            family: 'Norwester ',
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
            {type: 'descriptive', text: 'A fundraising game for the'},
            {type: 'descriptive', text: 'Beechtown Foundation'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Open Sans',
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
            {type: 'date', text: 'March 25-30, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: 'Starts at 1 P.M.'},
            {type: 'location', text: 'Forestov Court'},
          ],
          color: solidColor('#db6936'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: "Watch as some of the country's best basketball"},
            {type: 'descriptive', text: 'teams vie for the championship!'},
            {type: 'descriptive', text: 'Tickets are now on sale at reallygreatsite.com!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
      ]
    },
  }
}