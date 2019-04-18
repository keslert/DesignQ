import React, { useState, useCallback } from 'react';
import { Flex, Box } from 'rebass';
import { 
  Alpha, 
  ColorWrap,
  Hue, 
  Saturation, 
} from 'react-color/lib/components/common';
import colorHelper from 'react-color/lib/helpers/color';
import { Input } from './FormInput'
import styled from 'styled-components';
import chroma from 'chroma-js';
import CloseSvg from '../svg/close.svg';
import OpacityButton from './OpacityButton';

function ColorPicker(props) {
  const [open, setOpen] = useState(false);
  const [inputValue, setInputValue] = useState(props.color);
  const handleChange = useCallback(data => {
    const colors = colorHelper.toState(data);
    const value = colors.hex + (colors.rgb.a === 1 ? '' : Math.floor(colors.rgb.a * 255).toString(16))
    setInputValue(value);
    props.onChange(data);
  }, [])

  return (
    <Box bg="dark" p="8px 10px" style={{position: 'relative', borderRadius: '3px'}}>

      <Box style={{position: 'relative'}} mx="-10px">
        <Box style={{position: 'absolute', top: '3px', left: '8px', pointerEvents: 'none'}}>
          <Swatch color={props.hex} />
        </Box>
        <Input
          onFocus={() => setOpen(true)}
          onBlur={() => setOpen(false)}
          style={{
            outline: 'none',
            background: 'transparent',
            color: 'white',
            border: 'none',
            width: '100%',
            padding: '8px 10px 8px 42px',
            fontFamily: 'monospace',
          }}
          placeholder="(none)"
          value={inputValue}
          onChange={e => {
            const value = e.target.value;
            setInputValue(value);
            if(value === '') {
              props.onClear && props.onClear();
            }
            else if(colorHelper.simpleCheckForValidColor(value)) {
              props.onChange(value);
            }
          }}
        />
        {props.onClear && 
          <OpacityButton 
            style={{position: 'absolute', top: '8px', right: '8px'}} 
            color="gray"
            onClick={props.onClear}
            children={<CloseSvg size={16} />}
          />
        }
      </Box>

      {open && 
        <Box>

          <Box bg="off_dark" mx="-10px" my={2} style={{height: '1px'}} />

          <Flex mx="-2px" mb={1} flexWrap="wrap">
            {props.palette.map(color => 
              <Swatch 
                onMouseDown={e => {
                  // e.stopPropagation();
                  e.preventDefault();
                  const c = chroma(color).alpha(props.rgb.a)
                  handleChange(c.css());
                }}
                key={color} 
                color={color} 
              />
            )}
          </Flex>


          <Box 
            style={{position: 'relative', height: '150px'}} 
            mb={1}
          >
            <Saturation 
              hsl={props.hsl}
              hsv={props.hsv}
              onChange={handleChange}
            />
          </Box>

          <Box 
            style={{position: 'relative', height: "10px"}}
            mb={1}
          >
            <Hue 
              hsl={props.hsl} 
              onChange={handleChange}
            />
          </Box>
            
          {!props.hideAlpha && 
            <Box 
              style={{position: 'relative', height: '10px'}} 
              bg="white"
            >
              <Alpha  
                rgb={props.rgb}
                hsl={props.hsl}
                renderers={props.renderers}
                onChange={handleChange}
              />
            </Box>
          }
          
        </Box>
      }
    </Box>
  )
}

export default ColorWrap(ColorPicker);

ColorPicker.defaultProps = {
  width: 226,
}

export const Swatch = styled.div(props => ({
  position: 'relative',
  zIndex: 999,
  margin: '2px',
  width: '24px',
  height: '24px',
  borderRadius: '3px',
  boxShadow: 'inset 0 0 0px 1px rgba(0,0,0,.25)',
  background: props.color,
  cursor: 'pointer',
}))