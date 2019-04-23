import React, { useContext, memo } from 'react';
import { Box, Flex, Text } from 'rebass';
import { DispatchContext } from './Queue';
import FrameGallery from '../components/FrameGallery';
import HistoryDocSvg from '../svg/history-doc.svg';

const WIDTH = 270;

function Timeline({flyers, selected, size}) {
  const rootDispatch = useContext(DispatchContext);

  return (
    <Box>

      {flyers.length 
        ? (
          <Box ml="-6px" mr="-14px">
            <FrameGallery
              flyers={flyers}
              selected={selected}
              hideToolbar={true}
              columns={2}
              itemMarginX={6}
              itemMarginY={6}
              onSelect={flyer => {
                rootDispatch({type: 'SET_VIEW_MODE', viewMode: 'comparison'});
                rootDispatch({type: 'SET_SECONDARY', secondary: flyer});
              }}
              size={{
                width: WIDTH,
                height: size.height - 1,
              }}
            />
          </Box>
        )
        : (
          <Flex flexDirection="column" alignItems="center" p={3} pt={4}>
            <Box
              mb={3}
              color="rgba(255,255,255,.1)"
              children={<HistoryDocSvg size={180} />}
            />
            
            <Text
              color="rgba(255,255,255,.5)"
              fontSize={2}
              children="This history panel is where your previously updated and favorited designs will be saved."
            />
          </Flex>
        )
      
      }
    </Box>
  )
}

export default memo(Timeline);