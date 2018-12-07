import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import NavBar from '../components/NavBar';
import Timeline from './Timeline';
import Canvas from '../components/Canvas';

class App extends Component {

  state = {
    designs: [1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0 , 0, 1, 2, 0, 0, 0, 1, 2, 0, 0, 0, 0, 0, 0, 1, 0, 0 , 0 , 1, 2, 0, 0, 0],

  }

  componentDidMount() {
    // setInterval(() => { this.update(); }, 1000);
  }

  update = () => {
    this.setState({designs: [...this.state.designs, Math.floor(Math.random() * 3)]})
  }

  render() {

    const frameWidth = 612;
    const frameHeight = 792;

    return (
      <Flex flexDirection="column" style={{height: '100vh'}}>
        <NavBar />
        <Flex flex={1}>
          <Canvas 
            frameWidth={frameWidth} 
            frameHeight={frameHeight}
          />
        </Flex>
        <Timeline 
          items={this.state.designs}
        />
      </Flex>
    );
  }
}

export default App;
