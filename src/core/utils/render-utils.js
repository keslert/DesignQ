import _ from 'lodash';
import chroma from 'chroma-js';

export function getBackgroundStyle(bg) {
  if(!bg) return null;

  const background = _.filter([
    bg.img && `url(${bg.img.src}) no-repeat`,
    // resolveColor(bg.color),
  ]).join(',');

  const c = bg.img ? bg.img._computed : {};
  return {
    background,
    backgroundSize: `${c.w}px ${c.h}px`,
    backgroundPositionX: `${-c.x}px`,
    backgroundPositionY: `${-c.y}px`,
    filter: bg.img && _.map(bg.img.filters, (v, k) => `${k}(${v})`).join(' '),
    // backgroundBlendMode: bg.backgroundBlendMode,
    borderRadius: bg.borderRadius ? bg.borderRadius + 'px' : null,
  };
}

export function textAlignToFlexAlign(align) {
  switch(align) {
    case 'top':
    case 'left': return 'flex-start';
    case 'bottom':
    case 'right' : return 'flex-end';
    default: return 'center';
  }
}

export function resolveColor(color) {
  if(!color) return null;

  switch(color.type) {
    case 'solid':
      return color.alpha ? chroma(color.color).alpha(color.alpha).css() : color.color;
    case 'transparent':
      return 'transparent';
    case 'linear':
      return `linear-gradient(${color.deg}deg, ${resolveColor(color.colorB)}, ${resolveColor(color.color)})`
    case 'striped': 
      return `repeating-linear-gradient(${color.deg}deg, ${resolveColor(color.colorB)}, ${resolveColor(color.colorB)} ${color.width}px, ${resolveColor(color.colorB)} ${color.width}px, ${resolveColor(color.color)} ${color.width + color.widthB}px)`
    case 'split-color':
      return `linear-gradient(${color.deg}deg, ${resolveColor(color.colorB)}, ${resolveColor(color.colorB)} 50%, ${resolveColor(color.color)} 50%)`;
    default:
      throw Error("Unknown Color Type!")
  }
}