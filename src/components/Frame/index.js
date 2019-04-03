import React from 'react';

import { Box } from 'rebass';
import theme from '../../styles/theme';
import Flyer from '../Flyer';


function Frame({scale, flyer, selectable, ...props}) {

  const width = flyer._computed.bb.w;
  const height = flyer._computed.bb.h;
  const scaledHeight = height * scale;
  const scaledWidth = width * scale;

  return (
    <Box style={{width: scaledWidth, height: scaledHeight, boxShadow: theme.shadows.large}} {...props}>
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