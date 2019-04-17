import React, { useCallback } from 'react';
import styled from 'styled-components';
import { Flex, Box } from 'rebass';
import SearchSvg from '../svg/search.svg';
import MDSpinner from 'react-md-spinner';

const Input = styled.input(props => ({
  outline: 'none',
  border: '1px solid ' + props.theme.colors.dark,
  borderRadius: '18px',
  fontSize: props.theme.fontSizes[1] + 'px',
  color: props.theme.colors.dark,
  padding: '8px 16px 8px 28px',
  width: '100%',
  height: '36px',
  lineHeight: '36px',
  borderColor: props.theme.colors[props.borderColor],
  '&:focus': {
    borderColor: props.theme.colors[(props.borderColor || 'blue') + '_darken'],
  }
}))

function SearchInput(props) {

  const keyDown = useCallback(e => {
    if(e.keyCode === 13) { // Enter
      e.preventDefault();
      props.onSubmit(e.target.value);
    }
  }, [])

  return (
    <Flex>
      <Box width="100%" color="dark" className="relative">
        <Input
          {...props}
          onKeyDown={props.onKeyDown || keyDown}
        />
        <Box style={{position: 'absolute', left: 9, top: props.searching ? 7 : 9}}>
          {props.searching
            ? <MDSpinner singleColor="#262d3c"size={12} />
            : <SearchSvg size={14} />
          }
          
        </Box>
      </Box>
    </Flex>
  )
}

export default SearchInput;