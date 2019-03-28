import React, { useState, useEffect } from 'react';
import RgbQuant from '../core/lib/rgbquant';
import smartcrop from 'smartcrop';
import { Flex } from 'rebass';
const ColorThief = require('../core/lib/color-thief');

function ImagePalette() {
  const [image, setImage] = useState('https://images.unsplash.com/photo-1551863041-08f9690b6200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  const [palette, setPalette] = useState([]);
  const [palette2, setPalette2] = useState([]);
  const [crop, setCrop] = useState({});

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.setAttribute('crossOrigin', '');
    img.onload = async () => {
      const numColors = 6;
      let t0 = performance.now();
      const rgbQuant = new RgbQuant({colors: numColors});
      rgbQuant.sample(img);
      const palette = rgbQuant.palette(true, true).map(([r,g,b]) => `rgb(${r}, ${g}, ${b})`);
      console.log(performance.now() - t0)
      setPalette(palette);

      t0 = performance.now();
      const colorThief = new ColorThief();
      const palette2 = colorThief.getPalette(img, numColors, true).map(([r,g,b]) => `rgb(${r}, ${g}, ${b})`);
      console.log(performance.now() - t0);
      setPalette2(palette2);

      const flyerSize = {w: 480, h:670};
      const aspectW = flyerSize.w / img.width;
      const aspectH = flyerSize.h / img.height;
      
      const width = aspectW > aspectH ? img.width : img.height * (flyerSize.w / flyerSize.h)
      const height = aspectH > aspectW ? img.height : img.width * (flyerSize.h / flyerSize.w)
      
      const crop = await new Promise((response) => { 
        t0 = performance.now();
        smartcrop.crop(img, { width, height }).then(function(result) {
          const crop = result.topCrop;
          console.log(performance.now() - t0)
          response({
            x: crop.x / img.width * 100,
            y: crop.y / img.height * 100,
            width: crop.width / img.width * 100,
            height: crop.height / img.height * 100,
          })
        });
      })
      setCrop(crop);

      window.img = {
        src: img.src,
        palette,
        crop,
        meta: {
          w: img.width,
          h: img.height,
        }
      }
    }
    img.src = image;
  }, [image])

  return (
    <div>
      <div>
        <input value={image} onChange={e => setImage(e.target.value)} style={{width: '100%'}} />
      </div>
      <div style={{position: 'relative', display: 'inline-block'}}>
        <img src={image} style={{maxHeight: '500px', maxWidth: '500px'}} />

        <div 
          style={{
            position: 'absolute',
            border: '2px solid red',
            top: `${crop.y}%`,
            left: `${crop.x}%`,
            width: `calc(${crop.width}%)`,
            height: `calc(${crop.height}% - 4px)`,
          }}
        />
      </div>
      <Flex>
        {palette.map(swatch => (
          <div 
            key={swatch}
            style={{
              width: '40px',
              height: '20px',
              background: swatch,
            }}
          />
        ))}
      </Flex>
      <Flex>
        {palette2.map(swatch => (
          <div 
            key={swatch}
            style={{
              width: '40px',
              height: '20px',
              background: swatch,
            }}
          />
        ))}
      </Flex>
    </div>
  )
}

export default ImagePalette;