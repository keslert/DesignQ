import { unitValue } from '.'
import { basicColor } from '../utils/color-utils';

export default {
  title: 'Ultimate Food Fest',
  tags: ['event', 'flyer'],
  px: 48,
  py: 36,
  background: {
    url: 'https://images.unsplash.com/photo-1536487051162-1fcc4fdf4cc0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: basicColor('#253b58'),
    zoom: 1.2,
    x: 1, 
    y: 1,
    backgroundBlendMode: 'soft-light',
    filters: {
      grayscale: .3,
    },
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { left: true, right: true },
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Grinning Stomach Presents'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Muli',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
          mb: 2,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'The Ultimate Food'},
            {type: 'eventName', text: 'Fest 2020'},
          ],
          color: basicColor('#ffffff'),
          font: {
            family: 'Chewy',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'A gathering of cuisines from all'},
            {type: 'descriptive', text: 'over the globe!'},
          ],
          color: basicColor('#ffffff'),
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
      bleed: { all: true },
      width: unitValue(100, '%'),
      textAlign: 'center',
      elements: [
        {
          type: 'icon',
          src: '/yacht.svg',
          fill: '#f64b42',
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
          mb: 1,
        },
      ]
    },
    footer: {
      bleed: { all: true },
      background: { 
  color: basicColor('#f64b42'),
},
      width: unitValue(100, '%'),
      textAlign: 'center',
      elements: [
        {
          type: 'heading',
          color: basicColor('#ffffff'),
          lines: [
            [
              {type: 'date', text: 'May 13-15, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '10 am to 8 pm'},
            ],
            {type: 'location', text: 'Beechtown Food Park'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: basicColor('#ffffff'),
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
          mb: 2,
        },
        {
          type: 'paragraph',
          color: basicColor('#ffffff'),
          lines: [
            {type: 'details', text: 'Call 123-456-7890 for tickets now! if you\'re interested in setting up'},
            {type: 'details', text: 'a booth, contact hello@reallygreatsite.com.'},
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
    }
  }
}