import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import { 
  Alpha, 
  ColorWrap,
  EditableInput, 
  Hue, 
  Saturation, 
} from 'react-color/lib/components/common';
import styled from 'styled-components';
import chroma from 'chroma-js';

function ColorPicker(props) {
  const [open, setOpen] = useState(false);
  return (
    <Box bg="dark" p="8px 10px" style={{position: 'relative', borderRadius: '3px'}} onClick={() => setOpen(true)}>

      <Box style={{position: 'relative'}} mx="-10px">
        <Box style={{position: 'absolute', top: '3px', left: '8px', pointerEvents: 'none'}}>
          <Swatch color={props.hex} />
        </Box>
        <EditableInput
          style={{ input: {
            outline: 'none',
            background: 'transparent',
            color: 'white',
            border: 'none',
            width: '100%',
            padding: '8px 10px 8px 42px'
          }}}
          value={props.rgb.a === 1 ? props.hex : (props.hex + Math.floor(props.rgb.a * 255).toString(16))}
          onChange={value => {
            if(value === '') {
              props.onClear && props.onClear();
            }
            else {
              props.onChange(value);
            }
          }}
        />
      </Box>

      {open && 
        <Box>

          <Box bg="off_dark" mx="-10px" my={2} style={{height: '1px'}} />

          <Flex mx="-2px" mb={2}>
            {props.palette.map(color => 
              <Swatch 
                onClick={() => props.onChange(chroma(color).alpha(props.rgb.a).css())}
                key={color} 
                color={color} 
              />
            )}
          </Flex>


          <Box 
            style={{position: 'relative', height: '150px'}} 
            mb={2}
          >
            <Saturation 
              hsl={props.hsl}
              hsv={props.hsv}
              onChange={props.onChange}
            />
          </Box>

          <Box 
            style={{position: 'relative', height: "10px"}}
            mb={2}
          >
            <Hue 
              hsl={props.hsl} 
              onChange={props.onChange}
            />
          </Box>
            
          <Box 
            style={{position: 'relative', height: '10px'}} 
            bg="white"
          >
            <Alpha  
              rgb={props.rgb}
              hsl={props.hsl}
              renderers={props.renderers}
              onChange={props.onChange}
            />
          </Box>
          
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
  margin: '0 2px',
  width: '24px',
  height: '24px',
  borderRadius: '3px',
  boxShadow: 'inset 0 0 0px 1px rgba(0,0,0,.25)',
  background: props.color,
  cursor: 'pointer',
}))