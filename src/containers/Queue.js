import React, { useState } from 'react';
import { Flex, Box } from 'rebass';
import NavBar from '../components/NavBar';
import Timeline from './Timeline';
import Canvas from '../components/Canvas';
import Sidebar from '../components/Sidebar';

import { templates } from '../core/templates';
import { computeFlyer } from '../core/producer';

const flyer1 = templates.ACarolForTheHolidaySeason
const flyer2 = templates.AnnualGrise25th

computeFlyer(flyer1);
computeFlyer(flyer2);

function Queue({flyerSize}) {
  const [designs, setDesigns] = useState([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 , 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3 , 3 , 3, 3, 3, 2, 3]);

  return (
    <Flex bg="white" flexDirection="column" style={{height: '100vh'}}>
      <NavBar selectedIndex={0} />
      <Flex flex={1}>
        <Sidebar flyer={flyer1} />
        <Box flex={1}>
          <Canvas 
            primaryFlyer={flyer1}
            secondaryFlyer={flyer2}
            flyerSize={flyerSize} 
          />
        </Box>
      </Flex>
      <Timeline 
        items={designs}
      />
      <style>{`body { overflow: hidden }`}</style>
    </Flex>
  );
}

export default Queue;