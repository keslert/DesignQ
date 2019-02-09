import React, { useEffect, useRef, useState, useCallback } from 'react';
import { Box, Flex } from 'rebass';
import _ from 'lodash';



const DEFAULT_OFFSETS = {
  ascender: -0.1,
  xHeight: -0.25,
  baseline: -.1,
  descender: 0,
}

function FontManual({
  family, 
  fontSize, 
  text,
  offsets: propsOffsets = DEFAULT_OFFSETS,
}) {
  const [offsets, setOffsets] = useState(propsOffsets)
  const handleCopy = useCallback(() => {
    const t = document.createElement('textarea')
    t.value = `\'${family}\': {
      ascender: ${offsets.ascender},
      xHeight: ${offsets.xHeight},
      baseline: ${offsets.baseline},
      descender: ${offsets.descender},
    },`;
    document.body.appendChild(t);
    t.select();
    document.execCommand('copy');
    document.body.removeChild(t);
  }, [offsets])

  const style = {
    position: 'relative',
    lineHeight: 1,
    fontFamily: family,
    fontSize,
  }

  const boxStyle = {
    position: 'absolute',
    left: 0,
    width: '100%',
    pointerEvents: 'none',
  }

  return (
    <div>
      <Box bg="white" color="black" style={{position: 'relative'}}>
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
          style={style}
          children={text}
        />

        <Flex mt={3}>
          {Object.entries(offsets).map(([k, v]) =>
            <Box mr={2} key={k}>
              <label key={k}>
                {k}
                <input 
                  name={k}
                  type="number" 
                  step={.01} 
                  value={v}
                  onChange={e => setOffsets({...offsets, [k]: Number.parseFloat(e.target.value)})}
                />
              </label>
            </Box>
          )}
          <button 
            onClick={handleCopy}
            children="Copy"
          />

        </Flex> 
          

      </Box>
    </div>
  )
}

export default FontManual;