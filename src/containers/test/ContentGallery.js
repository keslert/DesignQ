import React, { useLayoutEffect, useState } from 'react';
import { Flex, Box, Text } from 'rebass';
import Frame from '../../components/Frame';
import * as starterTemplates from '../../core/data/starters';
import { computeFlyer } from '../../core/producer';
import { generateFlyer, precompute } from '../../core/generator';
import _ from 'lodash';

const flyer = starterTemplates.empty;

function ContentGallery({flyerSize}) {
  const [flyers, setFlyers] = useState([]);
  useLayoutEffect(() => {
    precompute();
    computeFlyer(flyer, flyerSize);
    
    const contentFlyer = generateFlyer(flyer, {
      stage: {type: 'content', focus: 'elements'}, 
      userInput: {text: starterTemplates.basicText},
    });
    computeFlyer(contentFlyer, flyerSize)
    setFlyers([contentFlyer]);

    const layoutFlyers = generateFlyer(contentFlyer, {
      stage: {type: 'layout', focus: 'elements'},
      variations: 999,
    });
    layoutFlyers.forEach(f => computeFlyer(f, flyerSize));
    setFlyers(layoutFlyers);

    const typographyFlyers = generateFlyer(layoutFlyers[6], {
      stage: {type: 'typography', focus: 'primary'},
      variations: 999,
    });
    typographyFlyers.forEach(f => computeFlyer(f, flyerSize));
    setFlyers(typographyFlyers);

    // const secondaryTypographyFlyers = generateFlyer(typographyFlyers[10], {
    //   stage: {type: 'typography', focus: 'secondary'},
    //   variations: 999,
    // });
    // secondaryTypographyFlyers.forEach(f => computeFlyer(f, flyerSize));
    // setFlyers(secondaryTypographyFlyers);

    
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