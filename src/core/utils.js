// TODO: Calculate 

export function getBackgroundStyle(bg) {
  switch(bg.type) {
    case 'image': return `url(${bg.url}) no-repeat`;
    case 'solid': return bg.color;
    default: return 'none';
  }
}

export function getColorStyle(c) {
  if(!c) return null;
  switch(c.type) {
    default: return c.color
  }
}

export function getUnitStyle({value, unit}) {
  return value + unit;
}

export function getBorderStyles(border) {
  if(!border) return {};

  const value = `${border.width}px solid ${border.color}`;
  if(border.edges.all) {
    return {border: value}
  }
  return {
    borderTop: border.edges.top ? value : null,
    borderBottom: border.edges.bottom ? value : null,
    borderLeft: border.edges.left ? value : null,
    borderRight: border.edges.right ? value : null,
  };
}


// TODO: Generate ascenders and descenders offsets for each of the fonts

const ascenderRegex = /[A-Z1-9hdfkl]/
export function hasAscender(str) {
  return ascenderRegex.test(str);
}

// some fonts have descenders for 3, 4, 5, 7, and 9
const descenderRegex = /[gjqpy]/
export function hasDescender(str) {
  return descenderRegex.test(str);
}

// TODO: 
export function getTextOffset(str, family, transform) {
  const isUppercase = transform === 'uppercase';

  const font = FONT_DETAILS[family]
  return {
    top: font.ascenders[isUppercase || hasAscender(str)],
    bottom: font.descenders[!isUppercase && hasDescender(str)],
  }
}

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
  'bebas-neue-by-fontfabric': {
    ascenders: {
      [true]: -.05,
      [false]: -.05,
    },
    descenders: {
      [true]: -.25, // 
      [false]: -.25,
    },
  },
  'josefin-slab': {
    ascenders: {
      [true]: -.13,
      [false]: -.37,
    },
    descenders: {
      [true]: .1,
      [false]: -.17,
    },
  }
}

