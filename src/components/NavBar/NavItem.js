import { Flex } from 'rebass'
import styled from 'styled-components';

const NavItem = styled(Flex)(props => ({
  border: '1px solid #fff',
  borderTop: 'none',
  borderBottom: 'none',
  background: props.selected 
    ? `linear-gradient(to top, ${props.theme.colors.black} 4px, ${props.theme.colors.nearwhite} 4px)`
    : props.theme.colors.nearwhite,
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: `${props.theme.fontSizes[1]}px`,
  '&:hover': {
    background: props.selected 
      ? `linear-gradient(to top, ${props.theme.colors.black} 4px, ${props.theme.colors.nearwhite_darken} 4px)`
      : props.theme.colors.nearwhite_darken
  },
}))

NavItem.defaultProps = {
  p: "12px",
  flex: 1,
  color: 'black',
  justifyContent: 'center',
  alignItems: 'center',
}

export default NavItem;