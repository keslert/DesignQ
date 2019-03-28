import React from 'react';
import { Box, Flex, Text } from 'rebass';
import TextElementPanel from './TextElementPanel';
import SurfacePanel from './SurfacePanel';

function EditPanel(props) {
  switch(props.selection.kind) {
    case 'template':
    case 'content':
    case 'group':
      return <SurfacePanel surface={props.selection} />

    case 'image':
    case 'icon':
      return null;

    case 'element':
      return props.selection.lines
        ? <TextElementPanel element={props.selection} />
        : null
    default:
      return null;
  }
}

export default EditPanel;