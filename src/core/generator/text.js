// https://github.com/FormidableLabs/measure-text/blob/master/src/index.js
// https://developers.google.com/web/updates/2018/08/offscreen-canvas
const canvas = new OffscreenCanvas(600, 600);
const ctx = canvas.getContext('2d');
export const measureTextWidth = (text, font) => {
  const {
    family, 
    size, 
    weight, 
    style, 
    letterSpacing=0,
  } = font;

  ctx.font = `${weight} ${style} ${size}px ${family}`;
  console.log(letterSpacing)
  return ctx.measureText(text).width
         + letterSpacing * size * .6635 * text.length
}