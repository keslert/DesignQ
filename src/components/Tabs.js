import React, { useState, useCallback, useEffect, useRef } from 'react';
import ReactDOM from 'react-dom';
import NavMarker from './NavBar/NavMarker';
import { Box, Flex, Text } from 'rebass';

const getUpdate = target => ({ l: target.offsetLeft, w: target.offsetWidth })

function Tabs({tabs, selectedIndex, onClick}) {
  const ref = useRef();
  const [hover, setHover] = useState({l: 0, w: 0})
  const [marker, setMarker] = useState({l: 0, w: 0});

  const handleMouseEnter = useCallback(e => {
    setHover(getUpdate(e.target));
  }, [])

  const handleMouseLeave = useCallback(e => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[selectedIndex];
    setHover(getUpdate(child));
  }, [selectedIndex])

  useEffect(() => {
    const el = ReactDOM.findDOMNode(ref.current);
    const child = el.children[selectedIndex];
    setMarker(getUpdate(child))
    setHover(getUpdate(child));
  }, [selectedIndex])


  return (
    <Flex style={{position: 'relative'}} ref={ref} mx="-1px">
      {tabs.map((tab, i) => (
        <Box
          key={tab}
          flex={1}
          mx={"1px"}
          pt="16px"
          pb="8px"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          selected={i === selectedIndex}
          onClick={() => onClick(tab, i)}
          style={{cursor: 'pointer'}}
        >
          <Text
            style={{textTransform: 'uppercase', letterSpacing: '0.06em'}}
            fontSize={0}
            fontWeight="700"
            color="white"
            textAlign="center"
            children={tab}
          />
        </Box>
        
      ))}
      <NavMarker 
        bg="#ffffff33"
        height={2}
        style={{left: hover.l, width: hover.w}}
      />
      <NavMarker 
        bg="white"
        height={2}
        style={{
          left: marker.l, 
          width: marker.w,
          transition: 'left 0.3s ease-out, width 0.3s ease-out, background 0.3s ease-out',
        }}
      />
    </Flex>
  )
}

export default Tabs;