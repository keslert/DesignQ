import React, { useLayoutEffect, useState } from 'react';
import Frame from '../components/Frame';
import { Flex, Box, Text } from 'rebass';
import { templates } from '../core/templates';
import { 
  bodyHeaderTests, 
  bodyFooterTests, 
  bodyHeaderFooterTests,
  bodyTests,
  elementTests,
} from '../core/templates/test-flyers';
import { computeFlyer } from '../core/producer';
import _ from 'lodash';

// const flyers = [
//   templates.LookingForArtVolunteers,
//   // ...bodyTests,
//   // ...bodyHeaderTests,
//   // ...bodyFooterTests,
//   ...bodyHeaderFooterTests,
//   // ...elementTests,
// ]
const flyers = templates;

function Gallery({flyerSize}) {
  const [ready, setReady] = useState(false);
  useLayoutEffect(() => {
    _.forEach(flyers, flyer => computeFlyer(flyer, flyerSize));    
    setReady(true);
  }, [])

  const scale = 0.7;

  return (
    !ready ? null : 
      <Flex flexWrap="wrap" p={2}>
        {_.map(flyers, flyer => (
          <Box p={2} key={flyer.title}>
            <Frame scale={scale} width={flyerSize.w} height={flyerSize.h} flyer={flyer} />
            <Text textAlign="center">{flyer.id}</Text>
          </Box>
        ))}
      </Flex>
    
  )
}

export default Gallery;