import _ from 'lodash';


export function computeBorders(structure, size) {
  if(!structure.border) return;

  const b = structure.border;
  b._computed = {items: []};

  if(b.layout === 'confetti') {

    const options = {
      rotation: true, 
      seed: b.seed,
      gridX: b.gridX,
      gridY: b.gridY,
    };

    if(b.sides.all || b.sides.top || b.sides.bottom) {
      const items = generateConfetti(b.items, {...size, h: b.width}, options)
      if(b.sides.all || b.sides.bottom) {
        // Reverse and mirror the items
        const bottomItems = items.map(i => ({...i, y: size.h - i.y, x: size.w - i.x}))
        b._computed.items.push(...bottomItems)
      }
      if(b.sides.all || b.sides.top) {
        b._computed.items.push(...items);
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