import React, { useState, useEffect } from 'react';
import { Flex, Box } from 'rebass';
import NavBar from '../components/NavBar';
import Timeline from './Timeline';
import Canvas from '../components/Canvas';
import Sidebar from '../components/Sidebar';

import { templates } from '../core/templates';
import { computeFlyer } from '../core/producer';

const flyer1 = templates.ACarolForTheHolidaySeason
const flyer2 = {
  ...flyer1,
  background: {
    ...flyer1.background,
    color: '#454a80',
  }
}

computeFlyer(flyer1);
computeFlyer(flyer2);

function Queue({flyerSize}) {
  const [designs, setDesigns] = useState([0, 1, 1, 1, 1, 1, 1, 1, 1, 1, 1 , 2, 2, 2, 2, 2, 2, 1, 2, 2, 2, 2, 2, 2, 2, 3, 3, 3 , 3 , 3, 3, 3, 2, 3]);

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setDesigns([...designs, ...designs.splice(0, 10)])
  //   }, 1000)
  //   return () => clearInterval(interval);
  // }, [designs])

  return (
    <Flex bg="white" flexDirection="column" style={{height: '100%'}}>
      <NavBar selectedIndex={0} />
      <Flex flex={1}>
        {true && <Sidebar flyer={flyer1} />}
        <Flex flex={1} flexDirection="column">
          <Box flex={1}>
            <Canvas 
              primaryFlyer={flyer1}
              secondaryFlyer={flyer2}
              flyerSize={flyerSize} 
            />
          </Box>

          
          <Timeline 
            items={designs}
          />
        </Flex>
      </Flex>
      <style>{`
        body { 
          overflow: hidden; 
          height: 100vh; 
        } 
        #root { 
          height: 100%; 
        }
      `}</style>
    </Flex>
  );
}

export default Queue;