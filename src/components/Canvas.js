import React, { useCallback, useState, useContext } from 'react';

import { Flex, Box, Text } from 'rebass';
import Button from './Button';
import Frame from './Frame';
import FrameToolbar from './Frame/Toolbar';
import CanvasToolbar from './CanvasToolbar';
import ContentForm from '../containers/ContentForm';
import { DispatchContext } from '../containers/Queue';

function Canvas(props) {
  const rootDispatch = useContext(DispatchContext)
  const [showComparison, setShowComparison] = useState(false);
  const clearSelection = useCallback(e => {
    if(e.target === e.currentTarget) {
      rootDispatch({type: 'SELECT', selection: null});
    }
  })

  const scale = 0.75;

  const showContentForm = props.secondary._stage.type === 'content';

  const showPrimary = !showContentForm;
  const primary = (showComparison || !showPrimary)
    ? props.secondary
    : props.primary
  const secondary = props.secondary;

  const showUpgrade = showPrimary;
  const showCompare = showPrimary;
  const showResume = showPrimary && props.stage;

  return (
    <Flex 
      style={{width: '100%', height: '100%'}} 
      justifyContent="center" 
      alignItems="center"
      onClick={clearSelection}
    >
      <Flex flex={1} style={{height:"100%"}}>
        <Flex 
          flex={1} 
          alignItems="center" 
          justifyContent="center" 
          onClick={clearSelection}
        >
          <Box>
            <FrameToolbar text={`Primary Design - #${primary.id}`} favorited={true} />
            <Frame 
              scale={scale} 
              width={primary._computed.bb.w} 
              height={primary._computed.bb.h} 
              flyer={primary}
              selectable={true}
            />
            <Box pt={3} style={{height: 100, textAlign: 'center'}}>
              <Text color="gray" fontSize={0} mb={1} style={{textTransform: 'uppercase'}}>Currently Exploring</Text>
              <Text color="gray">Borders | Text Decals</Text>
            </Box>
          </Box>
        </Flex>
        
        <CanvasToolbar
          showResume={showResume}
          showUpgrade={showUpgrade}
          showCompare={showCompare}
          onCompareDown={() => setShowComparison(true)}
          onCompareUp={() => setShowComparison(false)}
        />

        <Flex 
          flex={1} 
          bg="nearwhite" 
          alignItems="center" 
          justifyContent="center" 
          onClick={clearSelection}
        >
          {showPrimary && 
            <Box>
              <FrameToolbar text={`Exploratory Design - #${secondary.id}`} favorited={false} />
              <Frame 
                scale={scale} 
                width={secondary._computed.bb.w} 
                height={secondary._computed.bb.h}
                flyer={secondary}
                selectable={true}
              />
              <Box pt={3} style={{height: 100, textAlign: 'center'}}>
                <Button 
                  variant="light"
                  onClick={() => rootDispatch({type: 'STEP'})}
                  children="Next Design"
                />
                <Text color='gray' fontSize={1}>or press the right arrow</Text>
              </Box>
            </Box>
          }
          {showContentForm && 
            <ContentForm 
              flyer={secondary}
            />
          }

        </Flex>
      </Flex>
    </Flex>
  )
}

export default Canvas;

function getScale(size, maxSize) {
  const scale = Math.min(
    size.w / maxSize.w,
    size.h / maxSize.h,
    1
  );
  return scale;
}