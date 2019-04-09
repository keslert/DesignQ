import chroma from 'chroma-js';
import findKey from 'lodash/findKey';
import sortBy from 'lodash/sortBy';
import minBy from 'lodash/minBy';
import get from 'lodash/get';
import _ from 'lodash';

const WHITE = chroma('#ffffff');
const BLACK = chroma('#000000');

export const PLACEHOLDER_IMAGE = { 
  src: '/placeholder.png', 
  meta: {h: 500, w: 500}, 
  zoom: 1, 
  x: 0.5, 
  y: 0.5,
}

// The background of the closest ancestor
export function getBackdropPaletteKey(item) {
	let current = item;
	while(current = current._parent) {
		const color = get(current, ['background', 'color']);
		if(color && color.alpha !== 0) {
			return color.paletteKey;
		}
		if(get(current, ['background', 'img'])) {
			return 'dark'
		}
	}
	return 'light'
}

export function findPaletteKey(colorStr, palette) {
  const key = findKey(palette, v => v === colorStr);
  console.assert(key, 'Missing key!');
  return key;
}

export function convertColorToPaletteColor(color, palette) {
  switch(color.type) {
    case 'basic': 
      return paletteColor(findPaletteKey(chroma(color.str).hex(), palette), color.alpha)
    case 'linear':
    case 'split-color':
    case 'striped':
      return {
        ...color,
        colorA: convertColorToPaletteColor(color.colorA, palette),
        colorB: convertColorToPaletteColor(color.colorB, palette),
      }
    default:
      throw Error('Unknown Color Type');
  }
}

export function getContrast(c1, c2) {
  if(c1 === c2) return 0;

  return chroma.contrast(c1, c2);
}

export function fixAlpha(color, alpha=0.5) {
  if(!color) return;

  switch(color.type) {
    case 'basic':
    case 'palette': 
      _fixAlpha(color, alpha)
      break;
    case 'linear':
    case 'split-color':
    case 'striped':
      _fixAlpha(color.colorA, alpha);
      _fixAlpha(color.colorB, alpha);
      break;
  }
}

const ALPHA_THRESHOLD = 0.9;
function _fixAlpha(color, alpha) {
  if(color.alpha === undefined || color.alpha > ALPHA_THRESHOLD) {
    color.alpha = alpha;
  }
}


// export function buildPalette(_colors) {
// 	const colors = _colors.map(color => {
// 		const fromWhite = chroma.distance(WHITE, color);
// 		const fromBlack = chroma.distance(BLACK, color);
// 		return {
// 			color,
// 			fromWhite,
// 			fromBlack,
// 		}
// 	});

// 	colors.sort((a, b) => a.fromWhite < b.fromWhite ? -1 : 1);
// 	const lightest = _.filter(colors, c => c.fromWhite < 30)[0] || {color: WHITE};
// 	_.remove(colors, lightest);

// 	colors.sort((a, b) => a.fromBlack < b.fromBlack ? -1 : 1);
// 	const darkest = colors[0] || {color: BLACK};
// 	_.remove(colors, darkest);

// 	const accent = colors[0];
// 	const accent2 = colors[1];

// 	const palette = {
// 		light: lightest.color,
// 		dark: darkest.color,
// 	}

// 	if(accent) palette.accent = accent.color;
// 	if(accent2) palette.accent2 = accent2.color;

// 	colors.slice(2).forEach((color, i) => {
// 		palette[`extra-${i}`] = color.color;
// 	})


// 	return palette;
// }

export function generatePalette(colors) {
  return generatePlausiblePalettes(colors, 1)[0];
}


const FROM_WHITE_THRESHOLD = 40;
const CONTRAST_WITH_LIGHT_THRESHOLD = 3;
export function generatePlausiblePalettes(colors, limit=10) {
  console.assert(colors.length > 1, 'More than one color');

  const chromas = colors.map(color => {
    const c = chroma(color);
    return {
      c,
      fromWhite: chroma.distance(WHITE, c),
      fromBlack: chroma.distance(BLACK, c),
    }
  });

  // TODO: If no light
  const validLights = chromas.filter(c => c.fromWhite < FROM_WHITE_THRESHOLD)
  const light = minBy(validLights, 'fromWhite') || {c: WHITE};
  chromas.forEach(c => c.contrastWithLight = chroma.contrast(c.c, light.c));
  
  const validDarks = chromas.filter(c => c.contrastWithLight > CONTRAST_WITH_LIGHT_THRESHOLD);
  if(!validDarks.length) {
    validDarks.push(_.maxBy(chromas, 'contrastWithLight'));
  }

  const darks = sortBy(validDarks, c => -c.contrastWithLight).slice(0, limit);
  const palettes = darks.map(dark => {
    const valid = chromas.filter(c => c !== light && c.contrastWithLight < dark.contrastWithLight)
    const accents = sortBy(valid, c => -(chroma.distance(light.c, c.c) + chroma.distance(dark.c, c.c)))

    const palette = {
      dark: dark.c.hex(),
      light: light.c.hex(),
      accent: accents[0] && accents[0].c.hex(),
      accent2: accents[1] && accents[1].c.hex(),
    }
    accents.slice(2).forEach((c, i) => {
      palette[`extra-${i}`] = c.c.hex();
    })
    return palette;
  })

  console.assert(palettes.length, 'Should generate at least one palette');
  return palettes;
}
// # What are the color strategies we see
// - Solid background
// - Image background
// - Grayscale
// - Darkened
// - Colorized
// - Solid
// - Gradient

export function getBasicColors(color) {
  switch(color.type) {
    case 'basic': 
      return color;
    case 'linear':
    case 'split-color':
    case 'striped':
      return [color.colorA, color.colorB];
  }
}

export function paletteColor(key, alpha) {
  return {
    type: 'palette',
    paletteKey: key, 
    alpha,
  }
}

export function basicColor(color, alpha) {
  return { type: 'basic', str: color, alpha };
}

export function stripedColor(deg, colorA, widthA, colorB, widthB) {
  return {
    type: 'striped',
    deg,
    colorA: (typeof colorA === 'string') ? basicColor(colorA) : colorA,
    widthA,
    colorB: (typeof colorB === 'string') ? basicColor(colorB) : colorB,
    widthB,
  };
}

export function linearColor(deg, colorA, colorB) {
  return {
    type: 'linear',
    deg,
    colorA: (typeof colorA === 'string') ? basicColor(colorA) : colorA,
    colorB: (typeof colorB === 'string') ? basicColor(colorB) : colorB,
  };
}

export function splitColor(deg, colorA, colorB) {
  return {
    type: 'split-color',
    deg,
    colorA: (typeof colorA === 'string') ? basicColor(colorA) : colorA,
    colorB: (typeof colorB === 'string') ? basicColor(colorB) : colorB,
  };
}

export function darkenColor(color, amount = 1) {
  return {
    ...color,
    color: chroma(color.str).darken(amount).hex(),
    colorTransform: {
      paletteKey: color.paletteKey,
      darken: amount,
    }
  };
}


export function extractColorStrsFromTemplate(template) {
	const colors = template._textElements.map(el => el.color);
	const bgColors = template._all.map(el => el.background && el.background.color);

  const basicColors = _.chain([...colors, ...bgColors])
    .filter()
    .flatMap(getBasicColors)
    .map('str')
    .uniq()
    .value()

  return basicColors;
}



/**
 * Process Images Worker Manager
 */
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
