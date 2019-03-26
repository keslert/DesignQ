import { solidColor } from './'

export default {
  id: 77,
  title: 'The Grand Job Fair 2020',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1519176510496-cd5b5b74c808?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      meta: { w: 800, h: 534 },
      zoom: 2.4,
      y: .1,
      filters: {
        brightness: 0.7,
      },
    },
    color: '#284b82',
    backgroundBlendMode: 'luminosity',
  },
  content: {
    body: {
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'The Grand'},
            {type: 'eventName', text: 'Job Fair'},
            {type: 'eventName', text: 'Of 2020'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Aileron',
            letterSpacing: 0.04,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
        },
        {
          type: 'bar',
          background: solidColor('#ffffff'),
          w: 1,
          h: 6,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'time', text: 'Get to know over 60 companies'},
            {type: 'time', text: 'and jumpstart your career!'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Aileron',
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
    footer: {
      bleed: { a: 1 },
      background: solidColor('#ffffff'),
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
            family: 'Aileron',
            letterSpacing: 0.006,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#284b82'),
          lines: [
            {type: 'details', text: 'No matter which field you\'re in, you\'ll surely find'},
            {type: 'details', text: 'a job post that perfectly fits you and your capabilities.'},
            {type: 'details', text: 'See you at the fair!'},
          ],
          font: {
            family: 'Aileron',
            letterSpacing: 0.057,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    header: {
      bleed: { t: 1 },
      background: solidColor('#ffffff'),
      w: 'auto',
      textAlign: 'center',
      elements: [
        {
          type: 'icon',
          fill: '#284b82',
          src: '/company.svg',
          size: 1,
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg', // y = 0 if at bottom of page, y=1 if a top
          },
        },
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Beechtown'},
            {type: 'host', text: 'Careers Co.'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Aileron',
            letterSpacing: 0.13,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 900,
          },
        },
      ]
    }
  }
}