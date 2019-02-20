import { solidColor, unitValue } from '.'

export default {
  title: 'Winslough Health Fair 2020',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-blue-vaccine-photo-health-fair-flyer-MAC5uz44Wss.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  px: 40,
  py: 40,
  background: {
    url: 'https://images.pexels.com/photos/1498933/pexels-photo-1498933.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500',
    filters: {
      brightness: 0.7
    }
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'center',
      width: unitValue(100, '%'),
      textAlign: 'center',
      flex: 1,
      elements: [
        {
          type: 'logo',
          url: '/heart.svg',
          fill: '#90c8cf',
          color: '#ffffff',
          size: 0.5,
          aspectRatio: 1,
          borderRadius: unitValue(50, '%'),
          px: 1,
          py: 1,
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
          mb: 1.75,
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Winslough Medical Center'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.15,
            lineHeight: 1.4,
            size: 0.3,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1.75,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Winslough Health'},
            {type: 'eventName', text: 'Fair 2020'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Oswald',
            letterSpacing: 0.05,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptiveText', text: 'Drop by for free flu vaccinations and health screenings.'},
          ],
          color: solidColor('#ffffff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.9,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
      ]
    },
    footer: {
      bleed: {all: true},
      width: unitValue(100, '%'),
      background: solidColor('#90c8cf'),
      textAlign: 'center',
      mb: 2,
      elements: [
        {
          type: 'heading',
          color: solidColor('#ffffff'),
          lines: [
            [
              {type: 'date', text: 'October 13, 2020', format: 'MMMM D, YYYY'},
              {type: 'time', text: '8-10 AM'},
            ],
            {type: 'location', text: 'The Winslough Gymnasium'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#ffffff'),
          },
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0.15,
            lineHeight: 1.6,
            size: 0.8,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptiveText', text: 'Winslough Elders Association covers the cost of vaccines for those'},
            {type: 'descriptiveText', text: 'without insurance. Don\'t miss out on the opportunity!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
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