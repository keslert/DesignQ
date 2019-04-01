import { Button as RebassButton } from 'rebass'
import styled from 'styled-components';

const Button = styled(RebassButton)(props => ({
  minWidth: '140px',
  cursor: 'pointer',
  opacity: props.disabled ? 0.5 : 1,
  pointerEvents: props.disabled ? 'none' : 'all',
  userSelect: 'none',
}))

Button.defaultProps = {
  variant: 'primary',
  py: 3,
  px: 3,
}


export const SmallButton = styled(Button)
SmallButton.defaultProps = {
  py: 1,
  px: 1,
  fontSize: 1,
}

export default Button;