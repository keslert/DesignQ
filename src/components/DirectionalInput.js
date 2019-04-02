import React, { useCallback } from 'react';
import { Flex, Box, Text } from 'rebass';
import { Input } from './FormInput';
import Slider from './Slider';

function DirectionalInput({
  step=1, 
  ...props
}) {

  const handleChange = useCallback(e => {
    const dir = e.target.name;
    props.onChange({
      l: props.l,
      r: props.r,
      t: props.t,
      b: props.b,
      [dir]: Number.parseFloat(e.target.value),
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
          step={step}
          bg="off_dark"
          color="white"
          value={props.l}
          name="l"
          autoComplete="off"
          disabled={props.lDisabled}
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
            step={step}
            bg="off_dark"
            color="white"
            value={props.t}
            name="t"
            autoComplete="off"
            disabled={props.tDisabled}
            onChange={handleChange}
          />
        </Box>
        <Box p={2}>
          <Input
            type="number"
            min={props.min}
            max={props.max}
            step={step}
            bg="off_dark"
            color="white"
            value={props.b}
            name="b"
            autoComplete="off"
            disabled={props.bDisabled}
            onChange={handleChange}
          />
          <Text fontSize={0} color="white" textAlign="center" mt={1} children="bottom" />
        </Box>
      </Box>

      <Box p={2} mt={-3}>
        <Text fontSize={0} color="white" textAlign="center" mb={1} children="right" />
        <Input
          showValue={true}
          type="number"
          min={props.min}
          max={props.max}
          step={step}
          bg="off_dark"
          color="white"
          value={props.r}
          name="r"
          autoComplete="off"
          disabled={props.rDisabled}
          onChange={handleChange}
        />
      </Box>

    </Flex>
  )
}
export default DirectionalInput;