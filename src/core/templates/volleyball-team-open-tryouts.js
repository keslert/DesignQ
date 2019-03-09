import { solidColor } from './'

const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Algies Bay High School'},
  ],
  color: solidColor('#273c58'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.16,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'Volleyball Team Open'},
    {type: 'eventName', text: 'Tryouts'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Norwester',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'Tryouts for the Algies Bay Volleycats for AY'},
    {type: 'descriptive', text: '2020-2021'},
  ],
  color: solidColor('#273c58'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0.03,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'descriptive', text: 'Sept. 20-22,2020 - 3 PM to 5 PM'},
    {type: 'descriptive', text: 'ABHS Covered Court'},
  ],
  color: solidColor('#273c58'),
  font: {
    family: 'Norwester',
    letterSpacing: 0.12,
    size: 1,
    transform: 'uppercase',
    weight: 400,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'details', text: 'The ABHS Volleycats is on the lookout for new talents to join'},
    {type: 'details', text: 'the team. Tryouts are open to all junior and senior students.'},
  ],
  color: solidColor('#273c58'),
  font: {
    family: 'Glacial Indifference',
    letterSpacing: 0,
    lineHeight: 1.4,
    size: 1,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 63,
  title: 'Volleyball Team Open Tryouts',
  tags: ['event', 'flyer'],
  inspiration: 'https://firebasestorage.googleapis.com/v0/b/design-q.appspot.com/o/inspiration%2Fcanva-pink-and-turquoise-illustrated-volleyball-sports-flyer-MAC3TfTE7XM.webp?alt=media&token=18b3dbbe-c2b4-418b-9579-ba7cf434bd08',
  background: solidColor('#79cecd'),
  content: {
    body: {
      h: 'fill',
      elements: [
        small,
        dominant,
        bridge,
        { 
          type: 'image',
          image: {
            img: {
              src: '/volleyball.svg',
              meta: {
                w: 1,
                h: 1,
              },
              zoom: 0.8,
              y: 0,
            }
          },
          fill: '#94f9ce',
          aspectRatio: .6,
          sticky: true,
        },
      ]
    },
    footer: {
      background: solidColor('#ffffff'),
      bleed: { a: 1 },
      elements: [
        heading,
        paragraph,
      ]
    }
  }
}