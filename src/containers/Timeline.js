import React, { useContext, memo } from 'react';
import { Box, Text } from 'rebass';
import { DispatchContext } from './Queue';
import FrameGallery from '../components/FrameGallery';

const WIDTH = 256;

function Timeline({flyers, selected, size}) {
  const rootDispatch = useContext(DispatchContext);

  return (
    <Box mx={"-6px"}>
      <FrameGallery
        flyers={flyers}
        columns={2}
        selected={selected}
        hideToolbar={true}
        frameMarginX={6}
        frameMarginT={12}
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
}

export default memo(Timeline);