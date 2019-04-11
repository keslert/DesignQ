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
    <Box pt={3}>
      <BackgroundPanel
        type="image"
        surface={image}
        background={image.background}
        path='background.'
      />

      <ThematicBreak />
      
      <BorderPanel
        surface={image}
        border={image.border}
        path='border.'
      />

      <ThematicBreak />

      <Field 
        label="Bleed"
        hint="The number of edges this image extends across."
      >
        <DirectionalInput
          name="bleed"
          min={0}
          l={image._computed.canBleed.l ? image.bleed.l : 0}
          r={image._computed.canBleed.r ? image.bleed.r : 0}
          t={0}
          b={0}
          lMax={image._computed.edges.l.length}
          rMax={image._computed.edges.r.length}
          tMax={0}
          bMax={0}
          lDisabled={!image._computed.canBleed.l}
          rDisabled={!image._computed.canBleed.r}
          bDisabled={true}
          tDisabled={true}
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