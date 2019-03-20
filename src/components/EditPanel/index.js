import React from 'react';
import { Box, Flex, Text } from 'rebass';
import TextElementPanel from './TextElementPanel';

function EditPanel(props) {
  switch(props.selection.type) {
    case 'footer':
    case 'body':
    case 'header':
      return null

    case 'image':
    case 'icon':
      return null;

    case 'dominant':
    case 'small':
    case 'heading':
    case 'bridge':
    case 'paragraph':
    case 'descriptive':
      return <TextElementPanel element={props.selection} />
    default:
      return null;
  }
}

export default EditPanel;