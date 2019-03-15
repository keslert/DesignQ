import React, { useRef, useEffect, useMemo } from 'react';
import { Box } from 'rebass';
import styled from 'styled-components';
import theme from '../styles/theme';
import useComponentSize from '@rehooks/component-size'

import { FixedSizeList as List } from 'react-window';


// const ITEM_WIDTH = 8;

// class Timeline extends React.Component {

//   constructor() {
//     super();

//     const width = window.innerWidth;
//     this.canvas = React.createRef();
//     this.state = {
//       width,
//       midpoint: Math.floor(width / 2),
//       index: 0,
//       offset: 0,
//       colors: [
//         theme.colors.green, 
//         theme.colors.yellow, 
//         theme.colors.orange, 
//         theme.colors.red,
//         theme.colors.pink,
//         theme.colors.purple,
//         theme.colors.blue,
//       ],
//       cursor: 'grab',
//     };
//   }

//   componentDidMount() {
//     // this.draw(-ITEM_WIDTH / 2);
//   }

//   componentDidUpdate(props) {
//     // if(this.props.items.length !== props.items.length) {
//     //   this.setState({offset: 0});
//     //   this.draw(-ITEM_WIDTH / 2);
//     // }
//   }

//   getOffset = desiredOffset => {
//     const { items } = this.props;
    
//     const max = (ITEM_WIDTH + 2) * (items.length - 1);
//     const x = _.clamp(desiredOffset, 0, max);
//     return (x + ITEM_WIDTH / 2 - (x + ITEM_WIDTH) % (ITEM_WIDTH + 2));
//   }

//   handleMouseDown = (e) => {
//     document.addEventListener('mousemove', this.handleMouseMove);
//     document.addEventListener('mouseup', this.handleMouseUp);
//     this.setState({startX: e.clientX, cursor: 'grabbing'});
//     document.body.style.setProperty('cursor', 'grabbing');
//   }

//   handleMouseUp = (e) => {
//     document.removeEventListener('mousemove', this.handleMouseMove);
//     document.removeEventListener('mouseup', this.handleMouseUp);
//     const x = this.state.offset + (e.clientX - this.state.startX)
//     const offset = this.getOffset(x);
//     this.draw(offset);
//     this.setState({offset, cursor: 'grab'})
//     document.body.style.setProperty('cursor', 'inherit');
//   }

//   handleMouseMove = (e) => {
//     const x = e.clientX - this.state.startX + this.state.offset;
//     this.draw(this.getOffset(x));
//   }
  
//   draw = (x) => {
//     const { colors, midpoint } = this.state;
//     const { items } = this.props;

//     const canvas = this.canvas.current;
//     const ctx = canvas.getContext("2d")

//     ctx.setTransform(1, 0, 0, 1, 0, 0);
//     ctx.clearRect(0, 0, canvas.width, canvas.height);
//     ctx.translate(midpoint + x, 0);

//     // todo: loop over only visible items
//     for(let i = items.length-1, j = 0; i>=0; i--, j++){
//       ctx.beginPath();
//       ctx.fillStyle = colors[items[i]];
//       ctx.rect((ITEM_WIDTH + 2) * -j, 0, ITEM_WIDTH, canvas.height);
//       ctx.fill();
//     }
//   }

function Timeline({items, selectedIndex}) {
  const listRef = useRef();
  const sizeRef = useRef();
  const size = useComponentSize(sizeRef);

  useEffect(() => {
    listRef.current.scrollToItem(items.length);
  }, [items])

  return (
    <div ref={sizeRef}>
      <Box 
        width={1}
        bg="nearwhite" 
        style={{ borderTop: '1px solid ' + theme.colors.lightgray }}
      >
        <List
          ref={listRef}
          className="tiny-scroll"
          height={20}
          width={size.width}
          itemCount={items.length}
          itemSize={12}
          layout="horizontal"
          style={''}
        >
          {({index, style}) => (
            <Tick
              selected={index === selectedIndex}
              style={style}
              flyer={items[index]}
            />
          )}
        </List>
      </Box>
    </div>
  )
}

export default Timeline;

function Tick({flyer, style, selected}) {
  
  return (
    <div style={style}>
      <S_Tick
        selected={selected}
        bg={COLORS[flyer._stage.type]}
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

  '&:hover': {
    transform: 'translateY(-2px)',
  }
}))

const COLORS = {
  content: theme.colors.green, 
  layout: theme.colors.yellow, 
  typography: theme.colors.orange, 
  color: theme.colors.red,
  decoration: theme.colors.pink,
  polish: theme.colors.purple,
  finish: theme.colors.blue,
};