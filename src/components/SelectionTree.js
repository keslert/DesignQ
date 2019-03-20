import React, { useCallback } from 'react';
import filter from 'lodash/filter';
import capitalize from 'lodash/capitalize';
import { Flex, Box, Text } from 'rebass';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';

function TreeNode(props) {

  return (
    <Flex 
      p="2px"
      pl={8 * props.indent + 16}
      pr="12px"
      bg={props.selected ? 'blue' : null}
      color={props.disabled ? '#ffffff55' : 'white'}
      style={{cursor: 'pointer'}}
    >
      <Text fontSize="12px" flex={0} mr="8px">·</Text>
      <Text 
        fontSize="12px"
        flex={1} 
        style={{
          whiteSpace: "nowrap", 
          textOverflow: "ellipsis",
          overflow: 'hidden',
        }}
        children={props.label} 
      />
    </Flex>
  )
}

function SelectionTree({flyer}) {

  const groups = filter([
    'header',
    'body',
    'footer',
  ].map(type => ({
    type,
    label: capitalize(type),
    elements: flyer.content[type] ? flyer.content[type].elements : [],
  })))

  const handleDragEnd = useCallback(result => {

  }, [flyer]);

  return (
    <Box pt="12px" pb="12px">
      <Text
        px="16px"
        pb="8px"
        fontWeight="bold"
        color="white"
        fontSize={1}
        children="Selection Tree"
      />
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
          <Droppable droppableId={g.type} key={g.type}>
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
                  <Draggable key={el.id} draggableId={`${g.type}-${index}`} index={index}>
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
                          label={el.lines[0].text}
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
    background: isDraggingOver ? '#ffffff11' : 'transparent',
  };
}

function getItemStyle(isDragging, dragStyle) {

  return {
    ...dragStyle,
    cursor: isDragging ? 'grabbing' : null,
  }
}
