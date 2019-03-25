export function calculatePixelBrightness(bb, context) {
  var brightness;
  var data;
  var pixels = 0;
  var delta;
  // var deltaSqr = 0;
  var mean = 0;
  // var variance;
  // var threshold = .5;
  
  data = context.getImageData(bb.l, bb.t, bb.w, bb.h).data;
  for (var p = 0; p < data.length; p += 4) {
    pixels++;
    brightness = (0.2126 * data[p]) + (0.7152 * data[p + 1]) + (0.0722 * data[p + 2]);
    delta = brightness - mean;
    // deltaSqr += delta * delta;
    mean = mean + delta / pixels;
  }
  
  // variance = Math.sqrt(deltaSqr / pixels) / 255;
  const luminance = mean / 255;

  return lumniance;
}