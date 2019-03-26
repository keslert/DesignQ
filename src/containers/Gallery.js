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
import { buildTemplatePalette } from '../core/generator/color';
import { Swatch } from '../components/ColorPicker';
import { normalizeTemplate } from '../core/utils/template-utils';

// const flyers = [
//   templates.LookingForArtVolunteers,
//   // ...bodyTests,
//   // ...bodyHeaderTests,
//   // ...bodyFooterTests,
//   ...bodyHeaderFooterTests,
//   // ...elementTests,
// ]
const flyers = Object.values(templates);


function Gallery({flyerSize}) {
  const [palettes, setPalettes] = useState([]);
  const [ready, setReady] = useState(false);
  useLayoutEffect(() => {
    _.forEach(flyers, flyer => {
      computeFlyer(flyer, flyerSize);
      normalizeTemplate(flyer);
    });
    setPalettes(_.map(flyers, f => {
      const palette = buildTemplatePalette(f);
      return Object.values(_.pick(palette, ['dark', 'primary', 'secondary', 'light']));
    }))
    setReady(true);
  }, [])

  const scale = 0.7;

  return (
    !ready ? null : 
      <Flex flexWrap="wrap" p={2}>
        {_.map(flyers, (flyer, i) => (
          <Box p={2} key={flyer.title}>
            <Frame 
              scale={scale} 
              flyer={flyer}
              selectable={false}
            />
            <Text textAlign="center">{flyer.id}</Text>
            <Flex>
              {palettes[i].map(color => (
                <Box key={color} mr="2px">
                  <Swatch color={color} />
                </Box>
              ))}
            </Flex>
          </Box>
        ))}
      </Flex>
    
  )
}

export default Gallery;