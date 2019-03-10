import React, { useCallback } from 'react';
import filter from 'lodash/filter';
import { Box } from 'rebass';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TreeNode(props) {

  return (
    <Box 
      pl={8 * props.indent} 
      bg={props.selected ? 'blue' : null}
      color={props.disabled ? '#ffffff44' : 'white'}
      children={props.label}
    />
  )
}

function SelectionTree({flyer}) {

  const groups = filter([
    'Header',
    'Body',
    'Footer',
  ].map(type => ({
    label: type,
    elements: (flyer.content[type.toLowerCase()] || {elements: []}).elements,
  })))

  const handleDragEnd = useCallback(result => {

  }, [flyer]);

  return (
    <Box>
      <TreeNode 
        label="Flyer" 
        indent={0} 
        selected={false}
      />
      <TreeNode 
        label="Content" 
        indent={1} 
        selected={true} 
      />
      <DragDropContext onDragEnd={handleDragEnd}>
        {groups.map(g => (
          <Droppable droppableId="droppable">
            {(provided, snapshot) => (
              <div
                ref={provided.innerRef}
                style={getListStyle(snapshot.isDraggingOver)}
              >
                <TreeNode 
                  label={g.label} 
                  indent={2} 
                  selected={false}
                  disabled={!g.elements.length}
                />
                {g.elements.map((el, index) => (
                  <Draggable key={el._computed.id} draggableId={`${g.label}-${index}`} index={index}>
                    {(provided, snapshot) => (
                      <div
                        ref={provided.innerRef}
                        {...provided.draggableProps}
                        {...provided.dragHandleProps}
                        style={getItemStyle(
                          snapshot.isDragging,
                          provided.draggableProps.style
                        )}
                      >
                        <TreeNode 
                          label={"YOLO!"}
                          indent={3} 
                          type={el.type}
                          selected={false}
                        />
                      </div>
                    )}
                  </Draggable>
                ))}
                {provided.placeholder}
              </div>
            )}
          </Droppable>
        ))}
      </DragDropContext>
    </Box>
  )
}

export default SelectionTree;

function getListStyle(isDraggingOver) {
  return {
    background: isDraggingOver ? 'red' : 'transparent',
  };
}

function getItemStyle(isDragging, dragStyle) {

  return dragStyle;
}
