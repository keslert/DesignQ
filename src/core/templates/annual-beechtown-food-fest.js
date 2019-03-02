import { solidColor } from './'

export default {
  id: 58,
  title: 'Annual Beechtown Food Fest',
  tags: ['flyer', 'event'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-green-vegetable-flatlay-food-flyer-MAC6lYFykfE.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1466637574441-749b8f19452f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
    },
  },
  content: {
    body: {
      h: 'auto',
      w: 'auto',
      pa: 3,
      background: {
        color: '#6b6f39',
        borderRadius: 9999,
      },
      aspectRatio: 1,
      elements: [
        {
          type: 'small',
          lines: [
            {type: 'host', text: 'Beechtown City Council'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.13,
            lineHeight: 1.4,
            size: 2,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: 'Annual'},
            {type: 'eventName', text: 'Beechtown'},
            {type: 'eventName', text: 'Food Fest'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Norwester',
            letterSpacing: 0.05,
            lineHeight: 1.2,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Admission is free! Hope'},
            {type: 'descriptive', text: 'to see you there!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Kollektif',
            letterSpacing: 0.149,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
      ]
    },
    footer: {
      background: solidColor('#6b6f39'),
      bleed: { x: 1, b: 1 },
      elements: [
        {
          type: 'heading',
          color: solidColor('#fff'),
          lines: [
            {type: 'date', text: 'January 16 - 20, 2020', format: 'MMMM D, YYYY'},
            {type: 'time', text: '10 am to 5 pm'},
            {type: 'location', text: '123 Anywhere St.'},
          ],
          font: {
            family: 'Norwester',
            letterSpacing: 0.12,
            lineHeight: 1.6,
            size: 1,
            style: 'normal',
            transform: 'uppercase',
            weight: 400,
          },
        },
        {
          type: 'paragraph',
          color: solidColor('#fff'),
          lines: [
            {type: 'descriptive', text: 'For more information about the food fest, visit'},
            {type: 'descriptive', text: 'www.reallygreatsite.com. You may also call us at (123) 456-7890'},
          ],
          font: {
            family: 'Kollektif',
            letterSpacing: 0.039,
            lineHeight: 1.4,
            size: 1,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        }
      ]
    }
  }
}