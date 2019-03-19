import React, { useContext } from 'react';
import ArrowSvg from '../svg/arrow.svg';
import EyeSvg from '../svg/eye.svg';
import PlaySvg from '../svg/play.svg';
import GridSvg from '../svg/grid.svg';
import MergeSvg from '../svg/merge.svg';
import CanvasButton from './CanvasButton';
import { Flex } from 'rebass';
import { DispatchContext } from '../containers/Queue';
import theme from '../styles/theme';


function CanvasToolbar(props) {

  const dispatch = useContext(DispatchContext);

  return (
    <Flex 
      width="1px" 
      bg="lightgray" 
      flexDirection="column"
      justifyContent="center" 
      alignItems="center" 
      style={{position: 'relative'}}
      pb={100}
    >
      {props.showResume && 
        <CanvasButton
          mb={2}
          bg="blue"
          color="white"
          onClick={() => dispatch({type: 'SET_STAGE', stage: null})}
          SvgComponent={<PlaySvg size={24} />}
          label="Resume"
        />
      }
      {props.showUpgrade && 
        <CanvasButton
          mb={2}
          onClick={() => dispatch({type: 'STEP', upgrade: true})}
          SvgComponent={<ArrowSvg size={24} />}
          label="Upgrade"
        />
      }
      {props.showCompare && 
        <CanvasButton
          mb={2}
          onMouseDown={props.onCompareDown}
          onMouseUp={props.onCompareUp}
          SvgComponent={<EyeSvg size={30} />}
          label="Compare"
        />
      }
      {props.showGrid &&
        <CanvasButton
          mb={2}
          onClick={() => dispatch({type: 'SET_VIEW_MODE', viewMode: props.viewMode === 'grid' ? 'comparison' : 'grid'})}
          SvgComponent={<GridSvg size={34} />}
          color={props.viewMode === 'grid' ? 'blue' : 'dark'}
          label="Grid View"
        />
      }
      {props.showMerge && 
        <CanvasButton
          mb={2}
          onClick={() => dispatch({type: 'MERGE'})}
          SvgComponent={<MergeSvg size={38} />}
          label={"Merge"}
        />
      }

    </Flex>
  )
}

export default CanvasToolbar;