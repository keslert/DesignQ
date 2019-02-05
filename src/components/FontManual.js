import React, { useEffect, useRef, useState } from 'react';
import { Box, Flex } from 'rebass';
import _ from 'lodash';



const DEFAULT_OFFSETS = {
  ascender: 0,
  xHeight: 0,
  baseline: 0,
  descender: 0,
}

function FontManual({
  family, 
  fontSize, 
  text,
  offsets: propsOffsets = DEFAULT_OFFSETS,
}) {
  const [offsets, setOffsets] = useState(propsOffsets)

  const styles = {
    position: 'relative',
    lineHeight: 1,
    fontFamily: family,
    fontSize,
  }

  const boxStyle = {
    position: 'absolute',
    left: 0,
    width: '100%',
  }

  return (
    <div>
      <Flex bg="white" color="black" style={styles}>
        <Box 
          bg="#00ADB5"
          style={{
            ...boxStyle,
            top: `${fontSize * -offsets.ascender}px`,
            height: `${fontSize * (1 + offsets.ascender + offsets.descender)}px`,
          }}
        />

        <Box 
          bg="#F8B500"
          style={{
            ...boxStyle,
            top: `${fontSize * -offsets.xHeight}px`,
            height: `${fontSize * (1 + offsets.xHeight + offsets.baseline)}px`,
          }}
        />
        <Box 
          style={{position: 'relative'}}
          children={text}
        />

      </Flex>
    </div>
  )
}

export default FontManual;