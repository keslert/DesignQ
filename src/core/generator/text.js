// https://github.com/FormidableLabs/measure-text/blob/master/src/index.js
// https://developers.google.com/web/updates/2018/08/offscreen-canvas
const canvas = new OffscreenCanvas(600, 600);
const ctx = canvas.getContext('2d');
export const measureTextWidth = (text, family, size, weight, style) => {
  ctx.font = `${weight} ${style} ${size} ${family}`;
  return ctx.measureText(text).width;
}