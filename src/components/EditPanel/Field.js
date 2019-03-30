import React from 'react';
import OpacityButton from '../OpacityButton';
import { Box, Flex, Text } from 'rebass';

function Field({label, onExploreClick, children}) {
  return (
    <Box mb={4}>
      <Flex justifyContent="space-between" alignItems="center" mb={2}>
        <Text
          fontSize={2}
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