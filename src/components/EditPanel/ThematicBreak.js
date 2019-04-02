import React from 'react';
import { Box } from 'rebass';

function ThematicBreak({mt=3, mb=4, bg='rgba(255,255,255,.12)', ...props}) {

  return (
    <Box
      as="hr"
      mt={mt}
      mb={mb}
      bg={bg}
      {...props}
      style={{height: 1}}
    />
  )
}

export default ThematicBreak;