import { solidColor, unitValue } from './'

export default {
  title: 'Art Talk',
  px: 36,
  py: 36,
  background: {
    type: 'image',
    url: 'https://images.unsplash.com/photo-1532640331846-d2da5987c3ee?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1993&q=80',
    filters: [],
  },
  content: {
    width: 'auto',
    height: 'auto',
    alignX: 'left',
    alignY: 'center',
    background: solidColor('#fff'), 
    border: {
      type: 'solid',
      color: '#EE445A',
      width: 12,
      edges: { top: true, bottom: true },
    },
    elements: [
      { 
        type: 'small', 
        color: solidColor('#EF4260'),
        lines: ['3rd of', 'September'],
        font: {
          family: 'Bebas Neue',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        marginBottom: 1,
      },
      {
        type: 'bar',
        background: solidColor('#FECF82'),
        width: unitValue(80, 'px'),
        height: unitValue(8, 'px'),
        marginBottom: 1,
      },
      { 
        type: 'dominant', 
        lines: ['Art', 'Talk'],
        color: solidColor('#EF4260'),
        font: {
          family: 'Bebas Neue',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        marginBottom: 1,
      },
      { 
        type: 'bridge', 
        lines: ['Things you need to know', 'about your art'],
        color: solidColor('#8C8C8C'),
        font: {
          family: 'Muli',
          weight: 700,
          size: 0.8, // based on the small size
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        },
        marginBottom: 1,
      },
      {
        type: 'bar',
        background: solidColor('#FECF82'),
        width: unitValue(80, 'px'),
        height: unitValue(8, 'px'),
        marginBottom: 1,
      },
      { 
        type: 'small', 
        color: solidColor('#EF4260'),
        lines: ['4-7pm', 'Athena Hall'],
        font: {
          family: 'Bebas Neue',
          weight: 400,
          size: 1,
          style: 'normal',
          transform: 'uppercase',
          lineHeight: 1.2,
        }
      },
    ],
  },
  footer: null,
  header: null,
}