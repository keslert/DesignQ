import React from 'react';

import { Flex, Box, Text } from 'rebass';
import Button from './Button';
import { withSize } from 'react-sizeme'
import Frame from './Frame';
import FrameToolbar from './Frame/Toolbar';

import { templates } from '../core/templates';
import { computeFlyer } from '../core/producer';


const flyer1 = templates.ACarolForTheHolidaySeason
const flyer2 = templates.AnnaMorrison

computeFlyer(flyer1);
computeFlyer(flyer2);

const GUTTERS = 16;
const BUTTON_HEIGHT = 80;
const ACTIONS_WIDTH = 250;
class Canvas extends React.Component {

  getScale = (maxWidth, maxHeight) => {
    const { frameWidth, frameHeight } = this.props;
    const scale = Math.min(maxWidth / frameWidth, maxHeight / frameHeight);

    return scale;
  }
  

  renderDefault = () => {
    const { size } = this.props;

    const scale = 1;

    return (
      <Flex flex={1}>
        <Box width={1/4} p={GUTTERS}>
        
        </Box>
        <Flex p={GUTTERS} flexDirection="column" alignItems="center">
          <FrameToolbar text="Primary Design" favorited={true} />
          <Frame scale={scale} width={size.w} height={size.h} flyer={flyer1} />
        </Flex>
        <Flex p={GUTTERS} flexDirection="column" alignItems="center">
          <FrameToolbar text="Click to make this the primary" favorited={false} />
          <Frame scale={scale} width={size.w} height={size.h} flyer={flyer2} />
          <Box p={GUTTERS}>
            <Button 
              variant="subtle"
              onClick={() => null}
              children="Skip"
            />
            <Text color='gray'>or press the right arrow</Text>
          </Box>
        </Flex>
        <Box width={1/4} p={GUTTERS}>
        
        </Box>
      </Flex>
    )


  }

  renderMode = (mode) => {
    switch(mode) {
      default: 
        return this.renderDefault();
    }
  }

  render() {
    const { mode = 'default' } = this.props;

    return (
      <Flex css={{width: '100%', height: '100%'}} justifyContent="center" alignItems="center">
        {this.renderMode(mode)}
      </Flex>
    )
  }
}

export default withSize({monitorHeight: true})(Canvas)