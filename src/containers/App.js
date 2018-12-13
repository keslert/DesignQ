import React, { Component } from 'react';
import { Flex, Box } from 'rebass';
import NavBar from '../components/NavBar';
import Timeline from './Timeline';
import Canvas from '../components/Canvas';

import _ from 'lodash';
import { templates as flyers } from '../core/templates';
import Frame from '../components/Frame';
import { computeFlyer } from '../core/generator';

_.forEach(flyers, flyer => computeFlyer(flyer));

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
    const showGallery = true;
    const frameWidth = 612;
    const frameHeight = 792;
    const scale = 0.55;

    if(showGallery) {
      return (
        <Flex flexWrap="wrap" p={2}>
          {_.map(flyers, flyer => (
            <Box p={2} key={flyer.title}>
              <Frame scale={scale} width={frameWidth} height={frameHeight} flyer={flyer} />
            </Box>
          ))}
        </Flex>
      )
    }

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
