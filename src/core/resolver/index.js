import get from 'lodash/get';
import chroma from 'chroma-js';
import { getOptimalBackgroundColor } from '../generator/color';

// Validation mutates template
export function resolveSurface(surface, oldSurface, update) {
  // palettes
  const palette = surface._root.palette;

  if(!_.isEqual(palette, oldSurface._root.palette)) {
    resolvePalette(palette)
    resolvePaletteColors(surface._root, oldSurface._root);
  }

  // surface background and foreground colors
  resolveSurfaceColors(surface, oldSurface);
}

function resolveSurfaceColors(surface, oldSurface) {
  [...template._surfaces, ...template._elements].forEach(surface => {
    const color = get(surface, ['background', 'color']);
    if(color) {
      resolveBackgroundColor(color, template.palette, surface);
    }
  })
}

function resolvePaletteColors(template, prevTemplate) {
  // TODO: Ensure the palette has adequate contrasting colors?
  // Repick darks and lights?

  [...template._surfaces, ...template._elements].forEach(surface => {
    const color = get(surface, ['background', 'color']);
    if(color) {
      resolveBackgroundColor(color, template.palette, surface);
    }
  })
  
  template._elements.forEach(el => {
    if(el.color) {
      resolveForegroundColor(color, template.palette, el);
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

function transformColor(colorStr, palette) {
  if(transform.darken) {
    return chroma(colorStr).darken(transform.darken);
  }
  return colorStr;
}