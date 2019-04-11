import React, { useCallback, useState, useContext } from 'react';
import filter from 'lodash/filter';
import capitalize from 'lodash/capitalize';
import { Flex, Box, Text } from 'rebass';

import { DragDropContext, Droppable, Draggable } from 'react-beautiful-dnd';
import OpacityButton from './OpacityButton';
import { DispatchContext, SelectionContext } from '../containers/Queue';

function TreeNode(props) {

  return (
    <Flex 
      p="2px"
      pl={8 * props.indent + 16}
      pr="12px"
      bg={props.selected ? 'blue' : null}
      color={props.disabled ? '#ffffff55' : 'white'}
      style={{cursor: 'pointer'}}
      onClick={props.disabled ? null : props.onClick}
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

function SelectionTree() {
  const dispatch = useContext(DispatchContext);
  const selection = useContext(SelectionContext);
  const [open, setOpen] = useState(false);
  const flyer = selection._root;

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
    const { source, destination } = result;

    const sourceEl = flyer.content[source.droppableId].elements[source.index];
    const sIndex = sourceEl._parent._computed.index * 100 + sourceEl._computed.index;
    const targetEl = flyer.content[destination.droppableId].elements[destination.index];
    const tIndex = targetEl._parent._computed.index * 100 + targetEl._computed.index;

    dispatch({
      type: 'REORDER', 
      source: sourceEl,
      target: targetEl,
      isAfter: sIndex < tIndex,
    })
  }, [flyer]);

  const handleClick = useCallback(item => {
    dispatch({type: 'SELECT', selection: item});
  }, [flyer]);

  return (
    <Box>
      <OpacityButton onClick={() => setOpen(!open)}>
        <Text
          px="16px"
          py="12px"
          fontWeight="bold"
          color="white"
          fontSize={1}
          children="Selection Tree"
        />
      </OpacityButton>
      {open && 
        <Box pb="12px">
          <TreeNode 
            label="Flyer" 
            indent={0} 
            selected={selection === flyer}
            onClick={() => handleClick(flyer)}
          />
          <TreeNode 
            label="Content" 
            indent={1} 
            selected={selection === flyer.content} 
            onClick={() => handleClick(flyer.content)}
          />
          <DragDropContext onDragEnd={handleDragEnd}>
            {groups.map(g => (
              <Droppable 
                droppableId={g.type}
                key={g.type}
                isDropDisabled={!g.elements.length}
              >
                {(provided, snapshot) => (
                  <div
                    ref={provided.innerRef}
                    style={getListStyle(snapshot.isDraggingOver)}
                  >
                    <TreeNode 
                      label={g.label} 
                      indent={2} 
                      selected={selection.type === g.type}
                      disabled={!g.elements.length}
                      onClick={() => handleClick(flyer.content[g.type])}
                    />
                    {g.elements.map((el, index) => (
                      <Draggable 
                        key={el.id} 
                        draggableId={`${g.type}-${index}`} 
                        index={index}
                        isDragDisabled={g.elements.length <= 1}
                      >
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
                              label={el.lines ? el.lines[0].text : 'Image'}
                              indent={3} 
                              type={el.type}
                              selected={selection === el}
                              onClick={() => handleClick(el)}
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
      }
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
