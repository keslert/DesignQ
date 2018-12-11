import { measureTextWidth } from "./text";
import _ from 'lodash';

export function computeFontSize(structure, boxSize) {
  
  const types = _.groupBy(structure.content.elements, el => el.type);
  
  computeDominateFontSize(types.dominant[0], structure, boxSize);
  
  // Smalls
  _computeFontSize(
    types.small, 
    types.dominant[0],
    MIN_FONT_SIZE, 
    types.dominant[0]._computed.fontSize / 4 // TODO: Why 4?
  )
  // Bridges
  _computeFontSize(
    types.bridge, 
    types.dominant[0],
    MIN_FONT_SIZE, 
    types.small[0]._computed.fontSize * 1.25,
  )
  // Footer
  _computeFontSize(
    types.footer,
    types.dominant[0],
    types.small[0]._computed.fontSize, 
    types.small[0]._computed.fontSize,
  )
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

function _computeFontSize(items, dominant, minFontSize, maxFontSize) {
  if(!items || !items.length) return;

  const sizes = items.map(measureText)
  const widest = _.maxBy(sizes, s => s.width)
  const maxWidth = dominant._computed.w * 1.1; // TODO: Why 1.1?

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
function measureText(textObj) {
  // TODO: Text flourishes can change the ratio.
  const maxWidth = _.max(textObj._computed.lines.map(line => measureTextWidth(
    line,
    textObj.font.family,
    `${textObj.font.size}px`,
    textObj.font.weight,
    textObj.font.style,
  )));

  const lineCount = textObj.lines.length;
  // Note: This height is only an estimate since the actual lineHeight may be different.
  const height = 
    (textObj.font.size * textObj.font.lineHeight * lineCount - 1) 
    + textObj.font.size // don't include the lineHeight on the last line

  return {
    width: maxWidth,
    height: height,
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