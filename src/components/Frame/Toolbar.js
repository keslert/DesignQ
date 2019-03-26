import React from 'react';
import HeartSvg from '../../svg/heart.svg';
import { Flex, Box, Text } from 'rebass';
import OpacityButton from '../OpacityButton';


function Toolbar(props) {

  return (
    <Flex width="100%" alignItems="center" mb="2px">
      <Box flex={1}>
        <OpacityButton onClick={props.onClick}>
          <Flex 
            alignItems="center" 
            color={props.favorited || props.viewFavorites ? 'red' : 'gray'}
          >
            <HeartSvg size={16} />
            <Text 
              color="gray" 
              ml={1} 
              fontSize={0} 
              fontWeight="bold" 
              children={props.viewFavorites ? "View Favorites" : "Favorite"}
            />
          </Flex>
        </OpacityButton>
      </Box>

      <Text fontSize={0} color="gray" children={props.label} fontWeight="bold" />
        
      <Box flex={1}>
        <Text 
          textAlign="right"
          fontSize={0} 
          color="gray" 
          children={props.id} 
          fontWeight="bold" 
        />
      </Box>
    </Flex>
  )
}

export default Toolbar;