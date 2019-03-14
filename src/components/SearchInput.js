import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import SearchSvg from '../svg/search.svg';
import BackSvg from '../svg/back.svg';

const Input = styled.input(props => ({
  border: 'none',
  borderTopRightRadius: '4px',
  borderBottomRightRadius: '4px',
  borderTopLeftRadius: props.hasBackButton ? 0 : '4px',
  borderBottomLeftRadius: props.hasBackButton ? 0 : '4px',
  fontSize: props.theme.fontSizes[1] + 'px',
  color: props.theme.colors.dark,
  padding: '8px 16px 8px 32px',
  width: '100%',
  height: '36px',
  lineHeight: '36px',
}))

const BackButton = styled.div(props => ({
  background: props.theme.colors.blue,
  color: props.theme.colors.white,
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderTopLeftRadius: '4px',
  borderBottomLeftRadius: '4px',
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
      onSubmit(props.value);
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
        <Box style={{position: 'absolute', top: '10px', left: '8px'}}>
          <SearchSvg
            size={16}
          />
        </Box>
      </Box>


    </Flex>
  )
}

export default SearchInput;