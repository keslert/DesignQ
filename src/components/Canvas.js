import React, { useCallback, useState, useContext } from 'react';
import Frame from './Frame';
import FrameToolbar from './Frame/Toolbar';
import CanvasToolbar from './CanvasToolbar';
import ContentForm from '../containers/ContentForm';
import FrameGallery from './FrameGallery';
import { DispatchContext } from '../containers/Queue';
import { Flex, Box, Text } from 'rebass';
import { useKeyDown } from '../core/lib/hooks';

function Canvas(props) {
  const rootDispatch = useContext(DispatchContext)
  const [showComparison, setShowComparison] = useState(false);
  const clearSelection = useCallback(e => {
    if(e.target === e.currentTarget) {
      rootDispatch({type: 'SELECT', selection: null});
    }
  }, [])

  const scale = 0.75;

  const haveList = props.list && props.list.length;
  const showContentForm = props.stage && props.stage.type === 'content';
  const showGallery = !showContentForm && (props.viewMode === 'grid'|| haveList);

  const showPrimary = !showContentForm;
  const showSecondary = !showGallery && !showContentForm;

  // Only listen for keypresses when secondary is visible.
  const handleKeyPress = useCallback(
    showSecondary ? makeHandleKeyPress(rootDispatch) : null, 
    [showSecondary]
  );
  useKeyDown(handleKeyPress);
  
  const showNext = showPrimary && !haveList;
  const showResume = showPrimary && props.stage !== props.generationStage;
  const showAdvance = !showResume && showPrimary;
  const showUpgrade = showPrimary;
  const showCompare = showPrimary;
  const showGridBtn = showPrimary && !haveList;
  const showMerge = false && showPrimary;
  
  const primary = (showComparison || !showPrimary)
    ? props.secondary
    : props.primary
  const secondary = props.secondary;

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
          </Box>
        </Flex>
        
        <CanvasToolbar
          viewMode={props.viewMode}
          showNext={showNext}
          showAdvance={showAdvance}
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
          {!showSecondary ? null : 
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
            </Box>
          }
          {!showContentForm ? null :
            <ContentForm 
              flyer={secondary}
            />
          }

          {!showGallery ? null :
            <FrameGallery
              flyers={haveList ? props.list : props.generation}
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