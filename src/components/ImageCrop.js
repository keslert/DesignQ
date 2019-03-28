import React, { useState, useLayoutEffect } from 'react';
import ReactCrop from 'react-image-crop';
import 'react-image-crop/dist/ReactCrop.css';

function ImageCrop({flyerSize, img, onComplete}) {

  const [crop, setCrop] = useState({});
  useLayoutEffect(() => {
    setCrop({
      x: img.x * 100,
      y: img.y * 100,
      width: flyerSize.w / img.zoom,
      // height: flyerSize.h / img.zoom,
      aspect: flyerSize.w / flyerSize.h,
    })
  }, [flyerSize, img])

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

const imageStyle = {
  maxHeight: 'inherit',
}