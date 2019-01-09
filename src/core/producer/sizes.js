import { getTextOffset } from '../utils/text-utils';

import _ from 'lodash';

export function computeSizes(structure, scaleDominant) {
  const size = {...structure.content._computed.maxBB}
  const dominant = _.find(structure.content.elements, el => el.type === 'dominant');

  const dominantSettings = {
    maxWidth: size.w,
    maxOptimalWidth: size.w,
    maxOptimalFontSize: 300,
    minFontSize: MIN_FONT_SIZE,
  }

  if(scaleDominant) {
    scaleElementFontSizes(dominant, scaleDominant);
  } 
  else {
    computeElementsFontSizes([dominant], dominantSettings);
  }

  computeGroupLogoSize(structure.header, size);
  computeGroupLogoSize(structure.footer, size);

  computeGroupSizes(structure.header, dominant, size);
  computeGroupSizes(structure.footer, dominant, size);
  computeGroupSizes(structure.content, dominant, size);
}

function computeGroupSizes(group, dominant, size) {
  if(!group) return;

  const types = _.groupBy(group.elements, el => el.type);
  
  const smallsSettings = {
    maxWidth: size.w,
    maxOptimalWidth: Math.min(size.w, dominant._computed.w * 1.25), // TODO: Why 1.25
    maxOptimalFontSize: dominant._computed.fontSize * .25,
    minFontSize: MIN_FONT_SIZE,
    optimalWidth: dominant._computed.w,
  }
  computeElementsFontSizes(types.small, smallsSettings)
    
  const smallSize = types.small && types.small[0]._computed.fontSize
  const bridgesSettings = {
    maxWidth: size.w,
    maxOptimalWidth: Math.min(dominant._computed.w * 1.25), // TODO: Why 1.25
    maxOptimalFontSize: (smallSize || smallsSettings.maxOptimalFontSize) * 1.25,
    minFontSize: MIN_FONT_SIZE,
    optimalWidth: dominant._computed.w,
  }
  computeElementsFontSizes(types.bridge, bridgesSettings)

  // TODO: Handle better...
  _.forEach(types.image, img => {
    img._computed.h = size.h * .3;
  })

  _.forEach(types.bar, bar => {
    bar._computed.h = bar.height.value;
  })
}

// function computeDominateFontSize(dominant, structure, size) {
//   const measuredWidth = measureText(dominant);
//   const lines = dominant._computed.lines;

//   // First ignore height restrictions and figure out width
//   const optimalFontSize = _.clamp(
//     FONT_MEASURE_SIZE * size.w / w,
//     settings.minOptimalFontSize,
//     settings.maxOptimalFontSize,
//   );

//   const fontSize = slerp(
//     MIN_DOMINANT_FONT_SIZE,
//     optimalFontSize,
//     FONT_MEASURE_SIZE * (size.w / measuredWidth),
//     dominant.font.size
//   );
  
//   const width = measuredWidth * (fontSize / FONT_MEASURE_SIZE)
//   lines.forEach(line => {
//     if(dominant.font.fitToWidth) {
//       line.fontSize = FONT_MEASURE_SIZE * (width / line.w);
//       line.h = line.h * (width / line.w);
//       line.w = width;
//     } else {
//       line.fontSize = fontSize;
//       line.h = line.h * (fontSize / FONT_MEASURE_SIZE)
//       line.w = line.w * (fontSize / FONT_MEASURE_SIZE)
//     }
//   })

//   const spaceBetweenLines = fontSize * (1 - dominant.font.lineHeight);
//   const height = _.sumBy(lines, line => line.h) + spaceBetweenLines * (lines.length - 1)


//   // TODO: This might be better done after all font measurements have been assigned
//   // if(size.h < height) {
//   //   // TODO: This doesn't consider if fontSizes are too small now...
//   //   const ratio = size.h / height;
//   //   lines.forEach(line => {
//   //     line.fontSize *= ratio;
//   //     line.h *= ratio;
//   //     line.w *= ratio;
//   //   })
//   //   height *= ratio;
//   //   width *= ratio;
//   //   fontSize *= ratio;
//   // }
  
//   dominant._computed.fontSize = fontSize;
//   dominant._computed.w = width;
//   dominant._computed.h = height;
// }

function computeElementsFontSizes(elements, settings) {
  if(!elements || !elements.length) return;
    
  const maxMeasuredWidth = _.max(elements.map(measureText))

  const optimalFontSize = Math.min(
    FONT_MEASURE_SIZE * (settings.maxOptimalWidth / maxMeasuredWidth),
    settings.maxOptimalFontSize,
  )

  elements.forEach((el, i) => {

    const fontSize = slerp(
      settings.minFontSize,
      optimalFontSize,
      FONT_MEASURE_SIZE * (settings.maxWidth / maxMeasuredWidth),
      el.font.size
    );
  
    const width = maxMeasuredWidth * (fontSize / FONT_MEASURE_SIZE)

    const lines = el._computed.lines;
    lines.forEach(line => {
      if(el.font.fitToWidth) {
        const _width = el.type === 'dominant' ? width : settings.optimalWidth
        line.fontSize = FONT_MEASURE_SIZE * (_width / line.w);
        line.h = line.h * (width / line.w);
        line.w = width;
      } else {
        line.fontSize = fontSize;
        line.h = line.h * (fontSize / FONT_MEASURE_SIZE)
        line.w = line.w * (fontSize / FONT_MEASURE_SIZE)
      }
    })
  
    const spaceBetweenLines = fontSize * (el.font.lineHeight - 1);    
    el._computed.fontSize = fontSize;
    el._computed.w = _.maxBy(lines, line => line.w).w;
    el._computed.h = _.sumBy(lines, line => line.h) + spaceBetweenLines * (lines.length - 1);
  })
}

export function scaleElementFontSizes(el, scale) {
  el._computed.lines.forEach(line => {        
    line.fontSize *= scale;
    line.h *= scale;
    line.w *= scale;
  })
  el._computed.fontSize *= scale;
  el._computed.h = el._computed.py * 2 + el._computed.h * scale;
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

// Calculating width and height: https://github.com/rougier/freetype-gl/issues/177
// https://support.microsoft.com/en-us/help/200262/how-to-fit-text-in-a-rectangle
// https://stackoverflow.com/questions/5833017/java-is-there-a-linear-correlation-between-a-fonts-point-size-and-its-rendered
// These suggest that fonts don't scale perfectly linearly, but maybe close enough?
function measureText(t) {
  const lines = t._computed.lines;
  
  lines.forEach((line, i) => {
    const isArray = Array.isArray(line.text);
    const str = isArray ? line.text.join('') : line.text;
    
    line.w = measureTextWidth(str, t.font);
    line.ratio = FONT_MEASURE_SIZE / line.w;

    if(t.font.letterSpacing) {
      line.w += (str.length - 1) * t.font.letterSpacing * FONT_MEASURE_SIZE;
    }
    if(isArray && t.divider) {
      line.w += (line.text.length - 1) * FONT_MEASURE_SIZE * t.divider.size;
    }

    line.offset = getTextOffset(str, t.font.family);
    line.h = FONT_MEASURE_SIZE * (1 + line.offset.top + line.offset.bottom)
  });

  return _.maxBy(lines, l => l.w).w
}

// x 0-1 scales between MIN & OPTIMUM; 1-2 scales between OPTIMUM & MAX
function slerp(min, optimum, max, x) {
  return x < 1
    ? (1 - x) * min + x * optimum
    : (2 - x) * optimum + (x - 1) * max
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

const MIN_FONT_SIZE = 16;
const FONT_MEASURE_SIZE = 20;
