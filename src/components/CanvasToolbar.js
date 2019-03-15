import React, { useContext } from 'react';
import ArrowSvg from '../svg/arrow.svg';
import EyeSvg from '../svg/eye.svg';
import PlaySvg from '../svg/play.svg';
import CanvasButton from './CanvasButton';
import { Flex } from 'rebass';
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
      style={{position: 'relative'}}
      pb={100}
    >
      {props.showResume && 
        <CanvasButton
          mb={2}
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
    </Flex>
  )
}

export default CanvasToolbar;