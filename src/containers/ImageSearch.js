import React, { useReducer } from 'react';
import { Flex, Box } from 'rebass';
import SearchInput from '../components/SearchInput';
import ImagePicker from './ImagePicker';
import { searchImages } from '../core/fetch'
import MDSpinner from 'react-md-spinner';

function ImageSearch(props) {
  const [state, dispatch] = useReducer(reducer, initialState);

  return (
    <React.Fragment>
      <Box>
        <SearchInput
          placeholder={"Search..."}
          hasBackButton={false}
          value={state.searchValue}
          onChange={e => dispatch({type: 'SET_SEARCH_VALUE', value: e.target.value})}
          onSubmit={e => dispatch({type: 'INIT_SEARCH', dispatch, size: props.size})}
        />
      </Box>
      <Box bg="dark" style={props.galleryStyle}>
        {state.searching &&
          <Flex py={3} justifyContent="center">
            <MDSpinner singleColor="#ffffff" />
          </Flex>
        }
        <ImagePicker
          images={state.images}
          columns={2}
          margin={4}
          onClick={props.onSelect}
        />
      </Box>
    </React.Fragment>
  )
}

export default ImageSearch;

function reducer(state, action) {
  switch(action.type) {
    case 'SET_SEARCH_VALUE':
      return {...state, searchValue: action.value}
    case 'INIT_SEARCH':
      return initSearch(state, action);
    case 'PROCESSED_IMAGE':
      return {...state, 
        images: [...state.images, action.img],
        searching: false,
      }
    default:
      return state;
  }
}

const initialState = {
  images: [],
  searchValue: '',
  searching: false,
}

function initSearch(state, action) {
  searchImages(state.searchValue).then(res => {
    processImages(res.data.photos, action.size, action.dispatch);
  })
  return {...state, images: [], searching: true}
}

function processImages(imgs, size, dispatch) {
  imgs.forEach(img => {
    const src = img.src.large;
    const worker = new Worker('/image-worker.js');
    worker.addEventListener('message', (e) => {
      const { palette, crop={} } = e.data;

      dispatch({type: 'PROCESSED_IMAGE', img: {
        id: img.id,
        src,
        meta: {
          w: img.width,
          h: img.height,
          photographer: img.photographer,
          photographer_url: img.photographer_url,
        },
        width: img.width,
        height: img.height,
        colors: palette, 
        crop,
      }})
      worker.terminate();
    })

    const imgEl = new Image();
    imgEl.crossOrigin = "Anonymous";
    imgEl.setAttribute('crossOrigin', '');
    imgEl.onload = () => {
      // setImages(images => ({...images, [src]: {src}}))
      const canvas = new OffscreenCanvas(imgEl.width, imgEl.height);
      const ctx = canvas.getContext("2d");
      ctx.drawImage(imgEl, 0, 0);
      const imgd = ctx.getImageData(0, 0, canvas.width, canvas.height);
      
      const data = {
        buf8Buffer: imgd.data.buffer, 
        imgSize: {
          width: imgEl.width, 
          height: imgEl.height,
        },
        cropSize: size,
      }
      worker.postMessage(data, [imgd.data.buffer]);
    }
    imgEl.src = src;

  })
}


const defaultPhotos = [];
//   {
//     src: "https://source.unsplash.com/2ShvY8Lf6l0/800x599",
//     user: {
//       name: 'Ann Button',
//       username: 'anne_button',
//     },
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/Dm-qxdynoEc/800x799",
//     user: {
//       name: 'Ann Button Longish Name',
//       username: 'anne_button',
//     },
//     width: 1,
//     height: 1
//   },
//   {
//     src: "https://source.unsplash.com/qDkso9nvCg0/600x799",
//     user: {
//       name: 'Ann Button Even Longer Name',
//       username: 'anne_button',
//     },
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/iecJiKe_RNg/600x799",
//     user: {
//       name: 'Ann Button',
//       username: 'anne_button',
//     },
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/epcsn8Ed8kY/600x799",
//     user: {
//       name: 'Ann Button',
//       username: 'anne_button',
//     },
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/NQSWvyVRIJk/800x599",
//     user: {
//       name: 'Ann Button',
//       username: 'anne_button',
//     },
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/uExE6A4WspI/600x799",
//     width: 3,
//     height: 4,
//     user: {
//       name: 'Ian Keefe',
//       username: 'iankeefe',
//     },
//   },
//   {
//     src: "https://source.unsplash.com/zh7GEuORbUw/600x799",
//     user: {
//       name: 'Ann Button',
//       username: 'anne_button',
//     },
//     width: 3,
//     height: 4
//   },
//   {
//     src: "https://source.unsplash.com/PpOHJezOalU/800x599",
//     user: {
//       name: 'Ann Button',
//       username: 'anne_button',
//     },
//     width: 4,
//     height: 3
//   },
//   {
//     src: "https://source.unsplash.com/I1ASdgphUH4/800x599",
//     user: {
//       name: 'Ann Button',
//       username: 'anne_button',
//     },
//     width: 4,
//     height: 3
//   },
//   {
//     src: 'https://images.unsplash.com/photo-1553969546-6f7388a7e07c?ixlib=rb-1.2.1&auto=format&fit=crop&w=668&q=80',
//     user: {
//       name: 'Josh Gordon',
//       username: 'joshgordon',
//     },
//     width: 386,
//     height: 578,
//   }
// ];