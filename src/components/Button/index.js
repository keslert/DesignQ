import { Button as RebassButton } from 'rebass'
import styled from 'styled-components';

const Button = styled(RebassButton)(props => ({
  minWidth: '120px',
  cursor: 'pointer',
  opacity: props.disabled ? 0.5 : 1,
  pointerEvents: props.disabled ? 'none' : 'all',
  userSelect: 'none',
  textTransform: 'uppercase',
}))

Button.defaultProps = {
  variant: 'primary',
  py: 3,
  px: 3,
  fontSize: 1,
}


export const SmallButton = styled(Button)
SmallButton.defaultProps = {
  py: 1,
  px: 1,
  fontSize: 0,
}

export default Button;