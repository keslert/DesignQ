import React, { useContext, useCallback } from 'react';
import { Flex, Box, Text } from 'rebass';
import ColorPicker from '../ColorPicker';
import Field from './Field';
import mapKeys from 'lodash/mapKeys';
import { DispatchContext } from '../../containers/Queue';
import omit from 'lodash/omit';

const swatches = [
  {key: 'dark', label: 'Dark'},
  {key: 'light', label: 'Light'},
  {key: 'accent', label: 'Accent #1'},
  {key: 'accent2', label: 'Accent #2'},
]

function PalettePanel({template}) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => {
    rootDispatch({
      type: 'UPDATE_SELECTED', 
      update: mapKeys(update, (v, k) => 'palette.' + k),
    });
  }, []);

  const palette = template.palette;
  const extraColors = Object.values(omit(palette, Object.keys(swatches)));
    
  return (
    <Box>
      <Field label="Palette Colors"> 
        {swatches.map(swatch => (
          <Flex alignItems="center" key={swatch.key} mb={1}>
            <Text
              color="white"
              width={75}
              fontSize={1}
              children={swatch.label}
              mr={1}
            />
            <ColorPicker
              key={template.id}
              color={palette[swatch.key] || ''}
              palette={extraColors}
              hideAlpha={true}
              onClear={() => update({[swatch.key]: null})}
              onChangeComplete={color => update({[swatch.key]: color.hex})}
            />
          </Flex>
        ))}
      </Field>

    </Box>
  )
}

export default PalettePanel;