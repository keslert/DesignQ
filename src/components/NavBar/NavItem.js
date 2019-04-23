import React from 'react';
import { Flex } from 'rebass'
import styled from 'styled-components';
import ProgressTailSvg from '../../svg/progress-tail.svg';
import ProgressHeadSvg from '../../svg/progress-head.svg';

const HEIGHT = 51;
function NavItem({selected, label, tail, head, children, ...rest}) {
  return (
    <Item 
      {...rest} 
      selected={selected}
      ml={tail ? "-8px" : 0} 
      mr={head ? "-8px" : 0}
    >
      {tail && <ProgressTailSvg height={HEIGHT} />}
      <Flex 
        flex={1}
        bg='currentcolor'
        justifyContent="center" 
        alignItems="center"
        children={children}
      />
      {head && <ProgressHeadSvg height={HEIGHT} />}
    </Item>
  )
}

const Item = styled(Flex)(props => ({
  ...(props.selected ? {
    color: props.theme.colors.blue,
  } : {
    color: props.theme.colors.dark,
    '&:hover': {
      color: props.theme.colors.off_dark,
    }
  }),
  cursor: 'pointer',
  fontWeight: 'bold',
  fontSize: props.theme.fontSizes[1] + 'px',
  letterSpacing: '.06em',
  textTransform: 'uppercase',
  transition: 'background .3s',
  height: HEIGHT + 'px',
  'svg': {
    flexShrink: 0,
  },
}))

export default NavItem;