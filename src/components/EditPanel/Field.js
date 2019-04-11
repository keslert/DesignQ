import React, { useState } from 'react';
import OpacityButton from '../OpacityButton';
import { Box, Flex, Text } from 'rebass';
import InfoSvg from '../../svg/info.svg';
import styled from 'styled-components';

function Field({
  label, 
  onExploreClick, 
  fontSize=2,
  nested,
  hint,
  children, 
}) {
  const [showHint, setShowHint] = useState(false);

  return (
    <Box mb={4} pl={nested ? 4 : 0} mt={nested ? -3 : 0} className="relative">
      {nested && <NestedLine />}
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


const NestedLine = styled.div({
  position: 'absolute',
  top: '12px',
  left: '12px',
  height: '32px',
  width: '20px',
  borderLeft: '2px solid rgba(255,255,255,.12)',
  borderBottom: '2px solid rgba(255, 255, 255, 0.12)',
})