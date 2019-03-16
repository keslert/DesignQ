import React from 'react';

import { Flex, Box } from 'rebass';
import theme from '../../styles/theme';
import NavItem from '../NavBar/NavItem';
import Flyer from '../Flyer';


function Frame({scale, flyer, selectable}) {

  const width = flyer._computed.bb.w;
  const height = flyer._computed.bb.h;
  const scaledHeight = height * scale;
  const scaledWidth = width * scale;

  return (
    <Box style={{width: scaledWidth, height: scaledHeight, boxShadow: theme.shadows.large}}>
      <Box style={{transformOrigin: '0 0', transform: `scale(${scale})`}}>
        <Box style={{height, width, background: theme.gradients.light}}>
          <Flyer 
            flyer={flyer} 
            selectable={selectable} 
          />
        </Box>
      </Box>
    </Box>
  )
}

export default Frame;