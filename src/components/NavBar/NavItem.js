import { Flex } from 'rebass'
import styled from 'styled-components';

const NavItem = styled(Flex)(props => ({
  color: props.theme.colors.white,
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: props.theme.fontSizes[1] + 'px',
  letterSpacing: '.06em',
  textTransform: 'uppercase',
  transition: 'background .3s',
  maxWidth: '220px',
}))

NavItem.defaultProps = {
  p: "22px",
  flex: 1,
  color: 'white',
  justifyContent: 'center',
  alignItems: 'center',
  bg: 'dark',
}

export default NavItem;