import React from 'react';
import styled from 'styled-components';

function NavText({text, highlight, visible}) {

  return (
    <React.Fragment>
      <Dot 
        visible={visible}
        highlight={highlight} 
      />
      <span>{text}</span>
    </React.Fragment>
  )
}

export default NavText;

const Dot = styled.span(props => ({
  width: '6px',
  height: '6px',
  borderRadius: '3px',
  background: !props.visible
    ? 'none'
    : props.highlight ? props.theme.colors.blue : 'currentColor',
  marginLeft: 'calc(-6px - .5em)',
  marginRight: '.5em',
}))