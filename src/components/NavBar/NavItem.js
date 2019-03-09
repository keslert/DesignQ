import { Flex } from 'rebass'
import styled from 'styled-components';

const NavItem = styled(Flex)(props => ({
  '&:before': {
    content: 'L',
  },

  color: props.theme.colors.white,
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: `${props.theme.fontSizes[1]}px`,
}))

NavItem.defaultProps = {
  p: "16px",
  flex: 1,
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  bg: 'dark',
}

export default NavItem;