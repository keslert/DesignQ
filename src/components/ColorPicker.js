import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import { CustomPicker } from 'react-color';
import { 
  Alpha, 
  EditableInput, 
  Hue, 
  Saturation, 
} from 'react-color/lib/components/common';
import styled from 'styled-components';

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
          value={props.hex}
          onChange={props.onChange}
        />
      </Box>

      {open && 
        <Box>

          <Box bg="off_dark" mx="-10px" my={2} style={{height: '1px'}} />

          <Flex mx="-2px" mb={2}>
            {props.palette.map(color => 
              <Swatch key={color} color={color} />
            )}
          </Flex>


          <Box 
            style={{position: 'relative', height: '100px'}} 
            mb={2}
          >
            <Saturation {...props} />
          </Box>

          <Box 
            style={{
              position: 'relative', 
              height: "10px"
            }}
            mb={2}
            children={<Hue {...props} />}
          />
            
          <Box 
            style={{position: 'relative', height: '10px'}} 
            bg="white"
            children={<Alpha {...props} />}
          />
          
        </Box>
      }
    </Box>
  )
}

export default CustomPicker(ColorPicker);

const Swatch = styled.div(props => ({
  margin: '0 2px',
  width: '24px',
  height: '24px',
  borderRadius: '3px',
  boxShadow: 'inset 0 0 0px 1px rgba(0,0,0,.25)',
  background: props.color,
  cursor: 'pointer',
}))