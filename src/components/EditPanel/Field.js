import React from 'react';
import OpacityButton from '../OpacityButton';
import { Box, Flex, Text } from 'rebass';

function Field({label, onExploreClick, children, fontSize=2}) {
  return (
    <Box mb={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text
          fontSize={fontSize}
          fontWeight="700"
          color="white"
          children={label}
        />
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
      {children}
    </Box>
  )
}

export default Field;