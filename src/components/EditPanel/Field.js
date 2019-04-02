import React, { useState } from 'react';
import OpacityButton from '../OpacityButton';
import { Box, Flex, Text } from 'rebass';
import InfoSvg from '../../svg/info.svg';

function Field({
  label, 
  onExploreClick, 
  fontSize=2,
  hint,
  children, 
}) {
  const [showHint, setShowHint] = useState(false);

  return (
    <Box mb={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Flex color="white">
          <Text
            fontSize={fontSize}
            fontWeight="700"
            color="white"
            children={label}
          />
          {hint && 
            <OpacityButton
              ml={2}
              onClick={() => setShowHint(!showHint)}
              children={<InfoSvg size={12} />}
            />
          }
        </Flex>
        {(false && onExploreClick) &&
          <OpacityButton onClick={onExploreClick}>
            <Text
              fontSize={0}
              color="white"
              children="Explore"
            />
          </OpacityButton>
        }
      </Flex>
      {showHint && 
        <Text 
          fontSize={0}
          mb={2}
          color="white"
          style={{fontStyle: 'italic'}}
          children={hint}
        />
      }
      {children}
    </Box>
  )
}

export default Field;