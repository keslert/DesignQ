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
            img={img}
            size={surface._computed.bb}
            onComplete={crop => rootDispatch({type: 'UPDATE_SELECTED', update: {
              'background.img.x': crop.x / 100,
              'background.img.y': crop.y / 100,
              // 'background.img.zoom': crop.zoom,
            }})}
          />
        </Field>
      }
    </Box>
  )
}

export default SurfacePanel;