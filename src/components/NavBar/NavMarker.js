import { Box } from 'rebass'
import styled from 'styled-components';

const NavMarker = styled(Box)(props => ({
  position: 'absolute',
  bottom: 0,
  height: '6px',
  borderRadius: '6px',
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  transition: 'left 0.3s ease-in, width 0.3s ease-in, color 0.3s ease-in',
}))

NavMarker.defaultProps = {
  bg: 'white',
}

export default NavMarker;