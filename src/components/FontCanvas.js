import React, { useEffect, useRef } from 'react';
import _ from 'lodash';

function FontCanvas({family, fontSize, text, loaded, width}) {
  const ref = useRef();

  const height = fontSize * 2;

  useEffect(() => {
    // clear canvas. rebuild on fontactive
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.font = `${fontSize}px "${family}"`;
    
    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    
    // find 
    ctx.fillStyle = '#000';
    ctx.fillText("X", 50, fontSize * 1.25);
    const ascender = findFromTop(ctx, width, height);
    const baseline = findFromBottom(ctx, width, height);

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.fillText("xpqg", 50, fontSize * 1.25);
    const xHeight = findFromTop(ctx, width, height);
    const descender = findFromBottom(ctx, width, height);

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    ctx.fillStyle = '#000';
    ctx.fillText("dl", 50, fontSize * 1.25);
    const superAscender = findFromTop(ctx, width, height);

    ctx.fillStyle = '#fff';
    ctx.fillRect(0, 0, canvas.width, canvas.height);
    [
      [superAscender, "#0C5EE8"],
      [ascender, "#00A2FF"],
      [xHeight, "#C4B69A"],
      [baseline, "#EBB11A"],
      [descender, "#CC9612"],
    ].forEach(([y, color]) => {
      ctx.fillStyle = color;
      ctx.fillRect(0, y, canvas.width, 1);
    })
    
    ctx.fillStyle = '#000';
    ctx.fillText(text, 50, fontSize * 1.25);

  }, [family, loaded]);

  return (
    <canvas
      height={height}
      width={width}
      ref={ref}
    />
  )
}

export default FontCanvas;


function findFromTop(ctx, width, height) {
  const allWhite = 255 * 4 * width;

  for(let y = 0; y < height; y++) {
    const row = ctx.getImageData(0, y, width, 1);
    const sum = _.sum(row.data);
    if(sum < allWhite) {
      return y;
    }
  }
}

function findFromBottom(ctx, width, height) {
  const allWhite = 255 * 4 * width;

  for(let y = height - 1; y >= 0; y--) {
    const row = ctx.getImageData(0, y, width, 1);
    const sum = _.sum(row.data);
    if(sum < allWhite) {
      return y;
    }
  }
}