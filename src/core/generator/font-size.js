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
  const {width, height} = measureText(dominant);
  
  // TODO: this maybe should include number of lines?
  const heightUsage = _.sumBy(structure.content.elements, el => HEIGHT_WEIGHT[el.type]) 
  + (structure.header ? .1 : 0)
  + (structure.footer ? .1 : 0)
  
  const maxWidth = size.w;
  const maxHeight = size.h * (1 - heightUsage);
  let fontSize = Math.min(
    maxWidth / width * dominant.font.size,
    maxHeight / height * dominant.font.size,
    MAX_FONT_SIZE,
  )
  dominant._computed.fontSize = fontSize;
  dominant._computed.w = width * (fontSize / dominant.font.size);
  dominant._computed.h = height * (fontSize / dominant.font.size); // NOT SURE IF THIS IS CORRECT.
  
  // TODO: how much padding?
  if(dominant.background) {
    dominant._computed.px = fontSize * .2;
    dominant._computed.py = fontSize * .15;
    dominant._computed.fontSize = fontSize * .6;
  }
  
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



// Calculating width and height: https://github.com/rougier/freetype-gl/issues/177
// https://support.microsoft.com/en-us/help/200262/how-to-fit-text-in-a-rectangle
// https://stackoverflow.com/questions/5833017/java-is-there-a-linear-correlation-between-a-fonts-point-size-and-its-rendered
// These suggest that fonts don't scale perfectly linearly, but maybe close enough?
function measureText(textEl) {
  // TODO: Text flourishes can change the ratio.
  const maxWidth = _.max(textEl._computed.lines.map(line => {
    const isArray = Array.isArray(line);
    const str = isArray ? line.join('') : line;
    let width = measureTextWidth(str, textEl.font)

    if(isArray && textEl.divider) {
      width += (line.length - 1) * textEl.font.size * 2;
    }

    return width;
  }));

  const lineCount = textEl.lines.length;
  // Note: This height is only an estimate since the actual lineHeight may be different.
  const height = 
    (textEl.font.size * textEl.font.lineHeight * lineCount - 1) 
    + textEl.font.size // don't include the lineHeight on the last line

  return {
    width: maxWidth,
    height: height * .8, // TODO: Use the font family to know the actual height difference.
  }
}

const HEIGHT_WEIGHT = {
  bar: .07,
  small: .07,
  bridge: .07,
  image: .3,
  dominant: 0, // ignore this
  footer: .1,
  header: .1,
}
const MIN_FONT_SIZE = 14;
const MAX_FONT_SIZE = 140;