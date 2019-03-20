import React, { useCallback } from 'react';
import { Flex, Box, Text } from 'rebass';
import { Input } from './FormInput';

function DirectionalInput(props) {

  const handleChange = useCallback(e => {
    const dir = e.target.name;
    props.onChange({
      l: props.l,
      r: props.r,
      t: props.t,
      b: props.b,
      [dir]: e.target.value,
    })

  }, [props]);

  return (
    <Flex alignItems="center" bg="dark" style={{borderRadius: '3px'}}>
      <Box p={2} mt={-3}>
        <Text fontSize={0} color="white" textAlign="center" mb={1} children="left" />
        <Input
          type="number"
          min={props.min}
          max={props.max}
          step={props.step}
          bg="off_dark"
          color="white"
          value={props.l}
          name="l"
          onChange={handleChange}
        />
      </Box>

      <Box>
        <Box p={2}>
          <Text fontSize={0} color="white" textAlign="center" mb={1} children="top" />
          <Input
            type="number"
            min={props.min}
            max={props.max}
            step={props.step}
            bg="off_dark"
            color="white"
            value={props.t}
            name="t"
            onChange={handleChange}
          />
        </Box>
        <Box p={2}>
          <Input
            type="number"
            min={props.min}
            max={props.max}
            step={props.step}
            bg="off_dark"
            color="white"
            value={props.b}
            name="b"
            onChange={handleChange}
          />
          <Text fontSize={0} color="white" textAlign="center" mt={1} children="bottom" />
        </Box>
      </Box>

      <Box p={2} mt={-3}>
        <Text fontSize={0} color="white" textAlign="center" mb={1} children="right" />
        <Input
          type="number"
          min={props.min}
          max={props.max}
          step={props.step}
          bg="off_dark"
          color="white"
          value={props.r}
          name="r"
          onChange={handleChange}
        />
      </Box>

    </Flex>
  )
}
export default DirectionalInput;