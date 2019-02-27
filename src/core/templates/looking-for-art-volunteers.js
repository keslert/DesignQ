import { solidColor } from './'

export default {
  title: "We're Looking for Art Volunteers",
  tags: ['event', 'flyer'],
  px: 1,
  py: 1,
  border: {
    a: .05,
    background: solidColor('#ffffff'),
  },
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1461532257246-777de18cd58b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
      filters: {
        brightness: 0.8,
        grayscale: 1,
      }
    }
  },
  content: {
    body: {
      w: 'auto',
      bleed: { b: 2, r: 2 },
      background: solidColor('#c21b2e'),
      alignX: 'right',
      alignY: 'bottom',
      itemsAlignX: 'left',
      itemsAlignY: 'bottom',
      textAlign: 'left',
      elements: [
        {
          type: 'dominant',
          lines: [
            {type: 'eventName', text: "We're"},
            {type: 'eventName', text: 'Looking'},
            {type: 'eventName', text: 'For Art'},
            {type: 'eventName', text: 'Volunteers'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.2,
            size: 0.85,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
          mb: 0.5,
        },
        {
          type: 'bridge',
          lines: [
            {type: 'descriptive', text: 'Come over and join us at'},
            {type: 'descriptive', text: 'the Youth Arts Exhibit 2020!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.7,
            style: 'italic',
            transform: 'normal',
            weight: 400,
          },
        },
        {
          type: 'heading',
          lines: [
            {type: 'contact', text: 'Call us up at (123) 456 7890'},
            {type: 'contact', text: 'If you want to sign up!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
        {
          type: 'paragraph',
          lines: [
            {type: 'descriptive', text: "If you've got fine art experience, a natural"},
            {type: 'descriptive', text: 'talent for instruction, boundless creativity,'},
            {type: 'descriptive', text: 'and 18-21 y/o, you should join!'},
          ],
          color: solidColor('#fff'),
          font: {
            family: 'Open Sans',
            letterSpacing: 0,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'normal',
            weight: 400,
          },
        },
      ]
    },
    header: {
      textAlign: 'left',
      itemsAlignX: 'left',
      elements: [
        {
          type: 'small',
          color: solidColor('#fff'),
          lines: [
            {type: 'host', text: 'Quark Community Center'},
          ],
          font: {
            family: 'Open Sans',
            letterSpacing: 0.1,
            lineHeight: 1.4,
            size: 0.8,
            style: 'normal',
            transform: 'uppercase',
            weight: 700,
          },
        },
      ]
    },
  }
}