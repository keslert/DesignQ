importScripts('/_rgbquant.js');

const NUM_COLORS = 8;
self.addEventListener('message', e => { // eslint-disable-line no-restricted-globals
  if(e.data.src) {
    fetch(e.data.src, { mode: 'cors' })
    .then(response => response.blob())
    .then(blob => createImageBitmap(blob))
    .then(bitmap => {
      self.postMessage({bitmap}, [bitmap]);
      // const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
      // const ctx = canvas.getContext('bitmaprenderer');
      // ctx.transferToImageBitmap(bitmap);

      // self.postMessage({palette: ['green', 'red', 'blue']});
    })
  } else if(e.data.buf8Buffer) {
    const { buf8Buffer, imgSize } = e.data;
    const buf32 = new Uint32Array(buf8Buffer);
    const rgbQuant = new RgbQuant({colors: NUM_COLORS});
    rgbQuant.sample(buf32, imgSize.width);
    const palette = rgbQuant.palette(true, true).map(([r,g,b]) => `rgb(${r}, ${g}, ${b})`);

    self.postMessage({palette});
  }

  // self.postMessage({palette: ['green', 'red', 'blue']});
})



// const child = new SuperWorkers.WorkerThread();

// // child.exposeMethods({
// //   getImage: getImage,
// //   getPalette: ,
// // })


// async function getImage(src) {

// fetch(e.data.src, { mode: 'cors' })
//   .then(response => response.blob())
//   .then(blob => createImageBitmap(blob))
//   .then(bitmap => {
//     self.postMessage({bitmap}, [bitmap]);
// }

// fetch(src, { mode: 'cors' })
// .then(response => response.blob())
// .then(blob => createImageBitmap(blob))
// .then(bitmap => {

//   const canvas = new OffscreenCanvas(bitmap.width, bitmap.height);
//   const ctx = canvas.getContext('bitmaprenderer');
//   debugger;
//   ctx.transferToImageBitmap(bitmap);
  
//   const numColors = 6;
//   const rgbQuant = new RgbQuant({colors: numColors});
//   rgbQuant.sample(canvas);
//   const palette = rgbQuant.palette(true, true).map(([r,g,b]) => `rgb(${r}, ${g}, ${b})`);

//   // const size = {w: 480, h:670};
//   // const aspectW = size.w / img.width;
//   // const aspectH = size.h / img.height;
//   // const width = aspectW > aspectH ? img.width : img.height * (size.w / size.h)
//   // const height = aspectH > aspectW ? img.height : img.width * (size.h / size.w)
  
//   // const crop = await new Promise(resolve => { 
//   //   smartcrop.crop(img, { width, height }).then(function(result) {
//   //     const crop = result.topCrop;
//   //     resolve({
//   //       x: crop.x / img.width * 100,
//   //       y: crop.y / img.height * 100,
//   //       width: crop.width / img.width * 100,
//   //       height: crop.height / img.height * 100,
//   //     })
//   //   });
//   // })
//   // postMessage({src, palette, crop: {}});
  

//   self.postMessage({ src, palette }); // eslint-disable-line no-restricted-globals
// });