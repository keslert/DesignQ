import { solidColor, unitValue } from '.'

export default {
  title: 'Grunge Fall Fashion',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: '',
    }
  },
  content: {
    height: 'auto',
    body: {
      background: solidColor('#000000'),
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Sandra Morgan Outfitters'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
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
            {type: 'eventName', text: 'Grunge Fall'},
            {type: 'eventName', text: '& Winter'},
            {type: 'eventName', text: 'Fashion Week'},
          ],
          color: solidColor('#fff'),
          font: {
            family: '',
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
            {type: 'descriptive', text: 'Experience the latest in grunge'},
            {type: 'descriptive', text: 'fashion nationwide'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
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
    footer: {
      background: solidColor('#000000'),
      elements: [
        {
          type: 'heading',
          color: solidColor('#fff'),
          lines: [
            [
              {type: 'date|time', text: 'Oct. 4 @ 5pm'},
              {type: 'location', text: 'Holler Hall'},
            ],
            [
              {type: 'date|time', text: 'Oct. 6 @ 3pm'},
              {type: 'location', text: 'Patsy Square'},
            ],
          ],
          font: {
            family: 'Glacial Indifference',
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
            {type: 'descriptive', text: '50+ brands will be showcased. Drop by on our'},
            {type: 'descriptive', text: 'time slot to get a glimpse of our latest collection'},
            {type: 'descriptive', text: 'before it hits the stores!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Glacial Indifference',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
      ]
    }
  }
}