import React from 'react';
import { DropTarget } from 'react-dnd'
import { Box } from 'rebass';

function DropZone({item, isAfter, highlight, connectDropTarget}) {

  const height = item._computed.mb || 80;
  return connectDropTarget(
    <div 
      style={{
        position: 'absolute',
        left: item._computed.bb.l,
        width: item._computed.bb.w,
        height: height,
        top: (item._computed.bb.t + (isAfter
          ? item._computed.bb.h
          : - height)
        ),
        // background: '#00ff0033',
      }}
      children={
        <Box 
          bg={highlight ? "blue" : null}
          width={1} 
          style={{
            height: height, 
            // marginTop: (height - 4) / 2,
          }} 
        />
      }
    />
  )
}

const target = {
  drop(props, monitor) {
    props.onDrop(props.item, monitor.getItem(), props.isAfter);
  },
  canDrop(props, monitor) {
    const item = monitor.getItem();
    return props.item.kind === item.kind
      && props.item._root.id === item._root.id;
  },
}

function collectTarget(connect, monitor) {
  const highlight = monitor.isOver() && monitor.canDrop();
  console.log(monitor.isOver())
  return {
    connectDropTarget: connect.dropTarget(),
    highlight,
    draggedItem: monitor.getItem(),
  }
}

export default DropTarget('selectable', target, collectTarget)(DropZone);