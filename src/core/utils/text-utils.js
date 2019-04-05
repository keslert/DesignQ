


export function getTextOffset(str, family, ignoreAscenders, ignoreDescenders) {
  const font = DQ_FONTS[family]
  if(!font) {
    return { top: 0, bottom: 0 };
  }

  const ascenders = font.ascenders || defaultAscenders;
  const descenders = font.descenders || defaultDescenders;

  return {
    top: !ignoreAscenders && ascenders.test(str)
      ? font.ascender
      : font.xHeight,
    bottom: !ignoreDescenders && descenders.test(str)
      ? font.descender
      : font.baseline,
  }
}


const defaultAscenders = /[A-Z1-9hdfkl&]/
const defaultDescenders = /[gjqpy]/
export const DQ_FONTS = {
  'Mr Dafoe': {
    weights: [400],
    styles: ['normal'],
    ascender: -0.15,
    xHeight: -0.43,
    baseline: -0.17,
    descender: 0.15,
  },
  'Exo': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.09,
    xHeight: -0.29,
    baseline: -0.17,
    descender: 0.07,
  },
  'Libre Baskerville': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.08,
    xHeight: -0.31,
    baseline: -0.15,
    descender: 0.1,
  },
  'Lilita One': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.14,
    xHeight: -0.34,
    baseline: -0.15,
    descender: 0.03,
  },
  'Raleway': {
    weights: [400, 700, 900],
    styles: ['normal', 'italic'],
    ascender: -0.13,
    xHeight: -0.32,
    baseline: -0.15,
    descender: 0.07,
  },
  'Arvo': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.1,
    xHeight: -0.335,
    baseline: -0.15,
    descender: 0.07,
  },
  'Grand Hotel': {
    weights: [400],
    styles: ['normal'],
    ascender: -0.07,
    xHeight: -0.38,
    baseline: -0.2,
    descender: 0.17,
  },
  'Lato': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.17,
    xHeight: -0.38,
    baseline: -0.11,
    descender: 0.06,
  },
  'Nunito': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.12,
    xHeight: -0.33,
    baseline: -0.17,
    descender: 0.01,
  },
  'Fredoka One': {
    weights: [400],
    styles: ['normal'],
    ascender: -0.12,
    xHeight: -0.33,
    baseline: -0.14,
    descender: 0.08,
  },
  'Open Sans': {
    weights: [400, 700, 900],
    styles: ['normal', 'italic'],
    ascender: -0.17,
    xHeight: -0.34,
    baseline: -0.11,
    descender: 0.11,
  },
  'Oswald': {
    weights: [400, 700],
    styles: ['normal'],
    ascender: -0.13,
    xHeight: -0.37,
    baseline: -0.05,
    descender: 0.12,
  },
  'Quicksand': {
    weights: [400, 700],
    styles: ['normal'],
    ascender: -0.165,
    xHeight: -0.35,
    baseline: -0.13,
    descender: 0.06,
  },
  'Permanent Marker': {
    weights: [400],
    styles: ['normal'],
    descenders: /[]/,
    ascender: -.16,
    xHeight: -.31,
    baseline: -.09,
    descender: -.09,
  },
  'Muli': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -.15,
    xHeight: -.37,
    baseline: -.125,
    descender: .1,
  },
  'Josefin Slab': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -.04,
    xHeight: -.375,
    baseline: -.25,
    descender: .0,
  },
  'Yellowtail': {
    weights: [400],
    styles: ['normal'],
    ascender: -0.13,
    xHeight: -0.44,
    baseline: -0.16,
    descender: 0.1,
  },
  'Chewy': {
    weights: [400],
    styles: ['normal'],
    ascender: -.1,
    xHeight: -.27,
    baseline: -.15,
    descender: .12,
  },
  'Roboto': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.12,
    xHeight: -0.3,
    baseline: -0.16,
    descender: 0.04,
  },
  'Roboto Condensed': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -.125,
    xHeight: -.315,
    baseline: -.16,
    descender: 0.05,
  },
  'Cormorant Unicase': {
    weights: [400, 700],
    styles: ['normal'],
    ascender: -.185,
    xHeight: -.35,
    baseline: -.18,
    descender: -.18,
  },
  "Londrina Sketch": {
    weights: [400],
    styles: ['normal'],
    ascender: -0.15,
    xHeight: -0.35,
    baseline: -0.16,
    descender: 0.07,
  },
  'Playfair Display': {
    weights: [400, 700, 900],
    styles: ['normal', 'italic'],
    ascender: -.2,
    xHeight: -.39,
    baseline: -.09,
    descender: .09,
  },
  'Source Sans Pro': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.19,
    xHeight: -0.36,
    baseline: -0.15,
    descender: 0.06,
  },
  'Montserrat': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.15,
    xHeight: -0.33,
    baseline: -0.14,
    descender: 0.05,
  },
  'PT Sans': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.16,
    xHeight: -0.36,
    baseline: -0.13,
    descender: 0.06,
  },
  'Bebas Neue': {
    weights: [400],
    styles: ['normal'],
    supportsLowerCase: false,
    ascender: -.09,
    xHeight: -.09,
    baseline: -.2,
    descender: -.2,
  },
  'Creepster': {
    weights: [400],
    styles: ['normal'],
    supportsLowerCase: false,
    ascender: -0.13,
    xHeight: -0.13,
    baseline: -0.13,
    descender: -0.13,
  },
  'Knewave': {
    weights: [400],
    styles: ['normal'],
    ascender: -0.12,
    xHeight: -0.42,
    baseline: -0.07,
    descender: 0.19,
  },
  'Abril Fatface': {
    weights: [400],
    styles: ['normal'],
    ascender: -0.17,
    xHeight: -0.4,
    baseline: -0.12,
    descender: 0.11,
  },
  'Sanchez': {
    weights: [400],
    styles: ['normal', 'italic'],
    ascender: -0.13,
    xHeight: -0.365,
    baseline: -0.14,
    descender: 0.09,
  },
  'Voga': {
    weights: [400],
    styles: ['normal'],
    ascender: -.142,
    xHeight: -.335,
    baseline: -.2,
    descender: .1,
  },
  'Norwester': {
    weights: [400],
    styles: ['normal'],
    file: 'custom',
    supportsLowerCase: false, // It's small caps and Caps
    ascender: -0.09,
    xHeight: -0.2,
    baseline: -0.1,
    descender: -0.1,
  },
  'League Gothic': {
    weights: [400],
    styles: ['normal', 'italic'],
    file: 'custom',
    ascender: -0.09,
    xHeight: -0.28,
    baseline: -0.17,
    descender: 0.02,
  },
  'League Spartan': {
    weights: [700],
    styles: ['normal'],
    file: 'custom',
    ascender: 0.06,
    xHeight: -0.25,
    baseline: -0.23,
    descender: 0.04,
  },
  'Cooper Hewitt': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    file: 'custom',
    ascender: 0.04,
    xHeight: -0.22,
    baseline: -0.25,
    descender: -0.05,
  },
  'Peace Sans': {
    weights: [400],
    styles: ['normal'],
    file: 'custom',
    ascender: -0.1,
    xHeight: -0.26,
    baseline: -0.19,
    descender: 0.08,
  },
  'Aileron': {
    weights: [400, 700, 900],
    styles: ['normal', 'italic'],
    file: 'custom',
    ascender: -0.17,
    xHeight: -0.34,
    baseline: -0.13,
    descender: 0.07,
  },
  'Glacial Indifference': {
    weights: [400, 700],
    styles: ['normal'],
    file: 'custom',
    ascender: -0.16,
    xHeight: -0.41,
    baseline: -0.15,
    descender: 0.09,
  },
  'Kollektif': {
    weights: [400],
    styles: ['normal'],
    file: 'custom',
    ascender: -0.095,
    xHeight: -0.33,
    baseline: -0.19,
    descender: 0,
  },
  'Playlist': {
    weights: [400],
    styles: ['normal'],
    type: 'cursive',
    file: 'custom',
    ascender: -0.02,
    xHeight: -0.39,
    baseline: -0.16,
    descender: 0.15,
  },
  'Aleo': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    ascender: -0.18,
    xHeight: -0.39,
    baseline: -0.1,
    descender: 0.06,
  },
  'Special Elite': {
    weights: [400],
    styles: ['normal'],
    ascender: -0.01,
    xHeight: -0.22,
    baseline: -0.29,
    descender: -0.08,
  },
  'Vidaloka': {
    weights: [400],
    styles: ['normal'],
    ascender: -0.13,
    xHeight: -0.33,
    baseline: -0.17,
    descender: 0.05,
  },
  'Rubik One': {
    weights: [400],
    styles: ['normal'],
    file: 'custom',
    ascender: -0.11,
    xHeight: -0.29,
    baseline: -0.19,
    descender: 0.02,
  },
  'IM Fell English Pro': {
    weights: [400],
    styles: ['normal', 'italic'],
    file: 'custom',
    ascender: -0.09,
    xHeight: -0.32,
    baseline: -0.23,
    descender: 0.04,
  },
  'Gidole': {
    weights: [400],
    styles: ['normal'],
    file: 'custom',
    ascender: -0.17,
    xHeight: -0.36,
    baseline: -0.16,
    descender: 0.02,
  },
  'BodoniFLF': {
    weights: [400, 700],
    styles: ['normal', 'italic'],
    file: 'custom',
    ascender: -0.15,
    xHeight: -0.435,
    baseline: -0.17,
    descender: 0.07,
  },
  'Edo': {
    weights: [400],
    styles: ['normal'],
    file: 'custom',
    supportsLowerCase: false, // It's small caps and Caps
    ascender: -0.17,
    xHeight: -0.17,
    baseline: -0.13,
    descender: -0.13,
  },
  'Sifonn': {
    weights: [400],
    styles: ['normal'],
    file: 'custom',
    ascender: 0,
    xHeight: -0.24,
    baseline: -0.25,
    descender: -0.01,
  },
  'Sensei': {
    weights: [400],
    styles: ['normal'],
    file: 'custom',
    ascender: -0.11,
    xHeight: -0.31,
    baseline: -0.15,
    descender: 0.03,
  },
}

export const TextToWeight = {
  'Thin (100)': 100,
  'Extra Light (200)': 200,
  'Light (300)': 300,
  'Regular (400)': 400,
  'Medium (500)': 500,
  'Semi Bold (600)': 600,
  'Bold (700)': 700,
  'Extra Bold (800)': 800,
  'Heavy (900)': 900,
}

export const WeightToText = {
  100: 'Thin (100)',
  200: 'Extra Light (200)',
  300: 'Light (300)',
  400: 'Regular (400)',
  500: 'Medium (500)',
  600: 'Semi Bold (600)',
  700: 'Bold (700)',
  800: 'Extra Bold (800)',
  900: 'Heavy (900)',
}