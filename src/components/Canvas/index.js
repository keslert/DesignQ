import React from 'react';

import { Flex, Box, Text } from 'rebass';
import Button from '../Button';
import { withSize } from 'react-sizeme'
import Frame from '../Frame';
import FrameToolbar from '../Frame/Toolbar';

import { HallowHarvest, Barrys, ArtTalk, BakeSale } from '../../core/templates';
import { computeFlyer } from '../../core/generator';

const flyer1 = computeFlyer(BakeSale);
const flyer2 = computeFlyer(HallowHarvest);
const flyer3 = computeFlyer(ArtTalk);

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
    const { size, frames, frameWidth, frameHeight } = this.props;


    const maxWidth = (size.width - GUTTERS * 8 - ACTIONS_WIDTH * 2) / 2;
    const maxHeight = (size.height - GUTTERS * 2 - BUTTON_HEIGHT);
    const scale = this.getScale(maxWidth, maxHeight);

    return (
      <Flex flex={1}>
        <Box width={1/4} p={GUTTERS}>
        
        </Box>
        <Flex p={GUTTERS} flexDirection="column" alignItems="center">
          <FrameToolbar text="Primary Design" favorited={true} />
          <Frame scale={scale} width={frameWidth} height={frameHeight} flyer={flyer1} />
        </Flex>
        <Flex p={GUTTERS} flexDirection="column" alignItems="center">
          <FrameToolbar text="Primary Design" favorited={true} />
          <Frame scale={scale} width={frameWidth} height={frameHeight} flyer={flyer2} />
        </Flex>
        <Flex p={GUTTERS} flexDirection="column" alignItems="center">
          <FrameToolbar text="Click to make this the primary" favorited={false} />
          <Frame scale={scale} width={frameWidth} height={frameHeight} flyer={flyer3} />
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