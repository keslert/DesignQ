import React, { useContext, useCallback } from 'react';
import ArrowSvg from '../svg/arrow.svg';
import CanvasButton from './CanvasButton';
import EyeSvg from '../svg/eye.svg';
import GridSvg from '../svg/grid.svg';
import JourneySvg from '../svg/journey.svg';
import MergeSvg from '../svg/merge.svg';
import RocketshipSvg from '../svg/rocketship';
import { Flex, Box, Text } from 'rebass';
import { DispatchContext } from '../containers/Queue';
import ImageSearchInput from './ImageSearchInput';

function CanvasToolbar(props) {
  const dispatch = useContext(DispatchContext);
  
  return (
    <Flex 
      width="1px" 
      bg="lightgray" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      pb={5}
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
              />
              <ImageSearchInput />
            </Box>
          }

          
          <Box>
            {(false && props.viewMode !== 'grid') && 
              <CanvasButton
                mb={3}
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
            }

            <CanvasButton
              mb={3}
              id="upgrade-btn"
              label="Update"
              SvgComponent={<ArrowSvg size={24} />}
              disabled={!props.showUpgrade}
              color={props.highlightUpgrade ? 'blue' : 'dark'}
              onClick={() => dispatch({type: 'STEP', upgrade: true})}
            />

            {(false && props.showGrid) &&
              <CanvasButton
                mb={2}
                onClick={() => dispatch({type: 'SET_VIEW_MODE', viewMode: props.viewMode === 'grid' ? 'comparison' : 'grid'})}
                SvgComponent={<GridSvg size={28} />}
                color={props.viewMode === 'grid' ? 'blue' : 'dark'}
                highlight={props.viewMode === 'grid'}
                label="Show Grid"
              />
            }
          </Box>

          
        </React.Fragment>
      }
    </Flex>
  )
}

export default CanvasToolbar;