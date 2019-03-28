import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'rebass';
// import imageWorker from '../../../public/image-worker';

const imageSrcs = [
  'https://images.unsplash.com/photo-1551863041-08f9690b6200?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1553558905-22a755dd0407?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1553564240-3c5d39e8a253?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1553781808-f27ef4fdd633?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1553505532-b839c208a696?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1553510518-ded30746f306?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1551505544-838deb79419f?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1551917951-148edcd8ea8d?ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1551527182-bf506e7484b0?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1551623134-658abf4a311b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1551740994-7af69385a217?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1534385842125-8c9ad0bd123c?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1551215536-a01ce2fb0d3d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1489710437720-ebb67ec84dd2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
  'https://images.unsplash.com/photo-1469131792215-9c8aaff71393?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60',
]

function ImageProcessing(props) {
  const [images, setImages] = useState({});

  useEffect(() => {
    imageSrcs.forEach(src => {
      const worker = new Worker('/image-worker.js');
      worker.addEventListener('message', (e) => {
        const { palette, crop={} } = e.data;
        setImages(images => ({...images, [src]: {src, palette, crop}}));
        worker.terminate();
      })
      const img = new Image();
      img.crossOrigin = "Anonymous";
      img.setAttribute('crossOrigin', '');
      img.onload = () => {
        setImages(images => ({...images, [src]: {src}}))
        const canvas = new OffscreenCanvas(img.width, img.height);
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, 0, 0);
        const imgd = ctx.getImageData(0, 0, canvas.width, canvas.height);
        
        const data = {
          buf8Buffer: imgd.data.buffer, 
          imgSize: {
            width: img.width, 
            height: img.height,
          },
          cropSize: props.flyerSize,
        }
        worker.postMessage(data, [imgd.data.buffer]);
      }
      img.src = src;

    })
  }, [])

  return (
    <Flex flexWrap="wrap">
      {Object.values(images).map(({src, crop={}, palette=[]}) => (
        <Box key={src} p={2}>
          <div style={{position: 'relative', display: 'inline-block'}}>
            <img src={src} style={{maxHeight: '200px', maxWidth: '200px'}} />
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
                  width: '20px',
                  height: '10px',
                  background: swatch,
                }}
              />
            ))}
          </Flex>
        </Box>
      ))}
    </Flex>
  )
}

export default ImageProcessing;