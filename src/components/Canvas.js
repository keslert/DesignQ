import React, { useCallback, useState } from 'react';

import { Flex, Box, Text } from 'rebass';
import Button from './Button';
import { withSize } from 'react-sizeme'
import Frame from './Frame';
import FrameToolbar from './Frame/Toolbar';
import CanvasToolbar from './CanvasToolbar';

function Canvas(props) {

  const [showComparison, setShowComparison] = useState(false);

  const scale = 0.75;


  return (
    <Flex 
      style={{width: '100%', height: '100%'}} 
      justifyContent="center" 
      alignItems="center"
    >
      <Flex flex={1} style={{height:"100%"}}>
        <Flex flex={1} alignItems="center" justifyContent="center">
          <Box>
            <FrameToolbar text="Primary Design" favorited={true} />
            <Frame 
              scale={scale} 
              width={props.flyerSize.w} 
              height={props.flyerSize.h} 
              flyer={showComparison ? props.secondaryFlyer : props.primaryFlyer } 
            />
            <Box pt={3} style={{height: 100, textAlign: 'center'}}>
              <Text color="gray" fontSize={0} mb={1} style={{textTransform: 'uppercase'}}>Currently Exploring</Text>
              <Text color="gray">Borders | Text Decals</Text>
            </Box>
          </Box>
        </Flex>
        
        <CanvasToolbar 
          onCompareDown={() => setShowComparison(true)}
          onCompareUp={() => setShowComparison(false)}
        />

        <Flex flex={1} bg="nearwhite" alignItems="center" justifyContent="center">
          <Box>
            <FrameToolbar text="Click to make this the primary" favorited={false} />
            <Frame 
              scale={scale} 
              width={props.flyerSize.w} 
              height={props.flyerSize.h} 
              flyer={props.secondaryFlyer} 
            />
            <Box pt={3} style={{height: 100, textAlign: 'center'}}>
              <Button 
                variant="light"
                onClick={() => null}
                children="Next Design"
              />
              <Text color='gray' fontSize={1}>or press the right arrow</Text>
            </Box>
          </Box>
        </Flex>
      </Flex>
    </Flex>
  )
}

export default withSize({monitorHeight: true})(Canvas)

function getScale(size, maxSize) {
  const scale = Math.min(
    size.w / maxSize.w,
    size.h / maxSize.h,
    1
  );
  return scale;
}