import React from 'react';
import styled from 'styled-components';


function Select({options, ...props}) {

  return (
    <S_Select {...props}>
      {options.map(option => (
        <option value={option}>{option}</option>
      ))}
    </S_Select>
  )
}

const S_Select = styled.select(props => ({
  outline: 'none',
  borderRadius: '3px',
  width: '100%',
  height: '36px',
  fontSize: props.theme.fontSizes[1] + 'px',
  padding: '8px 10px',
  background: props.theme.colors[props.bg],
  color: props.theme.colors[props.color],
  border: '1px solid hsla(222,23%,24%, 0.1)',
  '&:focus': {
    borderColor: props.theme.colors.blue,
  },
  backgroundImage: "url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20width%3D%22292.4%22%20height%3D%22292.4%22%3E%3Cpath%20fill%3D%22%23ffffff%22%20d%3D%22M287%2069.4a17.6%2017.6%200%200%200-13-5.4H18.4c-5%200-9.3%201.8-12.9%205.4A17.6%2017.6%200%200%200%200%2082.2c0%205%201.8%209.3%205.4%2012.9l128%20127.9c3.6%203.6%207.8%205.4%2012.8%205.4s9.2-1.8%2012.8-5.4L287%2095c3.5-3.5%205.4-7.8%205.4-12.8%200-5-1.9-9.2-5.5-12.8z%22%2F%3E%3C%2Fsvg%3E')",
  backgroundRepeat: 'no-repeat, repeat',
  backgroundPosition: 'right .85em top 50%, 0 0',
  backgroundSize: '.65em auto, 100%',
  WebkitAppearance: 'none',
}))

S_Select.defaultProps = {
  bg: 'white',
  color: 'dark',
}

export default Select;