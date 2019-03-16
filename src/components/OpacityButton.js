import React from 'react';
import styled from 'styled-components';
import { Box } from 'rebass';

const OpacityButton = styled(Box)(props => ({
  opacity: 0.8,
  cursor: 'pointer',
  '&:hover': {
    opacity: 1,
  }
}))

OpacityButton.defaultProps = {

}

export default OpacityButton;