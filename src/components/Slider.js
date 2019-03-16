import React from 'react';
import { Box, Flex, Text } from 'rebass';
import styled from 'styled-components';

const S_Slider = styled.input(props => ({
  WebkitAppearance: 'none',
  width: 'calc(100% - 5px)', /* Full-width */
  height: '2px', /* Specified height */
  background: props.theme.colors[props.bg],
  outline: 'none', /* Remove outline */
  '::-webkit-slider-thumb': {
    WebkitAppearance: 'none',
    width: '12px', /* Set a specific slider handle width */
    height: '12px', /* Slider handle height */
    background: props.theme.colors.white, /* Green background */
    cursor: 'pointer', /* Cursor on hover */
    borderRadius: '9999px',
  }
}))

function Slider({showValue, ...props}) {

  return (
    <Flex bg="dark" p="5px 12px 13px" style={{borderRadius: '3px'}} alignItems="center">
      <Box flex={1}>
        <S_Slider
          {...props}
          bg="off_dark"
          type="range"
        />
      </Box>
      {showValue &&
        <Text
          width="30px"
          textAlign="center"
          mt="6px"
          mr="-6px"
          fontSize={0}
          color="white"
          children={props.value}
        />
      }      

    </Flex>
  )
}

export default Slider;