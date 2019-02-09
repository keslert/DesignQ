import { getTextOffset } from '../utils/text-utils';
import _ from 'lodash';

export function computeSizes(structure, scaleDominant) {
  const dominant = _.find(structure.content.elements, el => el.type === 'dominant');

  computeDominant(structure, dominant, scaleDominant);

  computeGroupLogoSize(structure.header);
  computeGroupLogoSize(structure.footer);
  computeGroupLogoSize(structure.content);

  computeGroupSizes(structure.header, dominant);
  computeGroupSizes(structure.footer, dominant);
  computeGroupSizes(structure.content, dominant);
}

function computeDominant(structure, dominant, scale) {
  if(scale) {
    scaleElementFontSizes(dominant, scale);
    return;
  }

  const bb = structure.content._computed.bb;
  const dominantSettings = {
    maxWidth: bb.w,
    maxOptimalWidth: bb.w,
    maxOptimalFontSize: 300,
    minFontSize: MIN_FONT_SIZE,
  }
  computeElementsFontSizes([dominant], dominantSettings);
}

function computeGroupSizes(group, dominant) {
  if(!group) return;


  const bb = group._computed.bb;

  const types = _.groupBy(group.elements, el => el.type);
  
  const smallSettings = {
    maxWidth: bb.w,
    maxOptimalWidth: Math.min(bb.w, dominant._computed.w * 1.05), // TODO: Why 1.05
    // maxOptimalFontSize: dominant._computed.fontSize * .25,
    maxOptimalFontSize: Math.log(dominant._computed.fontSize) * 6, // TODO: This needs work.
    minFontSize: MIN_FONT_SIZE,
    optimalWidth: dominant._computed.w,
  }
  computeElementsFontSizes(types.small, smallSettings)
  const smallSize = types.small && types.small[0]._computed.fontSize
    
  
  const paragraphSettings = {
    ...smallSettings,
    maxOptimalFontSize: (smallSize || smallSettings.maxOptimalFontSize) * 0.9,
  }
  computeElementsFontSizes(types.paragraph, paragraphSettings)
  
  const bridgeSettings = {
    ...smallSettings,
    maxOptimalFontSize: (smallSize || smallSettings.maxOptimalFontSize) * 1.25,
  }
  computeElementsFontSizes(types.bridge, bridgeSettings)

  const headingSettings = {
    ...bridgeSettings,
  }
  computeElementsFontSizes(types.heading, headingSettings)


  // TODO: Handle better...
  _.forEach(types.image, img => {
    img._computed.w = bb.w;
    if(img.aspectRatio) {
      img._computed.h = bb.w * img.aspectRatio;
    } else {
      img._computed.h = bb.h * .3;
    }
  })

  _.forEach(types.bar, bar => {
    bar._computed.h = bar.height.value;
  })
}

function computeElementsFontSizes(elements, settings) {
  if(!elements || !elements.length) return;
    
  const maxMeasuredWidth = _.max(elements.map(measureText))

  const optimalFontSize = _.clamp(
    FONT_MEASURE_SIZE * (settings.maxOptimalWidth / maxMeasuredWidth) * .99, // multiply by .99 to deal with rounding errors. Sometimes the fonts are barely too large and cause wordwrap.
    settings.minFontSize,
    settings.maxOptimalFontSize,
  )

  elements.forEach((el, i) => {

    const fontSize = slerp(
      settings.minFontSize,
      optimalFontSize,
      FONT_MEASURE_SIZE * (settings.maxWidth / maxMeasuredWidth),
      el.font.size
    );

    // const fontSize = optimalFontSize * el.font.size;
  
    const width = maxMeasuredWidth * (fontSize / FONT_MEASURE_SIZE)

    const lines = el._computed.lines;
    lines.forEach(line => {
      if(el.font.fitToWidth) {
        const _width = el.type === 'dominant' ? width : settings.optimalWidth
        line.fontSize = FONT_MEASURE_SIZE * (_width / line.w);
        line.h *= (_width / line.w);
        line.w = _width;
      } else {
        line.fontSize = fontSize;
        line.h *= (fontSize / FONT_MEASURE_SIZE)
        line.w *= (fontSize / FONT_MEASURE_SIZE)
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
  el._computed.h = el._computed.pt + el._computed.pb + el._computed.h * scale;
  el._computed.w = el._computed.w * scale;
}

function computeGroupLogoSize(group) {
  if(!group || !group.elements) return;

  const logo = _.find(group.elements, el => el.type === 'logo');
  if(logo) {
    const multiplier = Math.min(
      150 / logo.meta.height,
      group._computed.bb.w / 4 / logo.meta.width,
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
  const allText = _.flatMap(lines, line => line.text).join('')
  const offset = getTextOffset(allText, t.font.family, t.font.ignoreAscendersDescenders)
  
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

    line.offset = offset;
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

const MIN_FONT_SIZE = 14;
const FONT_MEASURE_SIZE = 20;
