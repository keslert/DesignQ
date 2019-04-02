import React, { useContext, useCallback } from 'react';
import TextElementPanel from './TextElementPanel';
import SurfacePanel from './SurfacePanel';
import ImagePanel from './ImagePanel';
import { DispatchContext } from '../../containers/Queue';

function EditPanel(props) {
  const rootDispatch = useContext(DispatchContext)
  const update = useCallback(update => {
    rootDispatch({type: 'UPDATE_SELECTED', update});
  }, []);

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