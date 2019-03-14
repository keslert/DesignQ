import { solidColor } from './'


const small = {
  type: 'small',
  lines: [
    {type: 'host', text: 'Hisburgh High presents'},
  ],
  color: solidColor('#46dbdd'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0.07,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const dominant = {
  type: 'dominant',
  lines: [
    {type: 'eventName', text: 'From'},
    {type: 'eventName', text: 'Sketches to'},
    {type: 'eventName', text: 'Artworks'},
  ],
  color: solidColor('#f43a76'),
  font: {
    family: 'Nunito',
    letterSpacing: 0,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const bridge = {
  type: 'bridge',
  lines: [
    {type: 'descriptive', text: 'An illustration workshop organized by'},
    {type: 'descriptive', text: 'Michelle Saunders.'},
  ],
  color: solidColor('#46dbdd'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0.07,
    size: 1,
    transform: 'normal',
  },
}

const heading = {
  type: 'heading',
  lines: [
    {type: 'date', text: 'September 5-10, 2020'},
    {type: 'time', text: '1-3 PM'},
    {type: 'location', text: "Marissa's Art Corner"},
  ],
  color: solidColor('#f43a76'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0.08,
    size: 1,
    transform: 'uppercase',
    weight: 700,
  },
}

const paragraph = {
  type: 'paragraph',
  lines: [
    {type: 'price', text: 'Entry Fee: $50'},
    {type: 'details', text: 'For slot reservations, contact me at'},
    {type: 'details', text: 'hello@reallygreatsite.com. More inforamtion at'},
    {type: 'details', text: 'www.reallygreatsite.com'},
  ],
  color: solidColor('#fff'),
  font: {
    family: 'Quicksand',
    letterSpacing: 0.07,
    lineHeight: 1.4,
    size: 1.5,
    style: 'normal',
    transform: 'normal',
  },
}


export default {
  id: 83,
  title: 'From Sketches to Artwork',
  tags: ['event', 'flyer'],
  background: {
    img: {
      src: 'https://images.unsplash.com/photo-1485841938031-1bf81239b815?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=500&q=60',
    }
  },
  content: {
    body: {
      h: 'auto',
      w: 'auto',
      pa: 3,
      background: {
        color: '#ffffff',
        borderRadius: 9999,
      },
      aspectRatio: 1,
      elements: [
        small,
        dominant,
        bridge,
        heading,
      ]
    },
    footer: {
      background: solidColor('#46dbdd'),
      bleed: { a: 1 },
      elements: [
        paragraph,
      ]
    }
  }
}