import React, { useState, useLayoutEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function ImageCrop({img, size, onComplete}) {

  const [crop, setCrop] = useState({});
  useLayoutEffect(() => {
    setCrop(getCrop(img, size))
  }, [img, size])

  return (
    <div>
      <ReactCrop
        src={img.src}
        crop={crop}
        keepSelection={true}
        minWidth={30}
        minHeight={30}
        onChange={setCrop}
        onComplete={onComplete}
        crossorigin="anonymous"
        imageStyle={imageStyle}
      />

    </div>

  )
}

export default ImageCrop;

const imageStyle = { maxHeight: 'inherit' }
function getCrop(img, size) {
  const aspect = size.w / size.h;
  const imgAspect = img.meta.w / img.meta.h;
  const width = aspect < imgAspect ? 1 : aspect / imgAspect;

  return {
    aspect,
    width: width / img.zoom * 100,
    x: img.x * 100 * width,
    y: img.y * 100 * width,
  }
}