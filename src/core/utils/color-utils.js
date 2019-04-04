import findKey from 'lodash/findKey';
import chroma from 'chroma-js';

export function findPaletteKey(colorStr, palette) {
  return findKey(palette, v => v === colorStr);
}

export function getContrast(c1, c2) {
  if(c1 === c2) return 0;

  return chroma.contrast(c1, c2);
}

export function buildPaletteColor(key, palette, alpha) {
  return {type: 'solid', color: palette[key], paletteKey: key, alpha}
}

export function getSolidColors(color) {
  switch(color.type) {
    case 'solid': return color;
    case 'linear': return [color.color, color.colorB];
  }
}



// const sp = new SuperWorkers.MainThread({
//   url: 'js/image-worker.js',
//   maxWorkers: 5,
// });

const imgQueue = [];
let workers = 0;
const MAX_WORKERS = 3;
const processCanvas = new OffscreenCanvas(1200, 1200);
const processCtx = processCanvas.getContext("2d");
export function processImage(src, cb) {
  let callback = cb;
  if(workers >= MAX_WORKERS) {
    imgQueue.push({src, cb});
  } else {
    workers++;
    const worker = new Worker('js/image-worker.js');
    worker.addEventListener('message', (e) => {
      if(e.data.bitmap) {
        const bitmap = e.data.bitmap;
        processCtx.drawImage(bitmap, 0, 0);
        const imgd = processCtx.getImageData(0, 0, bitmap.width, bitmap.height);
        
        const data = {
          // src,
          buf8Buffer: imgd.data.buffer, 
          imgSize: {
            width: bitmap.width, 
            height: bitmap.height,
          },
        }
        worker.postMessage(data, [imgd.data.buffer]);
      }
      else if(e.data.palette) {
        const { palette } = e.data;
        callback({palette});

        if(imgQueue.length) {
          const next = imgQueue.shift();
          callback = next.cb;
          worker.postMessage({src: next.src});
        } else {
          workers--;
          worker.terminate();
        }
      }
    })
    worker.postMessage({src});
  }
}

  
  // const imgEl = new Image();
  // imgEl.crossOrigin = "Anonymous";
  // imgEl.setAttribute('crossOrigin', '');
  // imgEl.onload = () => {
    
  //   processCtx.drawImage(imgEl, 0, 0);
  //   const imgd = processCtx.getImageData(0, 0, imgEl.width, imgEl.height);
    
  //   const data = {
  //     src,
  //     buf8Buffer: imgd.data.buffer, 
  //     imgSize: {
  //       width: imgEl.width, 
  //       height: imgEl.height,
  //     },
  //   }
  //   worker.postMessage(data, [imgd.data.buffer]);
  // }
  // imgEl.src = src;

  // fetch(src, { mode: 'cors' })
  //   .then(response => response.blob())
  //   .then(blob => createImageBitmap(blob))
  //   .then(bitmap => {
  //     processCtx.drawImage(bitmap, 0, 0);
  //     const imgd = processCtx.getImageData(0, 0, bitmap.width, bitmap.height);
      
  //     const data = {
  //       src,
  //       buf8Buffer: imgd.data.buffer, 
  //       imgSize: {
  //         width: bitmap.width, 
  //         height: bitmap.height,
  //       },
  //     }
  //     worker.postMessage(data, [imgd.data.buffer]);
  //   })
