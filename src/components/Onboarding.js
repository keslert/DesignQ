import React, {useState, useEffect} from 'react';
import DoodleArrowSvg from '../svg/doodle-arrow.svg';
import { Box, Text } from 'rebass';

const xOffset = -80;
const yOffset = -20;

function Onboarding({state}) {
  const [id, setId] = useState(null);
  const [xy, setXY] = useState([0,0]);
  useEffect(() => {
    if(id) {
      const el = document.getElementById(id);
      if(el) {
        const bb = el.getBoundingClientRect();
        setXY([bb.x + xOffset, bb.y + yOffset])
      }
    }
    else {
      setXY([0, 0])
    }
  }, [id])

  let nextId = null;
  if(state.history.length === 1) {
    nextId = 'next-design-btn';
  }
  else if(state.primary.upgradeFrom === 1) {
    nextId = 'upgrade-btn';
  }
  if(nextId !== id) {
    setId(nextId);
  }

  const [x, y] = xy;
  if(x === 0) {
    return null;
  }

  return (
    <Box style={{position: 'fixed', top: y, left: x}}>
      <Text 
        fontSize={1}
        fontWeight="bold"
        color="blue"
        children="click here"
      />
      <Box style={arrowStyle} color="blue">
        <DoodleArrowSvg size={50} />
      </Box>
    </Box>
  )
}

export default Onboarding;

const arrowStyle = {
  position: 'relative',
  left: 20,
}