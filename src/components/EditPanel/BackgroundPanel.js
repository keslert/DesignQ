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
import { getOptimalBackgroundColor } from '../../core/generator/color';
import { darkenColor, findOrCreatePaletteKey, fixAlpha } from '../../core/utils/color-utils';
import { PLACEHOLDER_IMAGE } from '../../core/utils/color-utils';
import { cloneCrude } from '../../core/utils/template-utils';

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
  const bgColor = background.color || {};
  const palette = surface._root.palette;
  const paletteColors = Object.values(palette);
  const bgType = img ? 'image' : (bgColor.type || 'none');
    
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
                const ret = {};

                if(background.img && type !== 'image') {
                  ret.prevImg = img;
                  ret.img = null;
                }

                if(type === 'none') {
                  ret._color = background.color;
                  ret.color = null;
                }
                else if(type === 'color') {
                  ret.color = getBasic(surface, background, surface._root.palette, 1);
                }
                else if(type === 'gradient') {
                  ret.color = getGradient(surface, background, surface._root.palette, 1);
                }
                else if(type === 'image') {
                  ret.img = img || background.prevImg || {...PLACEHOLDER_IMAGE};
                  ret._color = background.color;
                  ret.color = null;
                }
                update(ret);
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
              onComplete={crop => {
                const zoom = (Math.round(img.zoom * img._computed.cropW / crop.width * 100) / 100) || 1;
                const x = (Math.round(crop.x / (100 - crop.width) * 100) / 100) || img.x || 0.5;
                const y = (Math.round(crop.y / (100 - crop.height) * 100) / 100) || img.y || 0.5;
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
              {false && 
                <Button
                  variant="subtle"
                  fontSize={1}
                  px={1}
                  py={2}
                  children="Upload"
                />
              }
            </Flex>
          </Box>

          { showSearch && 
            <Box mb={3}>
              <ImageSearch
                galleryStyle={imagePickerStyle}
                onSelect={(e, {photo}) => {
                  const ret = {};
                  const color = background.color || {};
                  if(color.type === 'palette' && color.alpha === 1) {
                    ret['color.alpha'] = 0.1;
                  }
                  if(color.type === 'linear') { 
                    if(color.colorA.alpha === 1) {
                      ret['color.colorA.alpha'] = 0.1;
                    }
                    if(color.colorB.alpha === 1) {
                      ret['color.colorB.alpha'] = 0.1;
                    }
                  }

                  ret['img'] = {
                    ...photo,
                    zoom: 1,
                    x: 0.5,
                    y: 0.5,
                  };

                  update(ret);
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
                value={BackgroundTypeToText[bgColor.type || 'none']}
                options={['none', 'color', 'gradient']}
                onChange={e => {
                  const type = e.target.value;
                  const ret = {};

                  if(type === 'none') {
                    ret['_color'] = bgColor;
                    ret['color'] = null;
                  }
                  else if(type === 'color') {
                    ret['color'] = getBasic(surface, background, surface._root.palette, .5);
                  }
                  else if(type === 'gradient') {
                    ret['color'] = getGradient(surface, background, surface._root.palette, .5);
                  }
                  update(ret);
                }}
              />
            }
          />
        </React.Fragment>
      }

      {bgColor.type === 'palette' &&
        <Field 
          label="Color"
          nested={true}
          children={
            <ColorPicker
              color={bgColor._str}
              palette={paletteColors}
              onClear={() => update({'color': null})}
              onChangeComplete={color => {
                const key = findOrCreatePaletteKey(color.hex, palette)
                update({
                  'color.paletteKey': key,
                  'color.alpha': color.rgb.a,
                  [`_root.palette.${key}`]: color.hex,
                })
              }}
            />
          }
        />
      }

      {bgColor.type === 'linear' &&
        <React.Fragment>
          <Field 
            label="Color #1"
            nested={true}
            children={
              <ColorPicker
                color={bgColor.colorA._str}
                palette={paletteColors}
                onChangeComplete={color => {
                  const key = findOrCreatePaletteKey(color.hex, palette)
                  update({
                    'color.colorA.paletteKey': key,
                    'color.colorA.alpha': color.rgb.a,
                    [`_root.palette.${key}`]: color.hex,
                  })
                }}
              />
            }
          />

          <Field 
            label="Color #2"
            nested={true}
            children={
              <ColorPicker
                color={bgColor.colorB._str}
                palette={paletteColors}
                onChangeComplete={color => {
                  const key = findOrCreatePaletteKey(color.hex, palette)
                  update({
                    'color.colorB.paletteKey': key,
                    'color.colorB.alpha': color.rgb.a,
                    [`_root.palette.${key}`]: color.hex,
                  })
                }}
              />
            }
          />

          <Field 
            label="Angle"
            nested={true}
            onExploreClick={() => null}
            children={
              <Slider
                name="mb"
                bg="dark"
                color="white"
                value={bgColor.deg}
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

function getBasic(surface, bg, palette, alpha) {
  const c = bg.color || bg._color;

  if(!c) {
    return getOptimalBackgroundColor(surface, palette, [], alpha);
  }
  else if(c.type === 'palette') {
    const copy = {...c};
    fixAlpha(copy, alpha);
    return copy;
  }
  else if(c.type === 'linear') {
    const copy = {...c.colorA};
    fixAlpha(copy, alpha);
    return copy;
  }
}

function getGradient(surface, bg, palette, alpha) {
  const c = bg.color || bg._color;

  if(!c) {
    const color = getOptimalBackgroundColor(surface, palette, [], alpha);

    return {
      type: 'linear',
      colorA: color,
      colorB: cloneCrude(color),
      deg: 0,
    }
  }
  else if(c.type === 'palette') {
    const color = {...c, alpha};

    return {
      type: 'linear',
      colorA: cloneCrude(color),
      colorB: cloneCrude(color),
      deg: 0,
    }
  }
  else if(c.type === 'linear') {

    return {
      ...c,
      colorA: {...cloneCrude(c.colorA), alpha},
      colorB: {...cloneCrude(c.colorB), alpha},
    }
  }
}

const BackgroundTypeToText = {
  none: 'none',
  palette: 'color',
  linear: 'gradient',
  image: 'image',
}

const imagePickerStyle = {
  maxHeight: 300,
  overflowY: 'auto',
  marginTop: -20,
  paddingTop: 24,
}