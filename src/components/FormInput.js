import React from 'react';
import styled from 'styled-components';
import { Box, Flex, Text } from 'rebass';




const inputStyles = props => ({
  outline: 'none',
  color: props.theme.colors.dark,
  background: props.theme.colors.white,
  borderRadius: '3px',
  border: 'none',
  fontSize: props.theme.fontSizes[1] + 'px',
  padding: '8px 10px',
  width: '100%',
  transition: 'box-shadow .15s',
  boxShadow: `0 1px 0px ${props.theme.colors.lightgray}`,
  '&:focus': {
    boxShadow: `0 2px 0px ${props.theme.colors.blue}`,
  },
  '&::placeholder': {
    color: props.theme.colors.gray,
  }
})

const Input = styled.input(inputStyles)
const Textarea = styled.textarea(inputStyles);

function FormInput(props) {

  const Component = props.rows ? Textarea : Input

  return (
    <Box>
      <Text
        as="label"
        color="dark"
        fontSize={1}
        fontWeight="700"
        mb={1}
        style={{textTransform: 'uppercase'}}
        children={props.label}
      />
      <Box mb="2px">
        <Component
          name={props.name}
          value={props.value}
          rows={props.rows}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
      </Box>
      <Text
        color="gray"
        fontSize={0}
        style={{fontStyle: 'italic'}}
        children={props.hint}
      />
    </Box>
  )
}

export default FormInput;