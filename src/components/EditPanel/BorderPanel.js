import React, { useContext, useCallback } from 'react';
import ColorPicker from '../ColorPicker';
import DirectionalInput from '../DirectionalInput';
import Field from './Field';
import get from 'lodash/get';
import mapKeys from 'lodash/mapKeys';
import { Box } from 'rebass';
import { DispatchContext } from '../../containers/Queue';
import { paletteColor, findOrCreatePaletteKey } from '../../core/utils/color-utils';

function BorderPanel({surface, border={}, path}) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => rootDispatch({
      type: 'UPDATE_SELECTED', 
      update: mapKeys(update, (v, k) => path + k),
  }), []);

  const color = get(border, ['background', 'color']);
  const palette = surface._root.palette;

  return (
    <Box>
      <Field 
        label="Border Color"
        children={
          <ColorPicker
            color={color ? color._str : ''}
            palette={Object.values(palette)}
            onClear={() => update({'background': null})}
            onChangeComplete={({hex, rgb}) => {
              const key = findOrCreatePaletteKey(hex, palette)
              update({
                'background': border.background || {},
                'background.color': paletteColor(key, rgb.a),
                [`_root.palette.${key}`]: hex,
                'l': color ? border.l : .05,
                'r': color ? border.r : .05,
                't': color ? border.t : .05,
                'b': color ? border.b : .05,
              })
            }}
          />
        }
      />

      {color && 
        <React.Fragment>
          <Field 
            label="Border Width"
            onExploreClick={() => null}
            children={
              <DirectionalInput
                name="width"
                max={.5}
                min={0}
                step={.01}
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
            label="Border Offset"
            onExploreClick={() => null}
            children={
              <DirectionalInput
                name="width"
                max={.5}
                min={0}
                step={.01}
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
        </React.Fragment>
      }
    </Box>
  )
}

export default BorderPanel;