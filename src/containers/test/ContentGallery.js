import React, { useLayoutEffect, useState } from 'react';
import { Flex, Box, Text } from 'rebass';
import Frame from '../../components/Frame';
import * as starterTemplates from '../../core/data/starters';
import { produceFlyer } from '../../core/producer';
import { generateFlyers, precompute } from '../../core/generator';
import _ from 'lodash';

const flyer = starterTemplates.empty;

function ContentGallery({flyerSize}) {
  const [flyers, setFlyers] = useState([]);
  useLayoutEffect(() => {
    precompute();
    produceFlyer(flyer, flyerSize);
    
    const contentFlyer = generateFlyers(flyer, {
      stage: {type: 'content', key: 'content.text'}, 
      userInput: {text: starterTemplates.basicText},
    });
    produceFlyer(contentFlyer, flyerSize)
    setFlyers([contentFlyer]);

    const layoutFlyers = generateFlyers(contentFlyer, {
      stage: {type: 'layout', key: 'layout.structure'},
      variations: 999,
    });
    layoutFlyers.forEach(f => produceFlyer(f, flyerSize));
    setFlyers(layoutFlyers);

    const typographyFlyers = generateFlyers(layoutFlyers[6], {
      stage: {type: 'typography', key: 'typography.primary'},
      variations: 999,
    });
    typographyFlyers.forEach(f => produceFlyer(f, flyerSize));
    setFlyers(typographyFlyers);
    
  }, [])

  const scale = 0.7;

  return (
    <Flex flexWrap="wrap" p={2}>
      {_.map(flyers, flyer => (
        <Box p={2} key={flyer.title}>
          <Frame scale={scale} width={flyerSize.w} height={flyerSize.h} flyer={flyer} />
          <Text textAlign="center" mt={1}>{`${flyer.id}: ${flyer.title}`}</Text>
        </Box>
      ))}
    </Flex>
  )
}

export default ContentGallery;