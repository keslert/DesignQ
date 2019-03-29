import React, { useContext } from 'react';
import { Flex, Box } from 'rebass';
import { Textarea } from '../FormInput'
import Slider from '../Slider';
import Select from '../Select';
import ColorPicker from '../ColorPicker';
import DirectionalInput from '../DirectionalInput';
import Field from './Field';
import Checkbox from '../Checkbox';
import ImageCrop from '../ImageCrop';
import { DispatchContext } from '../../containers/Queue';



function SurfacePanel({surface}) {
  const rootDispatch = useContext(DispatchContext)
  const img = surface.background && surface.background.img;

  return (
    <Box>
      {img &&
        <Field label="Image Crop">
          <ImageCrop
            key={img.src}
            img={img}
            size={surface._computed.bb}
            onComplete={(crop, pixelCrop) => {
              const zoom = Math.round(img.zoom * img._computed.cropW / crop.width * 100) / 100;
              const x = Math.round(crop.x / (100 - crop.width) * 100) / 100 || 0;
              const y = Math.round(crop.y / (100 - crop.height) * 100) / 100 || 0;
              if(x !== img.x || y !== img.y || zoom !== img.zoom) {
                rootDispatch({type: 'UPDATE_SELECTED', update: {
                  'background.img.x': x,
                  'background.img.y': y,
                  'background.img.zoom': zoom,
                }})
              }
              console.log(crop, pixelCrop);
              return crop;
            }}
          />
        </Field>
      }
    </Box>
  )
}

export default SurfacePanel;