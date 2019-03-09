import React from 'react';
import { Box, Flex, Text } from 'rebass';
import Gallery from 'react-photo-gallery';
import GalleryImage from '../components/GalleryImage';

function ImagePicker() {

  return (
    <Box>
      <Text>Search</Text>

      <Box width={800}>
        <Gallery 
          ImageComponent={GalleryImage}
          photos={photos}
          columns={4}
          margin={4}
          onClick={() => null}
        />;
      </Box>
    </Box>
  )
}

export default ImagePicker;


const photos = [
  {
    src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
    user: {
      name: 'Ann Button',
      username: 'anne_button',
    },
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
    user: {
      name: 'Ann Button Longish Name',
      username: 'anne_button',
    },
    width: 1,
    height: 1
  },
  {
    src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
    user: {
      name: 'Ann Button Even Longer Name',
      username: 'anne_button',
    },
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
    user: {
      name: 'Ann Button',
      username: 'anne_button',
    },
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
    user: {
      name: 'Ann Button',
      username: 'anne_button',
    },
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
    user: {
      name: 'Ann Button',
      username: 'anne_button',
    },
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
    user: {
      name: 'Ann Button',
      username: 'anne_button',
    },
    width: 3,
    height: 4
  },
  {
    src: "https://source.unsplash.com/PpOHJezOalU/800x599",
    user: {
      name: 'Ann Button',
      username: 'anne_button',
    },
    width: 4,
    height: 3
  },
  {
    src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
    user: {
      name: 'Ann Button',
      username: 'anne_button',
    },
    width: 4,
    height: 3
  }
];