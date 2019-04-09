import React, { useContext, useCallback, useState } from 'react';
import { Flex, Box } from 'rebass';
import Slider from '../Slider';
import Select from '../Select';
import ColorPicker from '../ColorPicker';
import Field from './Field';
import ImageCrop from '../ImageCrop';
import mapKeys from 'lodash/mapKeys';
import Button from '../Button';
import ImageSearch from '../../containers/ImageSearch';
import { DispatchContext } from '../../containers/Queue';
import { resolveColor } from '../../core/utils/render-utils';
import { getOptimalBackgroundColor } from '../../core/generator/color';
import { darkenColor } from '../../core/utils/color-utils';
import { findPaletteKey, PLACEHOLDER_IMAGE } from '../../core/utils/color-utils';

let paletteKeyId = 1; 

function BackgroundPanel({
  surface,
  bb,
  background={}, 
  path, 
  type,
  typeLabel="Background",
  bgOptions=['none', 'color', 'gradient', 'image'],
}) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => rootDispatch({
      type: 'UPDATE_SELECTED', 
      update: mapKeys(update, (v, k) => path + k),
  }), []);
  const [showSearch, setShowSearch] = useState(false);

  const img = background.img;
  const palette = surface._root.palette;
  const paletteColors = Object.values(palette);
  const bgType = img ? 'image' : background.color ? background.color.type : 'none';
    
  return (
    <Box>
      {!type && 
        <Field 
          label={typeLabel}
          children={
            <Select
              bg="dark"
              color="white"
              value={BackgroundTypeToText[bgType]}
              options={bgOptions}
              onChange={e => {
                const type = e.target.value;
                const o = {};

                if(background.img && type !== 'image') {
                  o.prevImg = img;
                  o.img = null;
                }

                if(type === 'none') {
                  o._color = background.color;
                  o.color = null;
                }
                else if(type === 'color') {
                  o.color = getSolid(surface, background, surface._root.palette);
                }
                else if(type === 'gradient') {
                  o.color = getGradient(surface, background, surface._root.palette);
                }
                else if(type === 'image') {
                  o.img = img || background.prevImg || {...PLACEHOLDER_IMAGE};
                  o._color = background.color;
                  o.color = null;
                }
                update(o);
              }}
            />
          }
        />
      }
      

      {img &&
        <React.Fragment>
          <Box mt={-3} mb={3}>
            <ImageCrop
              key={(surface._root.editId || surface._root.id) + img.src}
              img={img}
              size={bb || surface._computed.bb}
              onComplete={(crop, pixelCrop) => {
                const zoom = (Math.round(img.zoom * img._computed.cropW / crop.width * 100) / 100) || 1;
                const x = (Math.round(crop.x / (100 - crop.width) * 100) / 100) || 0;
                const y = (Math.round(crop.y / (100 - crop.height) * 100) / 100) || 0;
                if(x !== img.x || y !== img.y || zoom !== img.zoom) {
                  update({'img.x': x, 'img.y': y, 'img.zoom': zoom})
                }
              }}
            />
            <Flex mt={2} justifyContent="space-between">
              <Button
                fontSize={1}
                px={1}
                py={2}
                onClick={() => setShowSearch(!showSearch)}
                children="Browse Images"
              />
              <Button
                variant="subtle"
                fontSize={1}
                px={1}
                py={2}
                children="Upload"
              />
            </Flex>
          </Box>

          { showSearch && 
            <Box mb={3}>
              <ImageSearch
                galleryStyle={imagePickerStyle}
                onSelect={(e, {photo}) => {
                  const o = {};
                  const color = background.color;
                  if(color && (!color.alpha || color.alpha === 1)) {
                    o['color.alpha'] = 0.1;
                  }

                  o['img'] = {
                    ...photo,
                    zoom: 1,
                    x: 0.5,
                    y: 0.5,
                  };

                  update(o);
                }}

              />
            </Box>
          }
          
          <Field 
            label="Image Overlay"
            children={
              <Select
                bg="dark"
                color="white"
                value={BackgroundTypeToText[background.color ? background.color.type : 'none']}
                options={['none', 'color', 'gradient']}
                onChange={e => {
                  const type = e.target.value;
                  const o = {};

                  if(type === 'none') {
                    o._color = background.color;
                    o.color = null;
                  }
                  else if(type === 'color') {
                    o.color = getSolid(surface, background, surface._root.palette, .5);
                  }
                  else if(type === 'gradient') {
                    o.color = getGradient(surface, background, surface._root.palette, .5);
                  }
                  update(o);
                }}
              />
            }
          />
        </React.Fragment>
      }

      {(background.color && background.color.type === 'palette') &&
        <Field 
          label="Background Color"
          children={
            <ColorPicker
              color={resolveColor(background.color, palette)}
              palette={paletteColors}
              onClear={() => update({'color': null})}
              onChangeComplete={color => update({
                // 'color.type': 'solid',
                // 'color.color': color.hex,
                'color.alpha': color.rgb.a,
                'color.paletteKey': findPaletteKey(color.hex, surface._root.palette) || `user-defined-${paletteKeyId++}`,
              })}
            />
          }
        />
      }

      {(background.color && background.color.type === 'linear') &&
        <React.Fragment>
          <Field 
            label="Background Color #1"
            children={
              <ColorPicker
                color={resolveColor(background.color.color)}
                palette={paletteColors}
                onChangeComplete={color => update({
                  'color.color.type': 'solid',
                  'color.color.color': color.hex,
                  'color.color.alpha': color.rgb.a,
                  'color.color.paletteKey': findPaletteKey(color.hex, surface._root.palette) || `user-defined-${paletteKeyId++}`,
                })}
              />
            }
          />

          <Field 
            label="Background Color #2"
            children={
              <ColorPicker
                color={resolveColor(background.color.colorB)}
                palette={paletteColors}
                onChangeComplete={color => update({
                  'color.colorB.type': 'solid',
                  'color.colorB.color': color.hex,
                  'color.colorB.alpha': color.rgb.a,
                  'color.colorB.paletteKey': findPaletteKey(color.hex, surface._root.palette) || `user-defined-${paletteKeyId++}`,
                })}
              />
            }
          />

          <Field 
            label="Angle"
            onExploreClick={() => null}
            children={
              <Slider
                name="mb"
                bg="dark"
                color="white"
                value={background.color.deg}
                step={15}
                min={0}
                max={360}
                showValue={true}
                onChange={e => update({'color.deg': e.target.value})}
              />
            }
          />

        </React.Fragment>
      }
    </Box>
  )
}

