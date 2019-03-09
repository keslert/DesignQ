import React, { useState, useEffect } from 'react';
import RgbQuant from '../core/lib/rgbquant';
import smartcrop from 'smartcrop';
import { Flex } from 'rebass';

function ImagePalette() {
  const [image, setImage] = useState('https://images.unsplash.com/photo-1551863041-08f9690b6200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60');
  const [palette, setPalette] = useState([]);
  const [crop, setCrop] = useState({});

  useEffect(() => {
    const img = new Image();
    img.crossOrigin = "Anonymous";
    img.setAttribute('crossOrigin', '');
    img.onload = () => {
      const rgbQuant = new RgbQuant({
        colors: 8,
      });
      rgbQuant.sample(img);
      rgbQuant.reduce(img, 1);

      const colors = rgbQuant.idxrgb.map(([r,g,b]) => `rgb(${r}, ${g}, ${b})`);
      setPalette(colors);

      const width = img.width * 0.3;
      const height = img.height * 0.99;
      smartcrop.crop(img, { width, height }).then(function(result) {
        const crop = result.topCrop;
        const relativeCrop = {
          x: crop.x / img.width * 100,
          y: crop.y / img.height * 100,
          width: crop.width / img.width * 100,
          height: crop.height / img.height * 100,
        }
        setCrop(relativeCrop);
      });

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
    </div>
  )
}

export default ImagePalette;