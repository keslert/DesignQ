import { Box } from 'rebass'
import styled from 'styled-components';

const NavMarker = styled(Box)(props => ({
  position: 'absolute',
  bottom: 0,
  height: (props.height || 8) + 'px',
  borderRadius: props.borderRadius,
  borderBottomLeftRadius: 0,
  borderBottomRightRadius: 0,
  pointerEvents: 'none',
}))

NavMarker.defaultProps = {
  bg: 'white',
}

export default NavMarker;