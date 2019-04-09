import chroma from 'chroma-js';

export function getBackgroundImgStyle(bg) {
  if(!bg || !bg.img) return null;

  const c = bg.img._computed;
  return {
    backgroundImage: `url('${bg.img.src}')`,
    backgroundSize: `${c.w}px ${c.h}px`,
    backgroundPosition: `${-c.x}px ${-c.y}px`,
    backgroundRepeat: 'no-repeat',
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

export function resolveColor(color, palette) {
  if(!color) return null;

  switch(color.type) {
    case 'palette':
      return color.alpha !== undefined 
        ? chroma(palette[color.paletteKey]).alpha(color.alpha).css() 
        : palette[color.paletteKey]
    case 'solid':
      console.assert("Shouldn't have solid colors");
      return color.alpha !== undefined ? chroma(color.str).alpha(color.alpha).css() : color.str;
    case 'linear':
      return `linear-gradient(${color.deg}deg, ${resolveColor(color.colorB, palette)}, ${resolveColor(color.colorA, palette)})`
    case 'striped': 
      return `repeating-linear-gradient(${color.deg}deg, ${resolveColor(color.colorB, palette)}, ${resolveColor(color.colorB, palette)} ${color.widthA}px, ${resolveColor(color.colorA, palette)} ${color.widthA}px, ${resolveColor(color.colorA, palette)} ${color.widthA + color.widthB}px)`
    case 'split-color':
      return `linear-gradient(${color.deg}deg, ${resolveColor(color.colorB, palette)}, ${resolveColor(color.colorB, palette)} 50%, ${resolveColor(color.colorA, palette)} 50%)`;
    default:
      throw Error("Unknown Color Type!")
  }
}

export function getClipPath(bb, sides) {
/*
  x1  x2     x3   x4
y1 _______________ 
  |               |
y2|   |-------|   |
  |   |       |   |
  |   |       |   |
y3|   |-------|   |
  |               |
y4 _______________  w,h
*/

  const x1 = (sides._lOffset) + 'px';
  const x2 = (sides.l) + 'px';
  const x3 = (bb.w - sides.r) + 'px'; //`calc(100% - ${bb.r}px)`;
  const x4 = (bb.w - sides._rOffset) + 'px'; //`calc(100% - ${bb._rOffset}px)`

  const y1 = (sides._tOffset) + 'px';
  const y2 = (sides.t) + 'px';
  const y3 = (bb.h - sides.b) + 'px'; // `calc(100% - ${bb.b}px)`;
  const y4 = (bb.h - sides._bOffset) + 'px'; // `calc(100% - ${bb._bOffset}px)`;

  const clipPath = [
    x1+' '+y1,
    x1+' '+y4,
    x2+' '+y4,
    x2+' '+y2,
    x3+' '+y2,
    x3+' '+y3,
    x2+' '+y3,
    x2+' '+y4,
    x4+' '+y4,
    x4+' '+y1,
    x1+' '+y1,
  ].join(', ')

  return `polygon(${clipPath})`
}