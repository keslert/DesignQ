import { getTextOffset } from '../utils/text-utils';
import _ from 'lodash';
import { CONTENT_GROUPS, withGroups } from '.';


// flyer
  // - border
  // - decor
  // - padding
  // flyerContent (doesn't constrain left & right & background is a separate div)
    // header
    // body
    // footer

export function computeSizes(template, scaleDominant) {
  const dominant = _.find(template.content.body.elements, el => el.type === 'dominant');

  computeDominant(template, dominant, scaleDominant);

  withGroups(template, group => computeGroupSizes(template, group, dominant))
}

function computeDominant(template, dominant, scale) {
  if(scale) {
    scaleElementFontSizes(dominant, scale);
    return;
  }

  const maxW = template.content.body._computed.maxW;
  const dominantSettings = {
    maxWidth: maxW,
    maxOptimalWidth: maxW,
    maxOptimalFontSize: 300,
    minFontSize: MIN_FONT_SIZE,
  }
  computeElementsFontSizes([dominant], dominantSettings);
}

function computeGroupSizes(template, group, dominant) {
  const maxW = group._computed.maxW;

  const types = _.groupBy(group.elements, el => el.type);


  // Canva Width = (5.33216*Max Characters + 45.7198)
  const headingSettings = {
    maxWidth: maxW,
    minFontSize: MIN_FONT_SIZE,

    maxOptimalWidth: maxW, // Math.min(maxW, dominant._computed.w * 1.05), // TODO: Why 1.05
    maxOptimalFontSize: 21.3, // Math.log(dominant._computed.fontSize) * 6,
    // maxOptimalWidth: 0.536921 * dominant._computed.w + 55.3845,
    maxOptimalWidth: (5.33216 * (types.heading ? types.heading[0]._computed.maxCharacters : 0) + 45.7198) * 1.3
  }
  computeElementsFontSizes(types.heading, headingSettings)

  computeElementsFontSizes(types.bridge, {
    ...headingSettings,
    maxOptimalFontSize: 21.2, // (smallSize || smallSettings.maxOptimalFontSize) * 1.25
    optimalFontSize: 0.0844872 * dominant._computed.fontSize + 7.86252
  })
  
  const bridge = types.bridge && types.bridge[0];
  computeElementsFontSizes(types.small, {
    ...headingSettings,
    maxOptimalFontSize: 18.6,
    optimalFontSize: bridge && (0.489407 * bridge._computed.fontSize + 5.22648),
    maxOptimalWidth: dominant._computed.w,
  })
    
  computeElementsFontSizes(types.paragraph, {
    ...headingSettings,
    maxOptimalFontSize: 16,
    optimalFontSize: bridge && (0.438561 * bridge._computed.fontSize + 4.55792),
    // maxOptimalWidth: dominant._computed.w,
    maxOptimalWidth: (3.10679 * (types.paragraph ? types.paragraph[0]._computed.maxCharacters : 0) + 62.8503) * 1.333,
  })

  _.forEach(types.icon, icon => {
    icon._computed.w = maxW * .25 * icon.size; // TODO: Better calc.
    if(icon.aspectRatio) {
      icon._computed.h = icon.aspectRatio * icon._computed.w;
    } else {
      icon._computed.h = icon.meta.height / icon.meta.width * icon._computed.w;
    }
  })

  _.forEach(types.image, img => {
    img._computed.w = maxW;
    img._computed.h = maxW * img.aspectRatio;
  })

  _.forEach(types.bar, bar => {
    bar._computed.h = bar.h;
    bar._computed.w = bar.w * maxW;
  })
}

function computeElementsFontSizes(elements, settings) {
  if(!elements || !elements.length) return;
    
  // the maximum lines measured width
  const maxMeasuredWidth = _.max(elements.map(measureText))

  const minMaxWidth = _.sortBy(elements, el => el.maxW)[0]._computed.maxW;
  const maxOptimalWidth = Math.min(minMaxWidth, settings.maxOptimalWidth);
  
  const optimalFontSizeByWidth = (FONT_MEASURE_SIZE * (maxOptimalWidth / maxMeasuredWidth) * .99);
  const optimalFontSize = _.clamp(
    settings.optimalFontSize || optimalFontSizeByWidth, // multiply by .99 to deal with rounding errors. Sometimes the fonts are barely too large and cause wordwrap.
    settings.minFontSize,
    settings.maxOptimalFontSize,
  )

  elements.forEach((el, i) => {

    const fontSize = slerp(
      settings.minFontSize,
      optimalFontSize,
      FONT_MEASURE_SIZE * (el._computed.maxW / maxMeasuredWidth),
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
  const c = el._computed;
  c.lines.forEach(line => {        
    line.fontSize *= scale;
    line.h *= scale;
    line.w *= scale;
  })
  c.fontSize *= scale;
  c.h = (c.h - c.pb - c.pt) * scale + c.pb + c.pt;
  // c.h = c.pt + c.pb + c.h * scale;
  c.w = c.w * scale;
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
export function measureText(t) {
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
const canvas = new OffscreenCanvas(800, 800);
const ctx = canvas.getContext('2d');
export const measureTextWidth = (text, font) => {
  const { family, weight, style } = font;
  ctx.font = `${weight} ${style} ${FONT_MEASURE_SIZE}px ${family}`;
  return ctx.measureText(text).width
}

const MIN_FONT_SIZE = 11;
const FONT_MEASURE_SIZE = 20;
