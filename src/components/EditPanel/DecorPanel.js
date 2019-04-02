import React, { useContext, useCallback } from 'react';
import BackgroundPanel from './BackgroundPanel';
import DirectionalInput from '../DirectionalInput';
import Field from './Field';
import mapKeys from 'lodash/mapKeys';
import { Box } from 'rebass';
import { DispatchContext } from '../../containers/Queue';

function DecorPanel({surface, decor={}, path}) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => rootDispatch({
      type: 'UPDATE_SELECTED', 
      update: mapKeys(update, (v, k) => path + k),
  }), []);


  return (
    <Box>
      <BackgroundPanel
        typeLabel="Decor"
        surface={surface}
        path={path + 'background.'}
        background={decor.background}
        bgOptions={['none', 'image']}
      />
      
      {decor.background && 
        <React.Fragment>
          <Field 
            label="Decor Width"
            onExploreClick={() => null}
            children={
              <DirectionalInput
                name="width"
                max={.5}
                min={0}
                step={.01}
                l={decor.l}
                r={decor.r}
                t={decor.t}
                b={decor.b}
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
            label="Decor Offset"
            onExploreClick={() => null}
            children={
              <DirectionalInput
                name="width"
                max={.5}
                min={0}
                step={.01}
                l={decor.lOffset}
                r={decor.rOffset}
                t={decor.tOffset}
                b={decor.bOffset}
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

export default DecorPanel;