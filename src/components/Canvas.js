import React, { useCallback, useState, useContext } from 'react';
import Frame from './Frame';
import FrameToolbar from './Frame/Toolbar';
import CanvasToolbar from './CanvasToolbar';
import ContentForm from '../containers/ContentForm';
import FrameGallery from './FrameGallery';
import { DispatchContext } from '../containers/Queue';
import { Flex, Box, Text } from 'rebass';
import { useKeyDown } from '../core/lib/hooks';
import { ProgressTypes } from '../core/journey';
import StageExhausted from './StageExhausted';

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
  const showStageExhaused = !showGallery && !props.secondary; // props.stage.exhausted;

  const showPrimary = !showContentForm;
  const showSecondary = !showGallery && !showContentForm && !showStageExhaused;

  // Only listen for keypresses when secondary is visible.
  const handleKeyPress = useCallback(
    (showSecondary || showStageExhaused) ? makeHandleKeyPress(rootDispatch) : null, 
    [showSecondary]
  );
  useKeyDown(handleKeyPress);
  
  const showNext = showPrimary && !showGallery && !showStageExhaused;
  const showPrev = showPrimary && !showGallery;
  const showResume = false;
  const showAdvance = showPrimary && (props.stage && props.stage.progress !== ProgressTypes.UNEXPLORED) && !haveList;
  const showUpgrade = showPrimary && props.secondary;
  const showCompare = showPrimary && props.secondary;
  const showSearch = props.stage.key === 'color.background';
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
                label="Primary Design"
                viewFavorites={true}
                onClick={() => rootDispatch({type: 'VIEW_FAVORITES'})} 
              />
              <Frame 
                scale={scale} 
                width={primary.size.w} 
                height={primary.size.h} 
                flyer={primary}
                selectable={primary === props.primary}
              />
            </Box>
          </Flex>
          
          <CanvasToolbar
            viewMode={props.viewMode}
            show={!showContentForm}
            showNext={showNext}
            showPrev={showPrev}
            showAdvance={showAdvance}
            showResume={showResume}
            showUpgrade={showUpgrade}
            showCompare={showCompare}
            showGrid={showGridBtn}
            showSearch={showSearch}
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
                  label={`Exploratory Design`} 
                  id={"#" + secondary.id}
                  favorited={secondary.favorited}
                  onClick={() => rootDispatch({type: 'TOGGLE_FAVORITE', flyer: secondary})}
                />
                <Frame 
                  scale={scale} 
                  width={secondary.size.w}
                  height={secondary.size.h}
                  flyer={secondary}
                  selectable={true}
                />
              </Box>
            }
            {!showContentForm ? null :
              <ContentForm 
                flyer={primary}
              />
            }

            {!showGallery ? null :
              <FrameGallery
                flyers={haveList ? props.list : props.stage.currentGeneration}
                canClose={haveList}
                onCloseClick={() => rootDispatch({type: 'SET_LIST', list: null})}
                selected={secondary}
                onFavorite={flyer => rootDispatch({type: 'TOGGLE_FAVORITE', flyer})}
                size={{
                  width: (props.size.width / 2) - 1,
                  height: props.size.height - 1,
                }}
              />
            }

            {!showStageExhaused ? null :
              <StageExhausted />
            }

          </Flex>
        </Flex>
      </Flex>
  )
}

export default Canvas;

const makeHandleKeyPress = dispatch => e => {
  if(
    e.target.hasOwnProperty('value') 
    || e.target.className.includes("ReactCrop")
  ) return; // don't listen to input or textarea ReactCrop;

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