import React, { useState, useEffect, useCallback } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function ImageCrop({img, size, onComplete}) {
  const [crop, setCrop] = useState(() => getCrop(img, size));
  // useEffect(() => {
  //   setCrop(getCrop(img, size))
  // }, [size, img])

  return (
    <div>
      <ReactCrop
        src={img.src}
        crop={crop}
        keepSelection={true}
        // minWidth={30}
        // minHeight={30}
        onChange={setCrop}
        onComplete={onComplete}
        crossorigin="anonymous"
        imageStyle={imageStyle}
        // onImageLoaded={() => false}
      />

    </div>

  )
}

export default ImageCrop;

const imageStyle = { maxHeight: 'inherit' }

function getCrop(img, size) {
  const aspect = size.w / size.h;

  const crop = {
    aspect,
    width: img._computed.cropW,
    x: img._computed.cropX,
    y: img._computed.cropY,
  }
  console.log('GET_CROP', crop);  
  return crop;
}