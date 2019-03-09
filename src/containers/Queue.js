import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import NavBar from '../components/NavBar';
import Timeline from './Timeline';
import Canvas from '../components/Canvas';


function Queue({flyerSize}) {
  const [designs, setDesigns] = useState([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 , 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3 , 3 , 3, 3, 3, 2, 3]);

  return (
    <Flex bg="white" flexDirection="column" style={{height: '100vh'}}>
      <NavBar selectedIndex={0} />
      <Flex flex={1}>
        <Canvas flyerSize={flyerSize} />
      </Flex>
      <Timeline 
        items={designs}
      />
      <style>{`body { overflow: hidden }`}</style>
    </Flex>
  );
}

export default Queue;