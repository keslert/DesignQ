import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import NavBar from '../components/NavBar';
import Timeline from './Timeline';
import Canvas from '../components/Canvas';


function Queue({size}) {
  const [designs, setDesigns] = useState([1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0 , 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0 , 0 , 1, 2, 0, 0, 0]);

  return (
    <Flex flexDirection="column" style={{height: '100vh'}}>
      <NavBar selectedIndex={0} />
      <Flex flex={1}>
        <Canvas
          size={size}
        />
      </Flex>
      <Timeline 
        items={designs}
      />
    </Flex>
  );
}

export default Queue;