import React from 'react';
import ArrowSvg from '../svg/arrow.svg';
import EyeSvg from '../svg/eye.svg';
import CanvasButton from './CanvasButton';
import { Flex } from 'rebass';

function CanvasToolbar(props) {

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
      {props.showUpgrade && 
        <CanvasButton
          mb={2}
          SvgComponent={<ArrowSvg size={28} />}
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