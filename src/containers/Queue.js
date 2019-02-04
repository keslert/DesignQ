import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import NavBar from '../components/NavBar';
import Timeline from './Timeline';
import Canvas from '../components/Canvas';


function Queue() {
  const [designs, setDesigns] = useState([1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0 , 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0 , 0 , 1, 2, 0, 0, 0]);
  const frameWidth = 612;
  const frameHeight = 792;

  return (
    <Flex flexDirection="column" style={{height: '100vh'}}>
      <NavBar />
      <Flex flex={1}>
        <Canvas 
          frameWidth={frameWidth} 
          frameHeight={frameHeight}
        />
      </Flex>
      <Timeline 
        items={designs}
      />
    </Flex>
  );
}

export default Queue;