import React, { useContext } from 'react';
import { Flex, Box, Text } from 'rebass';
import Button from './Button';
import MountainSvg from '../svg/mountain';
import { DispatchContext } from '../containers/Queue';
import { STAGE_COLORS } from '../core/utils/color-utils';

function StageExhausted(props) {
  const dispatch = useContext(DispatchContext);

  const color = STAGE_COLORS[props.stage.type];

  return (
    <Flex flex={1} justifyContent="center" pr={4} pl={5} alignItems="center" flexDirection="column">
      <Box color={color + "_dark"} mb={4}>
        <MountainSvg size={280} opacity={.1} />
      </Box>

      <Text
        color="dark"
        fontSize={3}
        textAlign="center"
        mb={4}
        style={{maxWidth: 400}}
        children="Well done! That’s all of the designs we have for this stage. Choose one of options below or click on the design on the left to make manual edits."
      />

      <Box>
        <Button 
          variant="plain"
          bg={color}
          onClick={() => dispatch({type: 'ADVANCE_STAGE'})}
          children="Advance to next stage"
          width={260}
          mb={3}
        />
        <Text
          color="dark"
          fontSize={2}
          textAlign="center"
          mb={3}
          children="or"
        />
        <Button
          variant="light"
          onClick={() => dispatch({type: 'STEP', forceGeneration: true})}
          width={260}
          children="Go back through this stage"
        />

      </Box>

    </Flex>
  )
}

export default StageExhausted;