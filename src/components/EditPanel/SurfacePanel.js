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


function SurfacePanel({surface, onUpdate}) {
  

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
    <Box>
      <BackgroundPanel
        surface={surface}
        background={surface.background}
        bgOptions={surface.kind === 'template' ? ['color', 'gradient', 'image'] : undefined}
        path='background.'
      />
      
      <ThematicBreak />

      {canControlWidth(surface) &&
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
                onChange={e => onUpdate({'w': TextToWidth[e.target.value]})}
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
                  onChange={e => onUpdate({'alignX': e.target.value})}
                />
              }
            />
          }
        </React.Fragment>
      }
      
      

      {canControlHeight(surface) && 
        <React.Fragment>
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
                onChange={e => onUpdate({'h': TextToWidth[e.target.value]})}
              />
            }
          />
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
                  onChange={e => onUpdate({'alignY': e.target.value})}
                />
              }
            />
          }
        </React.Fragment>
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
              onChange={e => onUpdate({'textAlign': e.target.value})}
            />
          }
        />
      }

      {surface._computed.next && 
        <Field 
          label="Margin"
          hint="The amount of space between this item and the item beneath it."
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
              onChange={e => onUpdate({'mb': e.target.value})}
            />
          }
        />
      }

      {surface.kind !== 'template' &&
        <Field 
          label="Bleed"
          hint="The number of edges this item extends across."
          onExploreClick={() => null}
          children={
            <DirectionalInput
              name="bleed"
              l={surface.bleed.l}
              r={surface.bleed.r}
              t={surface.bleed.t}
              b={surface.bleed.b}
              tDisabled={surface.h === 'auto' && surface.alignY !== 'top'}
              bDisabled={surface.h === 'auto' && surface.alignY !== 'bottom'}
              onChange={values => onUpdate({'bleed': values})}
            />
          }
        />
      }

      {surface.background && 
        <Field 
          label="Padding"
          hint="The amount of space between this item and its children."
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
              onChange={values => onUpdate({
                'pl': values.l,
                'pr': values.r,
                'pt': values.t,
                'pb': values.b,
              })}
            />
          }
        />
      }

      <ThematicBreak />
      
      <BorderPanel
        surface={surface}
        border={surface.border}
        path='border.'
      />

      <ThematicBreak />

      <DecorPanel
        surface={surface}
        decor={surface.decor}
        path='decor.'
      />

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

function canControlHeight(surface) {
  return surface.kind === 'content'
    || (surface.type === 'body' && surface._parent.h === 'fill')
}

function canControlWidth(surface) {
  return surface.kind === 'content'
    || (surface.kind === 'group' && surface._parent.w === 'fill');
}