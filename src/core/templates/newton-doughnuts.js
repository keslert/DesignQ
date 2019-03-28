import { solidColor, unitValue } from '.'

export default {
  title: 'Newton Doughnuts',
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2F48.png?alt=media&token=7924fc95-7213-43cf-8882-470fb07d5175',
  px: 72,
  py: 72,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1530016910220-faf7fab2125c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: solidColor('#1c1611'),
    zoom: 1.4,
    y: .0,
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      width: unitValue(100, '%'),
      alignX: 'center',
      alignY: 'center',
      textAlign: 'center',
      bleed: { all: true },
      flex: 1,
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Grand'}, 
            {type: 'eventName', text: 'Opening'},
          ],
          color: solidColor('#ffffff'),
          mb: 0.5,
          font: {
            family: 'Bebas Neue',
            fitToWidth: true,
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.1,
          },
        },
        {
          type: 'small',
          lines: [
            [
              {type: 'date', text: 'October 20, 2019', format: 'MMM D, YYYY'},
              {type: 'location', text: '2nd Floor, SMC Mall'},
            ]
          ],
          divider: {
            type: 'line',
            size: 1,
            color: solidColor('#ffffff'),
          },
          color: solidColor('#ffffff'),
          font: {
            family: 'Bebas Neue',
            fitToWidth: true,
            weight: 400,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            lineHeight: 1.2,
          },
        },
      ]
    },
    footer: {
      textAlign: 'center',
      alignX: 'center',
      bleed: { all: true },
      elements: [{
        type: 'icon',
        src: '/newton-doughnuts.png',
        size: 2,
        meta: {
          width: 230,
          height: 126,
        }
      }]  
    }
  }
}