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

  // Image
    // Upload
    // Explore
    // Remove

  // Background
  // Border
    // Background Color
    // Directional Offsets
    // Directional Widths
  // Decor
    // Image
    // Direction Offsets
    // Directional Widths
  
  // Directional Padding
  // Directional Bleeds
  // Margin
  // Palette

  // Advanced Color
    // Solid
    // Linear

  return (
    <Box>
      {img &&
        <Field label="Image Crop">
          <ImageCrop
            key={surface._root.id}
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
            }}
          />
        </Field>
      }
    </Box>
  )
}

export default SurfacePanel;