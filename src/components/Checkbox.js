import React from 'react';
import {Box, Text}from 'rebass';
import styled from 'styled-components';

const Label = styled.label(props => ({
  display: 'flex',
  fontSize: props.theme.fontSizes[0] + 'px',
  color: props.theme.colors.white,
  fontWeight: 'bold',
  lineHeight: "18px",
  marginRight: "2px",
}))

const S_Checkbox = styled.input(props => ({

}))

function Checkbox({label, checked, onClick}) {

  return (
    <Label>
      {label}
      <S_Checkbox
        type="checkbox"
        onClick={onClick}
        checked={checked}
      />
    </Label>
  )
}

export default Checkbox;