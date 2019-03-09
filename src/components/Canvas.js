import React, { useCallback, useState } from 'react';

import { Flex, Box, Text } from 'rebass';
import Button from './Button';
import { withSize } from 'react-sizeme'
import Frame from './Frame';
import FrameToolbar from './Frame/Toolbar';
import CanvasToolbar from './CanvasToolbar';

import { templates } from '../core/templates';
import { computeFlyer } from '../core/producer';


const flyer1 = templates.ACarolForTheHolidaySeason
const flyer2 = templates.AnnaMorrison

computeFlyer(flyer1);
computeFlyer(flyer2);

function Canvas({flyerSize}) {

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
            <div style={{position: 'relative'}}>
              <Frame scale={scale} width={flyerSize.w} height={flyerSize.h} flyer={flyer1} />
              {showComparison &&
                <div style={{position: 'absolute', top: 0, left: 0}}>
                  <Frame scale={scale} width={flyerSize.w} height={flyerSize.h} flyer={flyer2} />
                </div>
              }

            </div>
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
            <Frame scale={scale} width={flyerSize.w} height={flyerSize.h} flyer={flyer2} />
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