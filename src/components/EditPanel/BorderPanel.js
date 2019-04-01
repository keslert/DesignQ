import React, { useContext, useCallback } from 'react';
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
import mapKeys from 'lodash/mapKeys';
import BackgroundPanel from './BackgroundPanel';

function BorderPanel({surface, border={}, path}) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => rootDispatch({
      type: 'UPDATE_SELECTED', 
      update: mapKeys(update, (v, k) => path + k),
  }), []);

  return (
    <Box>
      <Field 
        label="Width"
        onExploreClick={() => null}
        children={
          <DirectionalInput
            name="width"
            l={border.l}
            r={border.r}
            t={border.t}
            b={border.b}
            onChange={values => update({
              'l': values.l,
              'r': values.r,
              't': values.t,
              'b': values.b,
            })}
          />
        }
      />
      <Field 
        label="Offset"
        onExploreClick={() => null}
        children={
          <DirectionalInput
            name="width"
            l={border.lOffset}
            r={border.rOffset}
            t={border.tOffset}
            b={border.bOffset}
            onChange={values => update({
              'lOffset': values.l,
              'rOffset': values.r,
              'tOffset': values.t,
              'bOffset': values.b,
            })}
          />
        }
      />
      <BackgroundPanel
        background={border.background}
        path={path + 'background.'}
        surface={surface}
      />
    </Box>
  )
}

export default BorderPanel;