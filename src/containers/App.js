import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import NavBar from '../components/NavBar';
import HistoryBar from '../components/HistoryBar';
import Canvas from '../components/Canvas';

class App extends Component {



  render() {

    const frameWidth = 850;
    const frameHeight = 1100;

    return (
      <Flex flexDirection="column" style={{height: '100vh'}}>
        <NavBar />
        <Flex flex={1}>
          <Canvas 
            frameWidth={frameWidth} 
            frameHeight={frameHeight}
          />
        </Flex>
        <HistoryBar />
      </Flex>
    );
  }
}

export default App;
