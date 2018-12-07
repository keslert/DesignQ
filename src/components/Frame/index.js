import React from 'react';

import { Flex, Box } from 'rebass';
import theme from '../../styles/theme';
import NavItem from '../NavBar/NavItem';
import Flyer from '../Flyer';

import { e4 } from '../../core/data/templates';
import { computeFlyer } from '../../core/generator';

const flyer = computeFlyer(e4);

class Frame extends React.Component {

  render() {
    const { height, width, scale } = this.props;

    const scaledHeight = height * scale;
    const scaledWidth = width * scale;
    return (
      <Box style={{width: scaledWidth, height: scaledHeight, boxShadow: theme.shadows.large}}>
        <Box css={{transformOrigin: '0 0', transform: `scale(${scale})`}}>
          <Box style={{height, width, background: theme.gradients.light}}>
            <Flyer flyer={flyer} />
          </Box>
        </Box>
      </Box>
    )
  }
}

export default Frame;