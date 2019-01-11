import { solidColor, unitValue } from '.'

export default {
  title: 'Newton Doughnuts',
  px: 72,
  py: 72,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1530016910220-faf7fab2125c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    color: '#1c1611',
    zoom: 1.4,
    y: .0,
  },
  content: {
    width: unitValue(100, '%'),
    // alignX: 'center',
    flex: 1,
    elements: [
      {
        type: 'dominant',
        lines: [
          {type: 'eventName', text: 'Grand'}, 
          {type: 'eventName', text: 'Opening'},
        ],
        color: solidColor('#fff'),
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
          color: solidColor('#fff'),
        },
        color: solidColor('#fff'),
        font: {
          family: 'Bebas Neue',
          fitToWidth: true,
          weight: 400,
          size: 0.8,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
      },
    ]
  },
  footer: {
    type: 'basic',
    elements: [{
      type: 'logo',
      url: '/newton-doughnuts.png',
      size: 2,
      meta: {
        width: 230,
        height: 126,
      }
    }]  
  }
}