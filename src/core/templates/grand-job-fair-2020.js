import { solidColor, unitValue } from '.'

export default {
  title: 'The Grand Job Fair 2020',
  tags: ['event', 'flyer'],
  px: 72,
  py: 36,
  background: {
    url: 'https://images.unsplash.com/photo-1519176510496-cd5b5b74c808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: '#284b82',
    backgroundBlendMode: 'luminosity',
    filters: {
      brightness: 0.7,
    },
    zoom: 2.4,
    y: .1,
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { left: true, right: true },
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      width: unitValue(100, '%'),
      mb: 1.5,
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'The Grand'},
            {type: 'eventName', text: 'Job Fair'},
            {type: 'eventName', text: 'Of 2020'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 0.6,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
          mb: 1,
        },
        {
          type: 'bar',
          background: solidColor('#fff'),
          width: unitValue(100, '%'),
          height: unitValue(6, 'px'),
          mb: 1.25,
        },
        {
          type: 'small',
          lines: [
            {type: 'time', text: 'Get to know over 60 companies'},
            {type: 'time', text: 'and jumpstart your career!'},
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
    footer: {
      bleed: { all: true },
      background: solidColor('#fff'),
      width: unitValue(100, '%'),
      textAlign: 'center',
      elements: [
        {
          type: 'heading',
          color: solidColor('#284b82'),
          lines: [
            [
              {type: 'date', text: 'July 19, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '10 am to 5 pm'},
            ],
            {type: 'location', text: '123 Anywhere St.'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#284b82'),
          },
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
          type: 'paragraph',
          color: solidColor('#284b82'),
          lines: [
            {type: 'descriptiveText', text: 'No matter which field you\'re in, you\'ll surely find'},
            {type: 'descriptiveText', text: 'a job post that perfectly fits you and your capabilities.'},
            {type: 'descriptiveText', text: 'See you at the fair!'},
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
          mb: 1,
        },
      ]
    },
    header: {
      bleed: { all: true, border: true },
      background: solidColor('#fff'),
      // width: unitValue(100, '%'),
      px: 1,
      alignX: 'center',
      textAlign: 'left',
      elements: [
        {
          type: 'logo',
          fill: '#284b82',
          url: '/company.svg',
          size: 0.8,
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg', // y = 0 if at bottom of page, y=1 if a top
          },
          mb: 1,
        },
      ]
    }
  }
}