


export function getTextOffset(str, family, ignoreAscendersDescenders) {
  const font = FONT_DETAILS[family]
  return {
    top: font.ascenderOffsets[!ignoreAscendersDescenders && font.ascenders.test(str) ? 0 : 1],
    bottom: font.descenderOffsets[!ignoreAscendersDescenders && font.descenders.test(str) ? 0 : 1],
  }
}


const defaultAscenders = /[A-Z1-9hdfkl&]/
const defaultDescenders = /[gjqpy]/
const FONT_DETAILS = {
  'Permanent Marker': {
    ascenders: defaultAscenders,
    descenders: /[]/,
    ascenderOffsets: [-.16, -.37],
    descenderOffsets: [.1, -.09],
  },
  'Muli': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.15, -.37],
    descenderOffsets: [.05, -.12],
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
    ascenderOffsets: [-.1, -.27],
    descenderOffsets: [.1, -.15],
  },
  'Roboto Condensed': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.12, -.09],
    descenderOffsets: [-.2, -.15],
  },
  'Cormorant Unicase': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.19, -.15],
    descenderOffsets: [-.2, -.18],
  },
  'Voga': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.142, -.335],
    descenderOffsets: [-.2, -.15],
  },
  'Londrina Sketch': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.142, -.335],
    descenderOffsets: [-.2, -.13],
  },
  'Playfair Display': {
    ascenders: defaultAscenders,
    descenders: defaultDescenders,
    ascenderOffsets: [-.142, -.335],
    descenderOffsets: [.1, -.08],
  },
}