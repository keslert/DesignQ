import React from 'react';
import { Flex, Box, Relative, Absolute } from 'rebass';
import styled from 'styled-components';
import theme from '../styles/theme';
import _ from 'lodash'


const ITEM_WIDTH = 6;

class Timeline extends React.Component {

  constructor() {
    super();

    const width = window.innerWidth;
    this.canvas = React.createRef();
    this.state = {
      width,
      midpoint: Math.floor(width / 2),
      index: 0,
      offset: 0,
      colors: ['#aaa', '#7AE8D4', theme.colors.red],
      cursor: 'grab',
    };
  }

  componentDidMount() {
    this.draw(0);
  }

  componentDidUpdate(props) {
    if(this.props.items.length !== props.items.length) {
      this.setState({offset: 0});
      this.draw(0);
    }
  }

  getOffset = desiredOffset => {
    const { items } = this.props;
    
    const max = ITEM_WIDTH * 2 * (items.length - 1);
    const x = _.clamp(desiredOffset, 0, max);
    return (x + ITEM_WIDTH - (x + ITEM_WIDTH) % (ITEM_WIDTH * 2));
  }

  handleMouseDown = (e) => {
    document.addEventListener('mousemove', this.handleMouseMove);
    document.addEventListener('mouseup', this.handleMouseUp);
    this.setState({startX: e.clientX, cursor: 'grabbing'});
    document.body.style.setProperty('cursor', 'grabbing');
  }

  handleMouseUp = (e) => {
    document.removeEventListener('mousemove', this.handleMouseMove);
    document.removeEventListener('mouseup', this.handleMouseUp);
    const x = this.state.offset + (e.clientX - this.state.startX)
    const offset = this.getOffset(x);
    this.draw(offset);
    this.setState({offset, cursor: 'grab'})
    document.body.style.setProperty('cursor', 'auto');
  }

  handleMouseMove = (e) => {
    const x = e.clientX - this.state.startX + this.state.offset;
    this.draw(this.getOffset(x));
  }
  
  draw = (x) => {
    const { colors, midpoint } = this.state;
    const { items } = this.props;

    const canvas = this.canvas.current;
    const ctx = canvas.getContext("2d")

    ctx.setTransform(1, 0, 0, 1, 0, 0);
    ctx.clearRect(0, 0, canvas.width, canvas.height);
    ctx.translate(midpoint + x, 0);

    // todo: loop over only visible items
    for(let i = items.length-1, j = 0; i>=0; i--, j++){
      ctx.beginPath();
      ctx.fillStyle = colors[items[i]];
      ctx.rect((ITEM_WIDTH + ITEM_WIDTH) * -j, 0, ITEM_WIDTH, canvas.height);
      ctx.fill();
    }
  }


  render() {
    const { cursor } = this.state;

    return (
      <Box bg="lightgray" css={{width: '100vw', height: '20px', position: 'relative', cursor}}>
        <canvas 
          onMouseDown={this.handleMouseDown}
          ref={this.canvas} width={this.state.width} height={20} 
        />
      </Box>
    )
  }
}

export default Timeline;