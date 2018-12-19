


export function getTextOffset(str, family) {
  const font = FONT_DETAILS[family]
  return {
    top: font.ascenderOffsets[font.ascenders.test(str) ? 0 : 1],
    bottom: font.descenderOffsets[font.descenders.test(str) ? 0 : 1],
  }
}


const defaultAscenders = /[A-Z1-9hdfkl&]/
const defaultDescenders = /[gjqpy]/
const FONT_DETAILS = {
  'Muli': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.15, -.37],
    descenderOffsets: [.1, -.12],
  },
  'Bebas Neue': {
    supportsLowerCase: false,
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.09, -.09],
    descenderOffsets: [-.2, -.2],
  },
  'Josefin Slab': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.03, -.37],
    descenderOffsets: [.1, -.25],
  },
  'Yellowtail': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.03, -.37],
    descenderOffsets: [.1, -.25],
  },
  'Chewy': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.1, -.37],
    descenderOffsets: [.1, -.15],
  }
}