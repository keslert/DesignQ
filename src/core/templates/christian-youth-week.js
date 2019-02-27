import { solidColor, unitValue } from '.'

export default {
  title: 'Christian Youth Week',
  tags: ['event', 'flyer'],
  px: 60,
  py: 48,
  background: {
    url: 'https://images.unsplash.com/photo-1532726858233-f3c23319edc5?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    filters: {
      brightness: 0.9,
    },
  },
  content: {
    height: 'flex',
    width: 'flex',
    body: {
      bleed: { all: true },
      background: solidColor('#25334bee'),
      alignX: 'flex-end',
      alignY: 'center',
      textAlign: 'center',
      w: .70,
      mb: 1.5,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'San Dias Church Presents'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 1,
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Christian'},
            {type: 'eventName', text: 'Youth Week'},
            {type: 'eventName', text: '2020'},
          ],
          color: solidColor('#dfdbc1'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 900,
          },
          mb: 1,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Learn, Love, and Live the Life'},
            {type: 'descriptive', text: 'of Jesus Christ'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.5,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
          mb: 1,
        },
        {
          type: 'bar',
          height: unitValue(5, 'px'),
          width: unitValue(100, '%'),
          background: solidColor('#dfdbc1'),
        },
        {
          type: 'heading',
          lines: [
            
            {type: 'date', text: 'October 19-24, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '10am - 5pm'},
            {type: 'location', text: 'Hall A, San Dias Church'},
          ],
          color: solidColor('#dfdbc1'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
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
            {type: 'descriptive', text: 'Increase your faith, learn about the life of'},
            {type: 'descriptive', text: "our Lord, study the Bible, meet new"},
            {type: 'descriptive', text: "friends, and have loads of fun!"},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Muli',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0,
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