export default BackgroundPanel;

function getSolid(surface, bg, palette, defaultAlpha=1) {
  const type = 'solid';
  const c = bg.color || bg._color;

  if(!c) {
    const optimalColor = getOptimalBackgroundColor(surface, palette);
    return {...optimalColor, alpha: defaultAlpha}
  }
  else if(c.type === 'solid') {
    const alpha = !(c.alpha < 1) ? defaultAlpha : c.alpha
    return { ...c, alpha }
  }
  else if(c.type === 'linear') {
    const alpha = !(c.color.alpha < 1) ? defaultAlpha : c.color.alpha
    
    return { ...c.color, type, alpha }
  }
}

function getGradient(surface, bg, palette, defaultAlpha=1) {
  const c = bg.color || bg._color;

  if(!c) {
    const optimalColor = getOptimalBackgroundColor(surface, palette);

    return {
      type: 'linear',
      color: {...optimalColor, alpha: defaultAlpha},
      colorB: darkenColor(optimalColor),
      deg: 0,
    }
  }
  else if(c.type === 'solid') {
    const alpha = !(c.alpha < 1) ? defaultAlpha : c.alpha

    return {
      type: 'linear',
      color: {...c, alpha },
      colorB: darkenColor(c),
      deg: 0,
    }
  }
  else if(c.type === 'linear') {
    const alpha = !(c.color.alpha < 1) ? defaultAlpha : c.color.alpha
    const alphaB = !(c.colorB.alpha < 1) ? defaultAlpha : c.colorB.alpha

    return {
      type: 'linear',
      color: {...c.color, alpha},
      colorB: {...c.colorB, alphaB},
    }
  }
}

const BackgroundTypeToText = {
  none: 'none',
  solid: 'color',
  linear: 'gradient',
  image: 'image',
}

const imagePickerStyle = {
  maxHeight: 300,
  overflowY: 'auto',
  marginTop: -20,
  paddingTop: 24,
}