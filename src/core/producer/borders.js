import { getNormalizedValue, withGroups } from './';

export function computeBorders(template) {
  const size = template._computed.size;
  computeBorder(template.border, size);
  computeBorder(template.content.border, size);
  withGroups(template, group => {
    computeBorder(group.border, size);
    group.elements.forEach(e => {
      computeBorder(e.border, size);
    })
  })
}

export function computeBorder(b, flyerSize) {
  if(!b.background || !b.background.color) {
    b._computed = {
      l: 0,
      r: 0,
      t: 0,
      b: 0,
      _l: 0,
      _r: 0,
      _t: 0,
      _b: 0,
      _lOffset: 0,
      _rOffset: 0,
      _tOffset: 0,
      _bOffset: 0,
    }
  }
  else {
    b._computed = {
      // the total space
      l: getNormalizedValue(b.l + b.lOffset, flyerSize.w),
      r: getNormalizedValue(b.r + b.rOffset, flyerSize.w),
      t: getNormalizedValue(b.t + b.tOffset, flyerSize.w),
      b: getNormalizedValue(b.b + b.bOffset, flyerSize.w),
      
      // helper variables for the individual parts
      _l: getNormalizedValue(b.l, flyerSize.w),
      _r: getNormalizedValue(b.r, flyerSize.w),
      _t: getNormalizedValue(b.t, flyerSize.w),
      _b: getNormalizedValue(b.b, flyerSize.w),
      _lOffset: getNormalizedValue(b.lOffset, flyerSize.w),
      _rOffset: getNormalizedValue(b.rOffset, flyerSize.w),
      _tOffset: getNormalizedValue(b.tOffset, flyerSize.w),
      _bOffset: getNormalizedValue(b.bOffset, flyerSize.w),
    }
  }
  b._computed.x = b._computed.l + b._computed.r;
  b._computed.y = b._computed.t + b._computed.b;
  b._computed.hasBorder = (b._computed.x + b._computed.y) > 0;
}

// const items = [];
// b._computed.items = items;
// if(b.layout === 'confetti') {

//   const options = {
//     rotation: true, 
//     seed: b.seed,
//     gridX: b.gridX,
//     gridY: b.gridY,
//   };

//   const bb = template._computed.bb;
//   if(b.top || b.bottom) {
//     const confetti = generateConfetti(b.items, {...bb, h: b.top || b.bottom}, options)
//     if(b.bottom) {
//       // Reverse and mirror the items
//       const bottomItems = confetti.map(i => ({...i, y: bb.h - i.y, x: bb.w - i.x}))
//       items.push(...bottomItems)
//     }
//     if(b.top) {
//       items.push(...confetti);
//     }
//   }
// }

// export function generateConfetti(items, size, options={}) {
//   // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
//   let seed = options.seed || Math.random();
//   function random() {
//     var x = Math.sin(seed++) * 10000;
//     return x - Math.floor(x);
//   }

//   // TODO: Use the element sizes
//   const gridX = options.gridX || 50;
//   const gridY = options.gridY || 30;

//   const columns = Math.floor(size.w / gridX) + 2; 
//   const rows = Math.floor(size.h / gridY) + 1;

//   const confetti = [];
//   for (let c = 0; c < columns; c++) {
//     for (let r = 0; r < rows; r++) {
//       const item = items[Math.floor(random() * items.length)];
      
//       const obj = {item}
//       obj.x = (c - .5 - (r % 2) * .5) * gridX + random() * gridX * .25;
//       obj.y = (r - 1) * gridY + random() * gridY * .7;
      
//       if(options.rotation) {
//         obj.rotate = random() * 360;
//       }
//       if(options.size) {
//         obj.scale = random() * 0.5 + 0.75;
//       }
//       if(options.opacity) {
//         obj.opacity = (random() * 30 + 70) / 100;
//       }
//       confetti.push(obj);
//     }
//   }

//   return confetti;
// }