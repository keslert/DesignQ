import React, { useContext } from 'react';
import ImagePicker from './ImagePicker';
import MDSpinner from 'react-md-spinner';
import { Flex, Box } from 'rebass';
import { ImageContext } from './Queue';
import ImageSearchInput from '../components/ImageSearchInput';

function ImageSearch(props) {
  const {cache, lastSearch} = useContext(ImageContext);

  const images = lastSearch.images.filter(img => cache[img.id])
    .sort((a, b) => cache[a.id].timestamp < cache[b.id].timestamp ? -1 : 1);

  return (
    <React.Fragment>
      <Box style={{position: 'relative', zIndex: 999}}>
        <ImageSearchInput />
      </Box>
      <Box style={props.galleryStyle}>
        {!images.length &&
          <Flex py={3} justifyContent="center">
            <MDSpinner singleColor="#ffffff" />
          </Flex>
        }
        <ImagePicker
          images={images}
          columns={2}
          margin={4}
          onClick={props.onSelect}
        />
      </Box>
    </React.Fragment>
  )
}

export default ImageSearch;