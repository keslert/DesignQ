import React from 'react';
import { Box, Flex, Text } from 'rebass';
import styled from 'styled-components';

const Button = styled(Flex)(props => ({
  border: `1px solid ${props.theme.colors[
    props.bg === 'nearwhite' ? 'lightgray' : props.bg + '_darken'
  ]}`,
  '&:hover': {
    background: props.theme.colors[props.bg + '_darken'],
  },
  
  width: '72px',
  height: '72px',
  borderRadius: '2px',
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flexShrink: 0,
  letterSpacing: '.025em',
  userSelect: 'none',
  'svg': {
    fill: 'currentColor',
  },
  padding: '8px 0', 
  ...(!props.highlight ? {} : {
    boxShadow: 'inset 0 1px 2px 0px rgb(178, 186, 204)',
    border: 'none',
    paddingTop: '10px',
  }),
  ...(props.disabled ? {
    cursor: 'not-allowed',
    color: props.theme.colors.dark_light,
  } : {
    '&:active': {
      boxShadow: 'inset 0 1px 2px 0px rgb(178, 186, 204)',
      border: 'none',
      paddingTop: '10px',
    },
  }),

}))

Button.defaultProps = {
  bg: 'nearwhite',
  color: 'dark',
}

function CanvasButton({SvgComponent, label, ...props}) {
  return (
    <Button {...props}>
      <Flex flex={1} alignItems="center">
        {SvgComponent}
      </Flex>
      <Text 
        mt="6px"
        fontWeight="900"
        fontSize="8px" 
        style={{textTransform: 'uppercase'}}
        children={label}
      />
    </Button>
  )
}

export default CanvasButton;