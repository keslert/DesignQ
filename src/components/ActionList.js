import React from 'react';
import { Flex, Box, Text } from 'rebass';
import Downshift from 'downshift';
import SearchInput from './SearchInput';
import styled from 'styled-components';

import { FixedSizeList as List } from 'react-window';
import AutoSizer from 'react-virtualized-auto-sizer';


function ActionList(props) {

  return (
    <Downshift
      onChange={props.onSelect}
      itemToString={item => (item ? item.label : '')}
      defaultIsOpen={true}
    >
    {({
      getInputProps,
      getItemProps,
      getMenuProps,
      isOpen,
      inputValue,
      highlightedIndex,
    }) => (
      <div>
        <SearchInput 
          placeholder={"Search Actions"}
          hasBackButton={false}
          {...getInputProps()}
        />


        { false && 
          <AutoSizer>
            {({ height, width }) => (
              <List
                height={height}
                itemCount={actions.length}
                itemSize={36}
                width={width}
              >
                {({index, style}) => (
                  <div style={style}>{actions[index].label}</div>
                )}
              </List>
            )}
          </AutoSizer>
        }

        <Box {...getMenuProps()}>
          {isOpen
            ? actions
                .filter(item => !inputValue || item.label.includes(inputValue))
                .map((item, index) => (
                  <ActionItem
                    {...getItemProps({key: item.label, index, item})}
                    color="white"
                    highlighted={highlightedIndex === index}
                    py={3}
                    mx={1}
                    children={item.label}
                  />
                ))
            : null}
        </Box>
      </div>
    )}
    </Downshift>
  )
}

export default ActionList;

const ActionItem = styled(Box)(props => ({
  borderBottom: '1px solid ' + props.theme.colors.dark,
  fontSize: props.theme.fontSizes[1] + 'px',
  cursor: 'pointer',
  whitespace: 'nowrap',
  textOverflow: 'ellipsis',
  background: props.highlighted ? 'rgba(255,255,255,.05)' : 'transparent',
  transition: 'background .15s',
}))



const actions = [
  {label: 'Explore Images', type: 'color', action: 'explore-images'},
  {label: 'Upload Image', type: 'color', action: 'upload-image'},
]