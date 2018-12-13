import { measureTextWidth } from "./text";
import _ from 'lodash';

export function computeFontSizes(structure) {
  const size = structure.content._computed.maxBB;
  const dominant = _.find(structure.content.elements, el => el.type === 'dominant');
  computeDominateFontSize(dominant, structure, size);

  computeGroupFontSizes(structure.header, dominant, size);
  computeGroupFontSizes(structure.footer, dominant, size);

  // TODO: Subtract the actual estimated size of the header and footer.
  const contentSize = {...size};
  contentSize.h -= (structure.header ? 75 : 0) + (structure.footer ? 75 : 0)
  computeGroupFontSizes(structure.content, dominant, contentSize);
}

function computeDominateFontSize(dominant, structure, size) {
  const {width, height, widestLine} = measureText(dominant);
  
  // TODO: this maybe should include number of lines?
  const heightUsage = _.sumBy(structure.content.elements, el => HEIGHT_WEIGHT[el.type]) 
  + (structure.header ? .1 : 0)
  + (structure.footer ? .1 : 0)
  
  const maxWidth = size.w;
  const maxHeight = size.h * (1 - heightUsage);
  const fontSize = Math.min(
    resizeLine(width, maxWidth, dominant.font.size),
    resizeLine(height, maxHeight, dominant.font.size),
    MAX_FONT_SIZE,
  )

  console.log('width:', width, dominant.font.size)
  console.log('maxWidth:', maxWidth, fontSize)

  dominant._computed.fontSize = fontSize;
  dominant._computed.w = width * (fontSize / dominant.font.size);
  dominant._computed.h = height * (fontSize / dominant.font.size); // NOT SURE IF THIS IS CORRECT.
}
  
function computeGroupFontSizes(group, dominant, size) {
  if(!group) return;

  const types = _.groupBy(group.elements, el => el.type);
  // Smalls
  _computeFontSize(
    types.small, 
    dominant,
    size,
    MIN_FONT_SIZE, 
    dominant._computed.fontSize * .25, // TODO: Why .25?
  )
  // Bridges
  _computeFontSize(
    types.bridge, 
    dominant,
    size,
    MIN_FONT_SIZE, 
    types.small[0]._computed.fontSize * 1.25, // TODO: Why 1.25?
  )
}

function _computeFontSize(items, dominant, size, minFontSize, maxFontSize) {
  if(!items || !items.length) return;
    
  const sizes = items.map(measureText)
  const widest = _.maxBy(sizes, s => s.width)
  const maxWidth = Math.min(size.w, dominant._computed.w * 1.1); // TODO: Why 1.1?

  const fontSize = _.clamp(
    maxWidth / widest.width * items[0].font.size,
    minFontSize,
    maxFontSize,
  )

  items.forEach((item, i) => {
    if(item.font.fitToWidth) {
      item._computed.fontSize = dominant._computed.w / sizes[i].width * item.font.size;
    } else {
      item._computed.fontSize = fontSize;
    }
    item._computed.maxFontSize = maxFontSize;
    item._computed.minFontSize = minFontSize;
  })
}


function resizeLine(oldWidth, newWidth, fontSize) {
  return newWidth * fontSize / oldWidth;
}



// Calculating width and height: https://github.com/rougier/freetype-gl/issues/177
// https://support.microsoft.com/en-us/help/200262/how-to-fit-text-in-a-rectangle
// https://stackoverflow.com/questions/5833017/java-is-there-a-linear-correlation-between-a-fonts-point-size-and-its-rendered
// These suggest that fonts don't scale perfectly linearly, but maybe close enough?
const LETTER_SPACING_RATIO = 1.0;
function measureText(t) {
  const font = t.font;

  const lastIndex = t._computed.lines.length - 1;
  const dimensions = t._computed.lines.map((line, i) => {
    const isArray = Array.isArray(line);
    const str = isArray ? line.join('') : line;
    
    const width = measureTextWidth(str, font)
    // measured.originalWidth = measured.width;
    const measured = { width };

    if(font.letterSpacing) {
      measured.letterSpacingWidth = (str.length - 1) * font.letterSpacing * font.size * LETTER_SPACING_RATIO;
      console.log('letterSpacingWidth:', measured.letterSpacingWidth);
      measured.width += measured.letterSpacingWidth;
    }

    // if(isArray && t.divider) {
    //   measured.dividerWidth = (line.length - 1) * font.size * 2;
    //   measured.width += measured.dividerWidth;
    // }

    // TODO: Use the font family to know the actual height.
    measured.height = font.size * .8 * (lastIndex !== i ? font.lineHeight : 1);

    return measured;
  });

  // TODO: Text flourishes can change the ratio.
  const widestLine = _.maxBy(dimensions, d => d.width)
  return {
    width: widestLine.width,
    height: _.sumBy(dimensions, d => d.height),
    widestLine,
  }
}

const HEIGHT_WEIGHT = {
  bar: .07,
  small: .07,
  bridge: .07,
  image: .3,
  dominant: 0, // ignore this
}

const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 180;