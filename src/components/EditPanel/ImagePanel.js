import React, { useContext, useCallback } from 'react';
import { Flex, Box } from 'rebass';
import Slider from '../Slider';
import Select from '../Select';
import DirectionalInput from '../DirectionalInput';
import Field from './Field';
import { DispatchContext } from '../../containers/Queue';
import BackgroundPanel from './BackgroundPanel';
import BorderPanel from './BorderPanel';
import ThematicBreak from './ThematicBreak';
import DecorPanel from './DecorPanel';
import Checkbox from '../Checkbox';


function ImagePanel({image, onUpdate}) {

  return (
    <Box pt={4}>
      <BackgroundPanel
        type="image"
        surface={image}
        background={image.background}
        path='background.'
      />

      <ThematicBreak />

      <Field 
        label="Bleed"
        onExploreClick={() => null}
      >
        <DirectionalInput
          name="bleed"
          min={0}
          l={image.bleed.l}
          r={image.bleed.r}
          t={image.bleed.t}
          tDisabled={true}
          b={image.bleed.b}
          bDisabled={true}
          onChange={values => onUpdate({'bleed': values})}
        />
        <Box mt={1}>
          <Checkbox
            label="Stick to footer"
            checked={!!image.sticky}
            onChange={e => onUpdate({'sticky': e.target.checked})}
          />
        </Box>
      </Field>
      
    </Box>
  )
}

export default ImagePanel;