import React, { useContext, useCallback } from 'react';
import { Flex, Box } from 'rebass';
import Slider from '../Slider';
import Select from '../Select';
import DirectionalInput from '../DirectionalInput';
import Field from './Field';
import { DispatchContext } from '../../containers/Queue';
import BackgroundPanel from './BackgroundPanel';


function SurfacePanel({surface}) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => {
    rootDispatch({type: 'UPDATE_SELECTED', update});
  }, []);

  // Border
    // Background Color
    // Directional Offsets
    // Directional Widths
  
    // Decor
    // Image
    // Direction Offsets
    // Directional Widths
  
  // Palette

  return (
    <Box pt={3}>
      <BackgroundPanel
        surface={surface}
        background={surface.background}
        path='background.'
      />
      {canFill(surface, 'w') && // Width & Horizontal Alignment
        <React.Fragment>
          <Field 
            label="Width"
            onExploreClick={() => null}
            children={
              <Select
                name="width"
                bg="dark"
                color="white"
                value={WidthToText[surface.w]}
                options={['max', 'min']}
                onChange={e => update({'w': TextToWidth[e.target.value]})}
              />
            }
          />
          {surface.w === 'auto' && 
            <Field 
              label="Horizontal Alignment"
              onExploreClick={() => null}
              children={
                <Select
                  name="alignX"
                  bg="dark"
                  color="white"
                  value={surface.alignX}
                  options={['left', 'center', 'right']}
                  onChange={e => update({'alignX': e.target.value})}
                />
              }
            />
          }
        </React.Fragment>
      }
      
      

      {canFill(surface, 'h') && 
        <Field 
          label="Height"
          onExploreClick={() => null}
          children={
            <Select
              name="height"
              bg="dark"
              color="white"
              value={WidthToText[surface.h]}
              options={['max', 'min']}
              onChange={e => update({'h': TextToWidth[e.target.value]})}
            />
          }
        />
      }

      {surface.h === 'auto' && 
        <Field 
          label="Vertical Alignment"
          onExploreClick={() => null}
          children={
            <Select
              name="alignX"
              bg="dark"
              color="white"
              value={surface.alignY}
              options={['top', 'center', 'bottom']}
              onChange={e => update({'alignY': e.target.value})}
            />
          }
        />
      }

      {surface.kind === 'group' && 
        <Field 
          label="Text Alignment"
          onExploreClick={() => null}
          children={
            <Select
              name="textAlign"
              bg="dark"
              color="white"
              value={surface.textAlign}
              options={['left', 'center', 'right']}
              onChange={e => update({'textAlign': e.target.value})}
            />
          }
        />
      }

      {surface._computed.next && 
        <Field 
          label="Margin"
          onExploreClick={() => null}
          children={
            <Slider
              name="mb"
              bg="dark"
              color="white"
              value={surface.mb}
              step={.05}
              min={-.1}
              max={3}
              showValue={true}
              onChange={e => update({'mb': e.target.value})}
            />
          }
        />
      }

      {surface.kind !== 'template' &&
        <Field 
          label="Bleed"
          onExploreClick={() => null}
          children={
            <DirectionalInput
              name="bleed"
              l={surface.bleed.l}
              r={surface.bleed.r}
              t={surface.bleed.t}
              b={surface.bleed.b}
              onChange={values => update({'bleed': values})}
            />
          }
        />
      }

      {surface.background && 
        <Field 
          label="Padding"
          onExploreClick={() => null}
          children={
            <DirectionalInput
              name="padding"
              step={.25}
              min={0}
              l={surface.pl}
              r={surface.pr}
              t={surface.pt}
              b={surface.pb}
              onChange={values => update({
                'pl': values.l,
                'pr': values.r,
                'pt': values.t,
                'pb': values.b,
              })}
            />
          }
        />
      }
    </Box>
  )
}

export default SurfacePanel;


const TextToWidth = { max: 'fill', min: 'auto'}
const WidthToText = { fill: 'max', auto: 'min'}

function canFill(surface, dir) {
  let parent = surface._parent;
  while(parent) {
    if(parent.kind !== 'template' && parent[dir] === 'auto') {
      return false;
    }
    parent = parent._parent;
  }
  return surface.kind !== 'template';
}