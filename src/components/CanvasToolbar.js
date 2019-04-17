import React, { useContext, useCallback } from 'react';
import ArrowSvg from '../svg/arrow.svg';
import CanvasButton from './CanvasButton';
import EyeSvg from '../svg/eye.svg';
import GridSvg from '../svg/grid.svg';
import JourneySvg from '../svg/journey.svg';
import MergeSvg from '../svg/merge.svg';
import RocketshipSvg from '../svg/rocketship';
import SearchInput from './SearchInput';
import { Flex, Box, Text } from 'rebass';
import { DispatchContext, ImageContext } from '../containers/Queue';

function CanvasToolbar(props) {
  const dispatch = useContext(DispatchContext);
  const { lastSearch } = useContext(ImageContext);

  const handleSuggestion = useCallback(query => {
    dispatch({
      type: 'INIT_IMAGE_SEARCH',
      query,
      userProvided: true,
      dispatch,
    })
  }, [])

  return (
    <Flex 
      width="1px" 
      bg="lightgray" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      pt={3}
      style={{position: 'relative', zIndex: 100}}
    >
      {props.show && 
        <React.Fragment>
          {props.showSearch && 
            <Box mb={3} width="108px">
              <Text
                textAlign="center"
                children={"Image Search"}
                fontWeight="bold"
                fontSize={0}
                // mb={1}
              />
              <SearchInput
                borderColor="red"
                defaultValue={lastSearch.query}
                onSubmit={handleSuggestion}
              />
            </Box>
          }

          <Box mb={3}>
            <CanvasButton
              mb={2}
              id="next-design-btn"
              label="Next Design"
              SvgComponent={<RocketshipSvg size={40} />}
              disabled={!props.showNext}
              onClick={() => dispatch({type: 'NEXT'})}
              footer={{
                label: 'Previous',
                disabled: !props.showPrev,
                onClick: () => dispatch({type: 'PREV'}),
              }}
            />

            <CanvasButton
              mb={2}
              id="upgrade-btn"
              label="Upgrade"
              SvgComponent={<ArrowSvg size={24} />}
              disabled={!props.showUpgrade}
              onClick={() => dispatch({type: 'STEP', upgrade: true})}
            />
          </Box>

          <Box mb={3}>
            <CanvasButton
              mb={2}
              id="next-stage-btn"
              label="Next Stage"
              SvgComponent={<JourneySvg size={45} />}
              disabled={!props.showAdvance}
              onClick={props.showAdvance ? () => dispatch({type: 'ADVANCE_STAGE'}) : null}
            />
          </Box>
          
          <CanvasButton
            mb={2}
            small={true}
            disabled={!props.showCompare}
            onMouseDown={props.showCompare && props.onCompareDown}
            onMouseUp={props.showCompare && props.onCompareUp}
            onMouseLeave={props.showCompare && props.onCompareUp}
            SvgComponent={<EyeSvg size={32} />}
            inset={true}
            label="Compare"
          />

          {props.showGrid &&
            <CanvasButton
              mb={2}
              small={true}
              onClick={() => dispatch({type: 'SET_VIEW_MODE', viewMode: props.viewMode === 'grid' ? 'comparison' : 'grid'})}
              SvgComponent={<GridSvg size={28} />}
              color={props.viewMode === 'grid' ? 'blue' : 'dark'}
              highlight={props.viewMode === 'grid'}
              label="Grid View"
            />
          }
          {props.showMerge && 
            <CanvasButton
              small={true}
              mb={2}
              onClick={() => dispatch({type: 'MERGE'})}
              SvgComponent={<MergeSvg size={38} />}
              label={"Merge"}
            />
          }
        </React.Fragment>
      }
    </Flex>
  )
}

export default CanvasToolbar;