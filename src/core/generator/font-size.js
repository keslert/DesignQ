import { getTextOffset } from '../utils/text-utils';

import _ from 'lodash';

export function computeFontSizes(structure) {
  const size = structure.content._computed.maxBB;
  const dominant = _.find(structure.content.elements, el => el.type === 'dominant');
  computeDominateFontSize(dominant, structure, size);

  computeGroupLogoSize(structure.header, size);
  computeGroupLogoSize(structure.footer, size);

  computeGroupFontSizes(structure.header, dominant, size);
  computeGroupFontSizes(structure.footer, dominant, size);

  // TODO: Subtract the actual estimated size of the header and footer.
  const contentSize = {...size};
  contentSize.h -= (structure.header ? 75 : 0) + (structure.footer ? 75 : 0)
  computeGroupFontSizes(structure.content, dominant, contentSize);
}

function computeDominateFontSize(dominant, structure, size) {
  const {width, height, offsets} = measureText(dominant);
  
  // TODO: this maybe should include number of lines?
  const heightUsage = _.sumBy(structure.content.elements, el => HEIGHT_WEIGHT[el.type]) 
  + (structure.header ? .1 : 0)
  + (structure.footer ? .1 : 0)
  
  const maxWidth = size.w;
  const maxHeight = size.h * (1 - heightUsage);
  let fontSize = Math.min(
    resizeLine(width, maxWidth, FONT_MEASURE_SIZE),
    resizeLine(height, maxHeight, FONT_MEASURE_SIZE),
    MAX_FONT_SIZE,
  )
  fontSize *= dominant.font.size;

  dominant._computed.fontSize = fontSize;
  dominant._computed.w = width * (fontSize / FONT_MEASURE_SIZE);
  dominant._computed.h = height * (fontSize / FONT_MEASURE_SIZE);
  dominant._computed.offsets = offsets;
}
  
function computeGroupFontSizes(group, dominant, size) {
  if(!group) return;

  const types = _.groupBy(group.elements, el => el.type);
  // Smalls
  const maxSmallSize = dominant._computed.fontSize * .25; // TODO: Why .25?
  _computeFontSize(
    types.small, 
    dominant,
    size,
    MIN_FONT_SIZE, 
    maxSmallSize
  )

  const smallSize = types.small && types.small[0]._computed.fontSize
  // Bridges
  _computeFontSize(
    types.bridge, 
    dominant,
    size,
    MIN_FONT_SIZE, 
    (smallSize || maxSmallSize) * 1.25, // TODO: Why 1.25?
  )
}

function _computeFontSize(items, dominant, size, minFontSize, maxFontSize) {
  if(!items || !items.length) return;
    
  const sizes = items.map(measureText)
  const widest = _.maxBy(sizes, s => s.width)
  const maxWidth = Math.min(size.w, dominant._computed.w * 1.1); // TODO: Why 1.1?

  const fontSize = _.clamp(
    maxWidth / widest.width * FONT_MEASURE_SIZE,
    minFontSize,
    maxFontSize,
  )

  items.forEach((item, i) => {
    const _fontSize = item.font.fitToWidth
      ? dominant._computed.w / sizes[i].width * FONT_MEASURE_SIZE
      : fontSize * item.font.size

    item._computed.fontSize = _fontSize;
    item._computed.w = sizes[i].width * (_fontSize / FONT_MEASURE_SIZE);
    item._computed.h = sizes[i].height * (_fontSize / FONT_MEASURE_SIZE);
    item._computed.offsets = sizes[i].offsets;

    item._computed.maxFontSize = maxFontSize;
    item._computed.minFontSize = minFontSize;
  })
}

function computeGroupLogoSize(group, size) {
  if(!group || !group.elements) return;

  const logo = _.find(group.elements, el => el.type === 'logo');
  if(logo) {
    const multiplier = Math.min(
      150 / logo.meta.height,
      size.w / 4 / logo.meta.width,
    ) * (logo.size || 1)

    logo._computed.w = logo.meta.width * multiplier;
    logo._computed.h = logo.meta.height * multiplier;
    logo._computed.fontSize = logo._computed.h;
  }
}


function resizeLine(oldWidth, newWidth, fontSize) {
  return newWidth * fontSize / oldWidth;
}



// Calculating width and height: https://github.com/rougier/freetype-gl/issues/177
// https://support.microsoft.com/en-us/help/200262/how-to-fit-text-in-a-rectangle
// https://stackoverflow.com/questions/5833017/java-is-there-a-linear-correlation-between-a-fonts-point-size-and-its-rendered
// These suggest that fonts don't scale perfectly linearly, but maybe close enough?
function measureText(t) {
  const lastIndex = t._computed.lines.length - 1;
  const dimensions = t._computed.lines.map((line, i) => {
    const isArray = Array.isArray(line);
    const str = isArray ? line.join('') : line;
    
    const width = measureTextWidth(str, t.font)
    const measured = { width };

    if(t.font.letterSpacing) {
      measured.width += (str.length - 1) * t.font.letterSpacing * FONT_MEASURE_SIZE;
    }
    if(isArray && t.divider) {
      measured.width += (line.length - 1) * FONT_MEASURE_SIZE * t.divider.size;
    }
    // TODO: Text flourishes

    measured.offset = getTextOffset(str, t.font.family);
    measured.height = FONT_MEASURE_SIZE * (lastIndex !== i ? t.font.lineHeight : 1) 
      + FONT_MEASURE_SIZE * (measured.offset.top + measured.offset.bottom);

    return measured;
  });

  
  return {
    width: _.maxBy(dimensions, d => d.width).width,
    height: _.sumBy(dimensions, d => d.height),
    offsets: dimensions.map(d => d.offset),
  }
}

// https://github.com/FormidableLabs/measure-text/blob/master/src/index.js
// https://developers.google.com/web/updates/2018/08/offscreen-canvas
const canvas = new OffscreenCanvas(600, 600);
const ctx = canvas.getContext('2d');
export const measureTextWidth = (text, font) => {
  const { family, weight, style } = font;
  ctx.font = `${weight} ${style} ${FONT_MEASURE_SIZE}px ${family}`;
  return ctx.measureText(text).width
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
const FONT_MEASURE_SIZE = 20;
