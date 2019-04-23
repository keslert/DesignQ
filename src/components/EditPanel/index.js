import React, { useContext, useCallback } from 'react';
import TextElementPanel from './TextElementPanel';
import SurfacePanel from './SurfacePanel';
import ImagePanel from './ImagePanel';
import { DispatchContext } from '../../containers/Queue';
import { Box, Flex, Text } from 'rebass';
import EditDocSvg from '../../svg/edit-doc.svg';

function EditPanel(props) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => {
    rootDispatch({type: 'UPDATE_SELECTED', update});
  }, []);


  if(!props.selection) {
    return (
      <Flex flexDirection="column" alignItems="center" p={3} pt={4}>
        <Box
          mb={3}
          color="rgba(255,255,255,.1)"
          children={<EditDocSvg size={180} />}
        />
        
        <Text
          color="rgba(255,255,255,.5)"
          fontSize={2}
          children="This is the edit panel where you can make manual edits. To get started, click on your primary design."
        />
      </Flex>
    )
  }

  switch(props.selection.kind) {
    case 'template':
    case 'content':
    case 'group':
      return <SurfacePanel surface={props.selection} onUpdate={update} />

    case 'element':
      return props.selection.lines
        ? <TextElementPanel element={props.selection} onUpdate={update} />
        : <ImagePanel image={props.selection} onUpdate={update} />
    default:
      return null;
  }
}

export default EditPanel;