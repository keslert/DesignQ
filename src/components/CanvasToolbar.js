import React, { useContext } from 'react';
import ArrowSvg from '../svg/arrow.svg';
import EyeSvg from '../svg/eye.svg';
import FlyerSvg from '../svg/flyer.svg';
import LightbulbSvg from '../svg/lightbulb.svg';
import JourneySvg from '../svg/journey.svg';
import GridSvg from '../svg/grid.svg';
import MergeSvg from '../svg/merge.svg';
import PlaySvg from '../svg/play.svg';
import RocketshipSvg from '../svg/rocketship';
import CanvasButton from './CanvasButton';
import { Flex, Box } from 'rebass';
import { DispatchContext } from '../containers/Queue';

function CanvasToolbar(props) {
  const dispatch = useContext(DispatchContext);

  return (
    <Flex 
      width="1px" 
      bg="lightgray" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      pt={3}
      style={{position: 'relative'}}
    >
      {props.show && 
        <React.Fragment>
          <Box mb={3}>
            <CanvasButton
              mb={2}
              onClick={props.showAdvance ? () => dispatch({type: 'ADVANCE_STAGE'}) : null}
              SvgComponent={<JourneySvg size={45} />}
              label="Next Stage"
              disabled={!props.showAdvance}
              // highlight={props.highlightAdvance}
            />
            {/* {props.showResume && 
              <CanvasButton
                mb={2}
                onClick={() => dispatch({type: 'SET_STAGE', stage: null})}
                SvgComponent={<PlaySvg size={21} />}
                label="Resume"
                highlight={true}
              />
            } */}
          </Box>
          <Box mb={3}>
            <CanvasButton
              mb={2}
              onClick={props.showNext ? () => dispatch({type: 'NEXT'}) : null}
              SvgComponent={<RocketshipSvg size={40} />}
              disabled={!props.showNext}
              label="Next Design"
              footer={{
                label: 'Previous',
                onClick: () => dispatch({type: 'PREV'}),
              }}
            />

            {props.showUpgrade && 
              <CanvasButton
                mb={2}
                onClick={() => dispatch({type: 'STEP', upgrade: true})}
                SvgComponent={<ArrowSvg size={24} />}
                label="Upgrade"
              />
            }
          </Box>
          
          {props.showCompare && 
            <CanvasButton
              mb={2}
              small={true}
              onMouseDown={props.onCompareDown}
              onMouseUp={props.onCompareUp}
              onMouseLeave={props.onCompareUp}
              SvgComponent={<EyeSvg size={28} />}
              inset={true}
              label="Compare"
            />
          }
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