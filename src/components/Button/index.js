import { Button as RebassButton } from 'rebass'
import styled from 'styled-components';

const Button = styled(RebassButton)({
  minWidth: '140px',
  cursor: 'pointer',
})

Button.defaultProps = {
  variant: 'primary',
  py: 3,
  px: 3,
}
export default Button;