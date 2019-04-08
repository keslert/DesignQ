import get from 'lodash/get';
import chroma from 'chroma-js';
import { getOptimalBackgroundColor, getOptimalForegroundColor } from '../generator/color';
import { DQ_FONTS } from '../utils/text-utils';
import { getDescendants } from '../utils/template-utils';
import _ from 'lodash';
import { darkenColor } from '../templates';
import { getSolidColors } from '../utils/color-utils';

// Validation mutates template
export function resolveItem(item, oldItem, update) {


  // palette
  // if(!_.isEqual(item._root.palette, oldItem._root.palette)) {
    resolveTemplatePalette(item._root);
    // resolvePaletteColors(item._root);
  // }
  
  // font
  if(item.lines && item.font.family !== oldItem.font.family) {
    resolveFont(item.font)
  }

  // background and foreground colors
  if(!_.isEqual(item.background, oldItem.background)) {
    resolveItemColors(item);
  }
}

export function resolveItemColors(item) {
  const palette = item._root.palette;
  const descendants = getDescendants(item);
  
  descendants.forEach(item => {
    const color = get(item, ['background', 'color']);
    if(color) {
      item.background.color = getOptimalBackgroundColor(
        item, 
        palette, 
        _.uniq([color.paletteKey, 'light', 'dark'])
      )
      // resolveBackgroundColor(color, palette, item);
    }
    if(item.color) {
      item.color = getOptimalForegroundColor(
        item, 
        palette, 
        _.uniq([item.color.paletteKey, 'dark', 'light'])
      );
      // item.color = resolveForegroundColor(item.color, palette, item);
    }
  })
}

function resolveFont(font) {
  const family = DQ_FONTS[font.family]
  const weights = family.weights;
  if(!weights.includes(font.weight)) {
    font.weight = _.sortBy(weights, w => {
      const diff = font.weight - w;
      const multiplier = (font.weight < 400 && diff < 0) ? -10 : 1
      return diff * multiplier;
    })[0];
  }

  const styles = family.styles;
  if(!styles.includes(font.style)) {
    font.style = styles[0];
  }
}

function resolveTemplatePalette(template) {
  const palette = _.chain(template._all)
    .flatMap(item => [item.color, get(item, ['background', 'color'])])
    .filter()
    .flatMap(getSolidColors)
    .uniqBy(color => color.paletteKey)
    .map(color => [color.paletteKey, color.color])
    .fromPairs()
    .value();

  // Put back in the original colors
  _.forEach(template.palette, (color, key) => {
    if(!key.startsWith('user-defined')) {
      palette[key] = color;
    }
  })

  template.palette = palette;
}

function resolvePaletteColors(template) {
  // TODO: Ensure the palette has adequate contrasting colors?
  // Repick darks and lights?

  [...template._containers, ...template._elements].forEach(surface => {
    const color = get(surface, ['background', 'color']);
    if(color) {
      getOptimalBackgroundColor(surface, template.palette, _.uniq([color.paletteKey, 'light', 'dark']));
      // resolveBackgroundColor(color, template.palette, surface);
    }
  })
  
  template._elements.forEach(el => {
    if(el.color) {
      getOptimalForegroundColor(el, template.palette, _.uniq([el.color.paletteKey, 'light', 'dark']));
      // resolveForegroundColor(el.color, template.palette, el);
    }
  })
}

function resolveColor(color, palette, surface, fallback) {
  switch(color.type) {
    case 'solid': 
      return resolveSolidColor(color, palette, surface, fallback);
    case 'linear':
      return resolveLinearColor(color, palette, surface, fallback);
  }
}

function resolveForegroundColor(color, palette, item) {
  // TODO: Add minimal contrast?
  return resolveColor(color, palette, item, getOptimalForegroundColor)
}

function resolveBackgroundColor(color, palette, surface) {
  // TODO: Add minimal contrast?
  return resolveColor(color, palette, surface, getOptimalBackgroundColor)
}

function resolveSolidColor(color, palette, surface, fallback) {
  if(palette[color.paletteKey]) {
    return {
      ...color,
      color: palette[color.paletteKey]
    }
  }
  else {
    return fallback(surface, palette);
  }
}

function resolveLinearColor(color, palette, surface, fallback) {
  const c1 = resolveSolidColor(color.color, palette, surface, fallback);

  // TODO: This is going to mess up custom colors...
  const c2 = resolveSolidColor(color.colorB, palette, surface, () => {
    if(color.colorB.colorTransform) {
      const transform = color.colorB.colorTransform;
      const color = palette[transform.paletteKey] || c1.color;
      return {
        ...color.colorB,
        color: transformColor(color, transform)
      }
    }
    return darkenColor(c1);
  })

  return {
    ...color,
    color: c1,
    colorB: c2,
  }
}

function transformColor(colorStr, transform) {
  if(transform.darken) {
    return chroma(colorStr).darken(transform.darken);
  }
  return colorStr;
}