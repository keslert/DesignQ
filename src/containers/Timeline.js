import React, { useRef, useEffect, useState, useCallback, useContext } from 'react';
import Frame from '../components/Frame';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Box } from 'rebass';
import { FixedSizeList as List } from 'react-window';
import { DispatchContext } from './Queue';

function Timeline({items, selectedIndex, width}) {
  const listRef = useRef();
  const [preview, setPreview] = useState({});
  const rootDispatch = useContext(DispatchContext);

  const handleMouseEnter = useCallback(e => {
    const flyer = items[e.target.dataset.index];

    const offset = e.target.parentElement.offsetLeft + 2
      - e.target.parentElement.parentElement.parentElement.scrollLeft;

    const left = Math.min(width - 50, offset);
    setPreview({flyer, left});
  }, [items, width]);

  const handleMouseLeave = useCallback(e => void setPreview({}))

  const handleClick = useCallback(e => {
    const index = Number.parseInt(e.target.dataset.index)
    rootDispatch({type: 'SET_INDEX', index})
  })


  useEffect(() => {
    listRef.current.scrollToItem(items.length);
  }, [items])

  useEffect(() => {
    listRef.current.scrollToItem(selectedIndex);
  }, [selectedIndex])

  return (
    <Box 
      width={1}
      bg="nearwhite" 
      style={{ borderTop: '1px solid ' + theme.colors.lightgray, position: 'relative' }}
      onMouseLeave={handleMouseLeave}
    >
      {preview.flyer && 
        <Preview left={preview.left}>
          <Frame 
            scale={.25}
            flyer={preview.flyer} 
          />
        </Preview>
      }
      <List
        ref={listRef}
        className="tiny-scroll"
        height={20}
        width={width}
        itemCount={items.length}
        itemSize={12}
        layout="horizontal"
        style={''}
      >
        {({index, style}) => (
          <Tick
            onMouseEnter={handleMouseEnter}
            onMouseMove={handleMouseEnter}
            onClick={handleClick}
            // onMouseLeave={handleMouseLeave}
            data-index={index}
            selected={index === selectedIndex}
            style={style}
            flyer={items[index]}
          />
        )}
      </List>
    </Box>
  )
}

export default Timeline;

function Tick({flyer, style, ...props}) {
  
  return (
    <div style={style}>
      <S_Tick
        {...props}
        bg={COLORS[flyer._upgradeTo ? 'upgrade' : flyer._stage.type]}
      />
    </div>
  )
}

const S_Tick = styled(Box)(props => ({
  cursor: 'pointer',
  height: '100%',
  transition: 'transform .15s',
  margin: props.selected ? "0 1px" : "0 2px",
  width: props.selected ? "10px" : "8px",
  borderLeft: props.selected ? '2px solid ' + props.theme.colors.dark : null,
  borderRight: props.selected ? '2px solid ' + props.theme.colors.dark : null,

  // '&:hover': {
  //   borderLeft: '2px solid ' + props.theme.colors.dark,
  //   borderRight: '2px solid ' + props.theme.colors.dark,
  //   margin: "0 1px",
  //   width: "10px",
  // }
}))

const Preview = styled.div(props => ({
  position: 'absolute',
  bottom: '21px',
  left: props.left + 'px',
}))


const COLORS = {
  content: theme.colors.green, 
  layout: theme.colors.yellow, 
  typography: theme.colors.orange, 
  color: theme.colors.red,
  decoration: theme.colors.pink,
  polish: theme.colors.purple,
  finish: theme.colors.blue,
  upgrade: theme.colors.dark,
};