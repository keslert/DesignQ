import React from 'react';
import { Flex, Box } from 'rebass';
import { Textarea } from '../FormInput'
import Slider from '../Slider';
import Select from '../Select';
import ColorPicker from '../ColorPicker';
import DirectionalInput from '../DirectionalInput';
import Field from './Field';
import Checkbox from '../Checkbox';
import ImageCrop from '../ImageCrop';

function SurfacePanel({surface}) {
  const template = surface._template;
  const img = surface.background && surface.background.img;

  return (
    <Box>
      {img &&
        <Field label="Image Crop">
          <ImageCrop
            img={img}
            flyerSize={template._computed.bb}
            onComplete={crop => null}
          />
        </Field>
      }
    </Box>
  )
}

export default SurfacePanel;