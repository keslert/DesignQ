


export function getTextOffset(str, family, ignoreAscendersDescenders) {
  const font = DQ_FONTS[family]
  const ascenders = font.ascenders || defaultAscenders;
  const descenders = font.descenders || defaultDescenders;

  return {
    top: !ignoreAscendersDescenders && ascenders.test(str)
      ? font.ascender
      : font.xHeight,
    bottom: !ignoreAscendersDescenders && descenders.test(str)
      ? font.descender
      : font.baseline,
  }
}


const defaultAscenders = /[A-Z1-9hdfkl&]/
const defaultDescenders = /[gjqpy]/
export const DQ_FONTS = {
  'Permanent Marker': {
    descenders: /[]/,
    ascender: -.16,
    xHeight: -.31,
    baseline: -.09,
    descender: -.09,
  },
  'Muli': {
    ascender: -.15,
    xHeight: -.37,
    baseline: -.125,
    descender: .1,
  },
  'Josefin Slab': {
    ascender: -.04,
    xHeight: -.375,
    baseline: -.25,
    descender: .0,
  },
  'Yellowtail': {
    ascender: -.13,
    xHeight: -.44,
    baseline: -.15,
    descender: .1,
  },
  'Chewy': {
    ascender: -.1,
    xHeight: -.27,
    baseline: -.15,
    descender: .12,
  },
  'Roboto Condensed': {
    ascender: -.125,
    xHeight: -.315,
    baseline: -.16,
    descender: 0.05,
  },
  'Cormorant Unicase': {
    ascender: -.185,
    xHeight: -.35,
    baseline: -.18,
    descender: -.18,
  },
  'Londrina Sketch': {
    ascender: -.142,
    xHeight: -.35,
    baseline: -.15,
    descender: .07,
  },
  'Playfair Display': {
    ascender: -.2,
    xHeight: -.39,
    baseline: -.08,
    descender: .09,
  },
  'Bebas Neue': {
    supportsLowerCase: false,
    ascender: -.09,
    xHeight: -.09,
    baseline: -.2,
    descender: -.2,
  },
  'Voga': {
    ascender: -.142,
    xHeight: -.335,
    baseline: -.2,
    descender: .1,
  },
}