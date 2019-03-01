


export function getTextOffset(str, family, ignoreAscendersDescenders) {
  const font = DQ_FONTS[family]
  if(!font) {
    return { top: 0, bottom: 0 };
  }

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
  'Mr Dafoe': {
    ascender: -0.15,
    xHeight: -0.43,
    baseline: -0.17,
    descender: 0.15,
  },
  'Exo': {
    ascender: -0.09,
    xHeight: -0.29,
    baseline: -0.17,
    descender: 0.07,
  },
  'Libre Baskerville': {
    ascender: -0.08,
    xHeight: -0.31,
    baseline: -0.15,
    descender: 0.1,
  },
  'Lilita One': {
    ascender: -0.14,
    xHeight: -0.34,
    baseline: -0.15,
    descender: 0.03,
  },
  'Raleway': {
    ascender: -0.13,
    xHeight: -0.32,
    baseline: -0.15,
    descender: 0.07,
  },
  'Arvo': {
    ascender: -0.1,
    xHeight: -0.335,
    baseline: -0.15,
    descender: 0.07,
  },
  'Grand Hotel': {
    ascender: -0.07,
    xHeight: -0.38,
    baseline: -0.2,
    descender: 0.17,
  },
  'Lato': {
    ascender: -0.17,
    xHeight: -0.38,
    baseline: -0.11,
    descender: 0.06,
  },
  'Nunito': {
    ascender: -0.12,
    xHeight: -0.33,
    baseline: -0.17,
    descender: 0.01,
  },
  'Fredoka One': {
    ascender: -0.12,
    xHeight: -0.33,
    baseline: -0.14,
    descender: 0.08,
  },
  'Open Sans': {
    ascender: -0.17,
    xHeight: -0.34,
    baseline: -0.11,
    descender: 0.11,
  },
  'Oswald': {
    ascender: -0.13,
    xHeight: -0.37,
    baseline: -0.05,
    descender: 0.12,
  },
  'Quicksand': {
    ascender: -0.165,
    xHeight: -0.35,
    baseline: -0.13,
    descender: 0.06,
  },
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
    ascender: -0.13,
    xHeight: -0.44,
    baseline: -0.16,
    descender: 0.1,
  },
  'Chewy': {
    ascender: -.1,
    xHeight: -.27,
    baseline: -.15,
    descender: .12,
  },
  'Roboto': {
    ascender: -0.12,
    xHeight: -0.3,
    baseline: -0.16,
    descender: 0.04,
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
  "Londrina Sketch": {
    ascender: -0.15,
    xHeight: -0.35,
    baseline: -0.16,
    descender: 0.07,
  },
  'Playfair Display': {
    ascender: -.2,
    xHeight: -.39,
    baseline: -.09,
    descender: .09,
  },
  'Source Sans Pro': {
    ascender: -0.19,
    xHeight: -0.36,
    baseline: -0.15,
    descender: 0.06,
  },
  'Montserrat': {
    ascender: -0.15,
    xHeight: -0.33,
    baseline: -0.14,
    descender: 0.05,
  },
  'PT Sans': {
    ascender: -0.1,
    xHeight: -0.31,
    baseline: -0.19,
    descender: 0.01,
  },
  'Bebas Neue': {
    supportsLowerCase: false,
    ascender: -.09,
    xHeight: -.09,
    baseline: -.2,
    descender: -.2,
  },
  'Creepster': {
    supportsLowerCase: false,
    ascender: -0.13,
    xHeight: -0.13,
    baseline: -0.13,
    descender: -0.13,
  },
  'Knewave': {
    ascender: -0.12,
    xHeight: -0.42,
    baseline: -0.07,
    descender: 0.19,
  },
  'Abril Fatface': {
    ascender: -0.17,
    xHeight: -0.4,
    baseline: -0.12,
    descender: 0.11,
  },
  'Sanchez': {
    ascender: -0.13,
    xHeight: -0.365,
    baseline: -0.14,
    descender: 0.09,
  },
  'Voga': {
    ascender: -.142,
    xHeight: -.335,
    baseline: -.2,
    descender: .1,
  },
  'Norwester': {
    file: 'custom',
    supportsLowerCase: false, // It's small caps and Caps
    ascender: -0.09,
    xHeight: -0.2,
    baseline: -0.1,
    descender: -0.1,
  },
  'League Gothic': {
    file: 'custom',
    ascender: -0.09,
    xHeight: -0.28,
    baseline: -0.17,
    descender: 0.02,
  },
  'League Spartan': {
    file: 'custom',
    ascender: 0.06,
    xHeight: -0.25,
    baseline: -0.23,
    descender: 0.04,
  },
  'Cooper Hewitt': {
    file: 'custom',
    ascender: 0.04,
    xHeight: -0.22,
    baseline: -0.25,
    descender: -0.05,
  },
  'Peace Sans': {
    file: 'custom',
    ascender: -0.1,
    xHeight: -0.26,
    baseline: -0.19,
    descender: 0.08,
  },
  'Aileron': {
    file: 'custom',
    ascender: -0.17,
    xHeight: -0.34,
    baseline: -0.13,
    descender: 0.07,
  },
  'Glacial Indifference': {
    file: 'custom',
    ascender: -0.16,
    xHeight: -0.41,
    baseline: -0.15,
    descender: 0.09,
  },
  'Kollektif': {
    file: 'custom',
    ascender: -0.095,
    xHeight: -0.33,
    baseline: -0.19,
    descender: 0,
  },
  'Playlist': {
    type: 'cursive',
    file: 'custom',
    ascender: -0.02,
    xHeight: -0.39,
    baseline: -0.16,
    descender: 0.15,
  },
  'Aleo': {
    ascender: -0.18,
    xHeight: -0.39,
    baseline: -0.1,
    descender: 0.06,
  },
  'Special Elite': {
    ascender: -0.01,
    xHeight: -0.22,
    baseline: -0.29,
    descender: -0.08,
  },
  'Vidaloka': {
    ascender: -0.13,
    xHeight: -0.33,
    baseline: -0.17,
    descender: 0.05,
  },
  'Rubik One': {
    file: 'custom',
    ascender: -0.11,
    xHeight: -0.29,
    baseline: -0.19,
    descender: 0.02,
  },
  'IM Fell English Pro': {
    file: 'custom',
    ascender: -0.09,
    xHeight: -0.32,
    baseline: -0.23,
    descender: 0.04,
  },
  'Gidole': {
    file: 'custom',
    ascender: -0.17,
    xHeight: -0.36,
    baseline: -0.16,
    descender: 0.02,
  },
  'BodoniFLF': {
    file: 'custom',
    ascender: -0.15,
    xHeight: -0.435,
    baseline: -0.17,
    descender: 0.07,
  },
  'Edo': {
    file: 'custom',
    supportsLowerCase: false, // It's small caps and Caps
    ascender: -0.17,
    xHeight: -0.17,
    baseline: -0.13,
    descender: -0.13,
  },
  'Sifonn': {
    file: 'custom',
    ascender: 0,
    xHeight: -0.24,
    baseline: -0.25,
    descender: -0.01,
  },
  'Sensei': {
    file: 'custom',
    ascender: -0.11,
    xHeight: -0.31,
    baseline: -0.15,
    descender: 0.03,
  },
}

const FONT_SUBSTITUTES = {
  'Norwester': '',
  'Kollektif': '',
  'League Spartan': '',
  'Sifonn': '',
  'League Gothic': '',
  'Bebas Neue': '',
  'Peace Sans': '',
  'Aileron': '',
  'Aleo': '',
  'Voga': '',
  'Glacial Indifference': '',
  'Cooper Hewitt': '',
}