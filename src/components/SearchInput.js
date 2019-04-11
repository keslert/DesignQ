import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import SearchSvg from '../svg/search.svg';
import BackSvg from '../svg/back.svg';

const Input = styled.input(props => ({
  outline: 'none',
  border: '1px solid ' + props.theme.colors.dark,
  borderTopRightRadius: '18px',
  borderBottomRightRadius: '18px',
  borderTopLeftRadius: props.hasBackButton ? 0 : '18px',
  borderBottomLeftRadius: props.hasBackButton ? 0 : '18px',
  fontSize: props.theme.fontSizes[1] + 'px',
  color: props.theme.colors.dark,
  padding: '8px 16px 8px 28px',
  width: '100%',
  height: '36px',
  lineHeight: '36px',
  borderColor: props.theme.colors[props.borderColor],
  // '&:focus': {
  //   borderColor: props.theme.colors.blue,
  // }
}))

const BackButton = styled.div(props => ({
  background: props.theme.colors.blue,
  color: props.theme.colors.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopLeftRadius: '18px',
  borderBottomLeftRadius: '18px',
  height: '100%',
  width: '36px',
  height: '36px',
  flexShrink: 0,
  cursor: 'pointer',
  '&:hover': {
    background: props.theme.colors.blue_darken,
  },
}))

function SearchInput({
  onSubmit,
  onBackClick,
  hasBackButton,
  ...props
}) {

  const keyDown = useCallback(e => {
    if(onSubmit && e.keyCode === 13) { // Enter
      e.preventDefault();
      onSubmit(e.target.value);
    }
  }, [])

  return (
    <Flex>
      {hasBackButton &&
        <BackButton 
          onClick={onBackClick}
          children={<BackSvg size={12} />}
        />
      }
      <Box width="100%" color="dark" style={{position: 'relative'}}>
        <Input
          {...props}
          onKeyDown={props.onKeyDown || keyDown}
        />
        <Box style={iconStyle}>
          <SearchSvg
            size={14}
          />
        </Box>
      </Box>


    </Flex>
  )
}

export default SearchInput;

const iconStyle = {
  position: 'absolute', 
  top: '9px', 
  left: '9px',
}