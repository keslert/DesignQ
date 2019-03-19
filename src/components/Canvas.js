import React, { useCallback, useState, useContext } from 'react';
import Button from './Button';
import Frame from './Frame';
import FrameToolbar from './Frame/Toolbar';
import CanvasToolbar from './CanvasToolbar';
import ContentForm from '../containers/ContentForm';
import FrameGallery from './FrameGallery';
import { DispatchContext } from '../containers/Queue';
import { Flex, Box, Text } from 'rebass';
import { getStageFoci } from '../core/generator';
import { useKeyDown } from '../core/lib/hooks';

function Canvas(props) {
  const rootDispatch = useContext(DispatchContext)
  const [showComparison, setShowComparison] = useState(false);
  const clearSelection = useCallback(e => {
    if(e.target === e.currentTarget) {
      rootDispatch({type: 'SELECT', selection: null});
    }
  }, [])

  const scale = 0.8;

  const showContentForm = props.stage && props.stage.type === 'content';
  const showGallery = props.viewMode === 'grid';

  const showPrimary = !showContentForm;
  const showSecondary = !showGallery && !showContentForm;

  const handleKeyPress = useCallback(
    showSecondary ? makeHandleKeyPress(rootDispatch) : null, 
    [showSecondary]
  );
  useKeyDown(handleKeyPress);
  
  const showUpgrade = showPrimary;
  const showCompare = showPrimary;
  const showResume = showPrimary && props.stage;
  const showGridBtn = showPrimary;
  const showMerge = showPrimary;
  
  const primary = (showComparison || !showPrimary)
    ? props.secondary
    : props.primary
  const secondary = props.secondary;
  const list = props.list || [];

  const stage = props.stage || props.secondary._stage;
  const foci = getStageFoci(stage);

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
            <FrameToolbar 
              text={`Primary Design - #${primary.id}`}
              viewFavorites={true}
              onClick={() => rootDispatch({type: 'VIEW_FAVORITES'})} 
            />
            <Frame 
              scale={scale} 
              width={primary._computed.bb.w} 
              height={primary._computed.bb.h} 
              flyer={primary}
              selectable={true}
            />
            <Box pt={3} style={{height: 100, textAlign: 'center'}}>
              <Text color="gray" fontSize={0} mb={1} style={{textTransform: 'uppercase'}}>Currently Exploring</Text>
              <Flex justifyContent="center" style={{overflowX: 'auto'}}>
                {foci.map((item, i) => (
                  <Text
                    as="div"
                    className="sibling-divider"
                    key={item.label}
                    color={stage.focus === item.focus ? 'dark' : 'gray'}
                    fontWeight={stage.focus === item.focus ? 'bold' : 'normal'}
                    fontSize={2}
                    style={{cursor: 'pointer'}}
                    children={item.label}
                    onClick={() => rootDispatch({type: 'SET_STAGE', stage: item})}
                  />
                ))}
              </Flex>
            </Box>
          </Box>
        </Flex>
        
        <CanvasToolbar
          viewMode={props.viewMode}
          showResume={showResume}
          showUpgrade={showUpgrade}
          showCompare={showCompare}
          showGrid={showGridBtn}
          showMerge={showMerge}
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
          {showSecondary && 
            <Box>
              <FrameToolbar 
                text={`Exploratory Design - #${secondary.id}`} 
                favorited={secondary._favorited}
                onClick={() => rootDispatch({type: 'TOGGLE_FAVORITE', flyer: secondary})}
              />
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

          {showGallery &&
            <FrameGallery
              flyers={props.list}
              selected={secondary}
              size={{
                width: (props.size.width / 2) - 1,
                height: props.size.height,
              }}
            />
          }

        </Flex>
      </Flex>
    </Flex>
  )
}

export default Canvas;

const makeHandleKeyPress = dispatch => e => {
  if(e.target.hasOwnProperty('value')) return; // don't listen to input or textarea.

  if(e.code === 'ArrowRight') { 
    const type = e.shiftKey ? 'STEP' : 'NEXT';
    dispatch({type});
  } 
  else if(e.code === 'ArrowLeft') {
    dispatch({type: 'PREV'})
  }
  else if(e.code === 'Space') { // spacebar
    e.preventDefault();
    dispatch({type: 'STEP', upgrade: true});
  }
}