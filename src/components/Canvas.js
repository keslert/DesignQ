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
import { exportFlyer } from '../core/utils/export-utils';
import OpacityButton from './OpacityButton';
import ArrowSvg from '../svg/arrow.svg';
import GridSvg from '../svg/grid.svg';

function Canvas(props) {
  const rootDispatch = useContext(DispatchContext)
  const clearSelection = useCallback(e => {
    if(e.target === e.currentTarget) {
      rootDispatch({type: 'SELECT', selection: null});
    }
  }, [])

  const handleGridSelectFlyer = useCallback(flyer => {
    rootDispatch({type: 'SET_SECONDARY', secondary: flyer, preserveList: true});
  })

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
  const showPrev = showPrimary && !showGallery && props.stage.currentGenerationIndex !== 0;
  const showResume = false;
  const showAdvance = showPrimary && (props.stage && props.stage.progress !== ProgressTypes.UNEXPLORED) && !haveList;
  const showUpgrade = showPrimary && props.secondary;
  const showCompare = showPrimary && props.secondary;
  const showSearch = props.stage.key === 'image.image' && !haveList;
  const showGridBtn = showPrimary && !haveList;
  const showMerge = false && showPrimary;
  
  const comparison = props.comparison;
  const primary = comparison || (!showPrimary ? props.secondary : props.primary)
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
            bg='nearwhite'
            alignItems="center" 
            justifyContent="center" 
            className="relative"
            onClick={clearSelection}
          >
            {!showSecondary ? null : 
              <Box>
                <FrameToolbar 
                  id={"#" + secondary.id}
                  label="Exploratory Design"
                  favorited={secondary.favorited}
                  onCompareDown={() => rootDispatch({type: 'SET_COMPARISON', flyer: secondary})}
                  onCompareUp={() => rootDispatch({type: 'SET_COMPARISON', flyer: null})}
                  onFavoriteClick={() => rootDispatch({type: 'TOGGLE_FAVORITE', flyer: secondary})}
                  onDownloadClick={() => null}
                />
                <Frame 
                  scale={scale} 
                  width={secondary.size.w}
                  height={secondary.size.h}
                  flyer={secondary}
                  selectable={true}
                />
                <Flex style={{height: 60}} justifyContent="center" color="gray" pt={2}>
                  <OpacityButton
                    mx={2}
                    onClick={() => rootDispatch({type: 'PREV'})}
                    disabed={props.stage.currentGenerationIndex === 0}
                    children={<ArrowSvg size={20} />}
                  />
                  <Flex>
                    <Text
                      color="gray"
                      fontSize={2}
                      children={props.stage.currentGenerationIndex + 1}
                    />
                      
                    <Text
                      mx={1}
                      color="gray"
                      fontSize={2}
                      children="/"
                    />
                    <Text 
                      color="gray"
                      fontSize={2}
                      children={props.stage.currentGeneration.length}
                    />
                  </Flex>
                  <OpacityButton
                    mx={2}
                    onClick={() => rootDispatch({type: 'NEXT'})}
                    disabed={props.stage.currentGenerationIndex === props.stage.currentGeneration.length - 1}
                    style={{transform: 'rotateY(-180deg)'}}
                    children={<ArrowSvg size={20} />}
                  />
                </Flex>

              </Box>
            }
            {!showContentForm ? null :
              <ContentForm 
                flyer={primary}
              />
            }

            {!showGallery ? null :
              <Box mr="1px" pr="64px">
                <FrameGallery
                  
                  flyers={haveList ? props.list : props.stage.currentGeneration}
                  canClose={haveList}
                  onCloseClick={() => rootDispatch({type: 'SET_LIST', list: null})}
                  onSelect={handleGridSelectFlyer}
                  columns={2}
                  marginL={36}
                  marginR={8}
                  itemMarginX={12}
                  itemMarginY={12}
                  selected={secondary}
                  size={{
                    width: (props.size.width / 2) - 2 - 64,
                    height: props.size.height - 1,
                  }}
                />
              </Box>
            }

            {!showStageExhaused ? null :
              <StageExhausted stage={props.stage} />
            }

            {!showContentForm && 
              <Box style={{position: 'absolute', bottom: 10, right: 10}} width={50}>
                <OpacityButton
                  onClick={() => rootDispatch({type: 'SET_VIEW_MODE', viewMode: props.viewMode === 'grid' ? 'comparison' : 'grid'})}
                  children={
                    <Flex color={props.viewMode === 'grid' ? 'blue' : 'dark'} flexDirection="column" alignItems="center">
                      <GridSvg size={36} />
                      <Text 
                        mt={2}
                        fontSize="8px" 
                        fontWeight="bold"
                        style={{textTransform: 'uppercase'}}
                        children={props.viewMode === 'grid' ? 'Grid On' : 'Grid Off'}
                      />
                    </Flex>
                  }

                />
              </Box>
            }

          </Flex>

          <CanvasToolbar
            viewMode={props.viewMode}
            show={!showContentForm}
            showNext={showNext}
            showPrev={showPrev}
            showAdvance={showAdvance}
            showResume={showResume}
            showUpgrade={showUpgrade}
            // highlightUpgrade={secondary.editId === primary.id}
            showCompare={showCompare}
            showGrid={showGridBtn}
            showSearch={showSearch}
            showMerge={showMerge}
          />

          <Flex 
            flex={1} 
            alignItems="center"
            justifyContent="center" 
            onClick={clearSelection}
            pl="32px"
          >
            <Box>
              <FrameToolbar 
                label="Primary Design"
                canFavorite={false}
                // favorited={primary.favorited}
                // onFavoriteClick={() => rootDispatch({type: 'TOGGLE_FAVORITE', flyer: primary})}
                onDownloadClick={() => exportFlyer(primary)}
              />
              
              <Frame 
                scale={scale} 
                width={primary.size.w} 
                height={primary.size.h} 
                flyer={primary}
                selectable={primary === props.primary}
              />
              <div style={{height: 60}}>
                {/* placeholder */}
              </div>
              
            </Box>
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
  else if(e.code === 'KeyL') {
    dispatch({type: 'TOGGLE_FAVORITE_SECONDARY'});
  }
}