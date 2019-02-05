import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex } from 'rebass';
import _ from 'lodash';

function FontCanvas({family, fontSize, text, loaded, width}) {
  const ref = useRef();
  const [offsets, setOffsets] = useState({})

  const height = fontSize * 1.5;

  useEffect(() => {
    // clear canvas. rebuild on fontactive
    const canvas = ref.current;
    const ctx = canvas.getContext('2d');
    ctx.font = `${fontSize}px "${family}"`;
    ctx.textBaseline = "alphabetical";
    const x = 50;
    const y = fontSize;

    function draw(text) {
      ctx.fillStyle = '#fff';
      ctx.fillRect(0, 0, canvas.width, canvas.height);
      ctx.fillStyle = '#000';
      ctx.fillText(text, x, y);
    }
    
    draw("X")
    const ascender = findFromTop(ctx, width, height);
    
    draw("pqg");
    const descender = findFromBottom(ctx, width, height);
    
    draw("an");
    const xHeight = findFromTop(ctx, width, height);
    
    draw("dl");
    const superAscender = findFromTop(ctx, width, height);
    const baseline = findFromBottom(ctx, width, height);

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
    ctx.fillText(text, x, y);

    setOffsets({
      superAscender: baseline - superAscender,
      ascender: baseline - ascender,
      xHeight: baseline - xHeight,
      // baseline: 0,
      descender: descender - baseline,
    })

  }, [family, loaded]);

  return (
    <div>
      <canvas
        height={height}
        width={width}
        ref={ref}
      />
      <Flex>
        <Box pr={3}>
          {Object.entries(offsets).map(([k, v]) =>
            <Box key={k}>
              <b>{k}: </b>{v}
            </Box>
          )}
        </Box>
      </Flex>
    </div>
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