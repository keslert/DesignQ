// TODO: Generate ascenders and descenders offsets for each of the fonts

const ascenderRegex = /[A-Z1-9hdfkl&]/
export function hasAscender(str) {
  return ascenderRegex.test(str);
}

// some fonts have descenders for 3, 4, 5, 7, and 9
const descenderRegex = /[gjqpy]/
export function hasDescender(str) {
  return descenderRegex.test(str);
}

// TODO: 
export function getTextOffset(str, family) {
  const font = FONT_DETAILS[family]
  return {
    top: font.ascenders[hasAscender(str)],
    bottom: font.descenders[hasDescender(str)],
  }
}

// TODO: Each font should define it's regex for ascenders and descenders.
const FONT_DETAILS = {
  'Muli': {
    ascenders: {
      [true]: -.15,
      [false]: -.37,
    },
    descenders: {
      [true]: .1,
      [false]: -.12,
    },
  },
  // ALL LETTERS ARE UPPERCASE
  'Bebas Neue': {
    ascenders: {
      [true]: -.09,
      [false]: -.09,
    },
    descenders: {
      [true]: -.2, // 
      [false]: -.2,
    },
  },
  'Josefin Slab': {
    ascenders: {
      [true]: -.03,
      [false]: -.37,
    },
    descenders: {
      [true]: .1,
      [false]: -.25,
    },
  },
  'Yellowtail': {
    ascenders: {
      [true]: -.03,
      [false]: -.37,
    },
    descenders: {
      [true]: .1,
      [false]: -.25,
    },
  }
}