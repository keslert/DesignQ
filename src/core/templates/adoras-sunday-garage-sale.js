import { solidColor, unitValue, splitColor } from '.'

export default {
  title: "Adora's Sunday Garage Sale",
  tags: ['event', 'flyer'],
  px: 48,
  py: 48,
  border: {
    all: 80,
    color: splitColor(0, '#fec458', '#ed5744'),
  },
  background: solidColor('#fff'),
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      elements: [
        {
          type: 'icon',
          size: 1,
          src: '/shop.svg',
          fill: '#fec458',
          meta: {
            width: 50,
            height: 50,
            colors: [],
            filetype: 'svg',
          },
          mb: 1,
        },
        {
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'Everything Must Go!'},
          ],
          color: solidColor('#ed5744'),
          font: {
            family: 'Josefin Slab',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.3,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: "Adora's Sunday"},
            {type: 'eventName', text: 'Garage Sale'},
          ],
          color: solidColor('#ed5744'),
          font: {
            family: 'Josefin Slab',
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
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Selling pre-loved clothes, appliances, and'},
            {type: 'descriptive', text: 'gadgets!'},
          ],
          color: solidColor('#ed5744'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'heading',
          lines: [
            [
              {type: 'time', text: '9 am to 6 pm'},
              {type: 'date', text: 'Aug. 16, 2020', format: 'MMM. D, YYYY'},
            ],
            {type: 'location', text: '123 Anywhere St., Any City'},
          ],
          divider: {
            type: 'line',
            size: 1,
            color: '#ed5744',
          },
          color: solidColor('#ed5744'),
          font: {
            family: 'Josefin Slab',
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
          type: 'small',
          lines: [
            {type: 'descriptive', text: 'A garage sale where you can buy secondhand'},
            {type: 'descriptive', text: 'clothes, gadgets, and appliances for cheap'},
            {type: 'descriptive', text: 'prices. All items are in good condition!'},
          ],
          color: solidColor('#ed5744'),
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
  }
}