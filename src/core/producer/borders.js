import _ from 'lodash';


export function computeBorder(structure) {
  structure.border = structure.border || {};

  const b = structure.border;
  b._computed = {
    l: b.left || 0,
    r: b.right || 0,
    t: b.top || 0,
    b: b.bottom || 0,
  };
  b._computed.x = b._computed.l + b._computed.r;
  b._computed.y = b._computed.t + b._computed.b;

  const items = [];
  b._computed.items = items;

  if(b.layout === 'confetti') {

    const options = {
      rotation: true, 
      seed: b.seed,
      gridX: b.gridX,
      gridY: b.gridY,
    };

    const bb = structure._computed.bb;
    if(b.top || b.bottom) {
      const confetti = generateConfetti(b.items, {...bb, h: b.top || b.bottom}, options)
      if(b.bottom) {
        // Reverse and mirror the items
        const bottomItems = confetti.map(i => ({...i, y: bb.h - i.y, x: bb.w - i.x}))
        items.push(...bottomItems)
      }
      if(b.top) {
        items.push(...confetti);
      }
    }
  }
}

export function generateConfetti(items, size, options={}) {
  // https://stackoverflow.com/questions/521295/seeding-the-random-number-generator-in-javascript
  let seed = options.seed || Math.random();
  function random() {
    var x = Math.sin(seed++) * 10000;
    return x - Math.floor(x);
  }

  // TODO: Use the element sizes
  const gridX = options.gridX || 50;
  const gridY = options.gridY || 30;

  const columns = Math.floor(size.w / gridX) + 2; 
  const rows = Math.floor(size.h / gridY) + 1;

  const confetti = [];
  for (let c = 0; c < columns; c++) {
    for (let r = 0; r < rows; r++) {
      const item = items[Math.floor(random() * items.length)];
      
      const obj = {item}
      obj.x = (c - .5 - (r % 2) * .5) * gridX + random() * gridX * .25;
      obj.y = (r - 1) * gridY + random() * gridY * .7;
      
      if(options.rotation) {
        obj.rotate = random() * 360;
      }
      if(options.size) {
        obj.scale = random() * 0.5 + 0.75;
      }
      if(options.opacity) {
        obj.opacity = (random() * 30 + 70) / 100;
      }
      confetti.push(obj);
    }
  }

  return confetti;
}


export function calculateBorderSize(b) {
  const w = (b && b.left || 0)
          + (b && b.right || 0)
  
  const h = (b && b.top || 0)
          + (b && b.bottom || 0)

  return { w, h };
}