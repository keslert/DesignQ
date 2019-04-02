import React from 'react';
import { Box } from 'rebass';
import Gallery from 'react-photo-gallery';
import GalleryImage from '../components/GalleryImage';

function ImagePicker(props) {

  return (
    <Box>
      <Gallery 
        ImageComponent={GalleryImage}
        photos={props.images}
        columns={props.columns}
        margin={props.margin}
        onClick={props.onClick}
      />
    </Box>
  )
}

export default ImagePicker;