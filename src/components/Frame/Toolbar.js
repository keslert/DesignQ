import React from 'react';
import HeartSvg from '../../svg/heart.svg';
import theme from '../../styles/theme';
import { Flex, Box, Text } from 'rebass';

export default props => (
  <Flex width="100%" alignItems="center">
    <Box flex={1}>
      <Flex onClick={props.onClick} css={{cursor: 'pointer'}} alignItems="center">
        <HeartSvg color={theme.colors[props.favorited ? 'red' : 'lightgray']} />
        <Text color="gray" children="Favorite" ml={1} fontSize={0} fontWeight="bold" />
      </Flex>
    </Box>

    <Text fontSize={0} color="gray" children={props.text} fontWeight="bold" />
      
    <Box flex={1} />
  </Flex>
)