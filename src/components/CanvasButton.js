import React from 'react';
import { Box, Flex, Text } from 'rebass';
import styled from 'styled-components';

const Button = styled(Flex)(props => ({
  border: `1px solid ${props.theme.colors.lightgray}`,
  '&:hover': {
    background: props.theme.colors[props.bg + '_darken'],
  },
  width: props.small ? '60px' : '72px',
  height: props.height || (props.small ? '60px' : '72px'),
  borderTopLeftRadius: props.btr ? '2px' : 0,
  borderTopRightRadius: props.btr ? '2px' : 0,
  borderBottomLeftRadius: props.bbr ? '2px' : 0,
  borderBottomRightRadius: props.bbr ? '2px' : 0,
  cursor: 'pointer',
  justifyContent: 'center',
  alignItems: 'center',
  flexDirection: 'column',
  flexShrink: 0,
  letterSpacing: '.025em',
  userSelect: 'none',
  padding: '8px 0', 
  ...(!props.highlight ? {} : {
    boxShadow: 'inset 0 1px 2px 0px rgb(178, 186, 204)',
    border: 'none',
    paddingTop: '10px',
  }),
  ...(props.disabled ? {
    cursor: 'not-allowed',
    color: props.theme.colors.dark_light,
    // transform: 'scale(0.9)',
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

function CanvasButton({SvgComponent, label, footer, mb, ...props}) {
  return (
    <React.Fragment>
      <Button {...props} btr={true} bbr={!footer} mb={footer ? 0 : mb}>
        <Flex flex={1} alignItems="center">
          {SvgComponent}
        </Flex>
        <Text
          mt="6px"
          fontWeight="900"
          fontSize={props.small ? "7px" : "8px"}
          style={{textTransform: 'uppercase'}}
          children={label}
        />
      </Button>
      {footer && 
        <Button
          mt="-1px"
          mb={mb}
          bg="nearwhite_light"
          btr={false} 
          bbr={true}
          disabled={props.disabled}
          height="auto"
          onClick={footer.onClick}
          children={
            <Text
              fontWeight="900"
              fontSize="7px" 
              style={{textTransform: 'uppercase'}}
              children={footer.label}
            />
          }
        />
      }
    </React.Fragment>
  )
}

export default CanvasButton;