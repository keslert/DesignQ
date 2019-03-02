import React, { Suspense } from 'react';
import { Flex, Box } from 'rebass';
import { Switch, Route } from 'react-router-dom';

const Fonts = React.lazy(() => import('./Fonts'));
const Editor = React.lazy(() => import('./Editor'));
const Gallery = React.lazy(() => import('./Gallery'));
const Queue = React.lazy(() => import('./Queue'));
const CalcFonts = React.lazy(() => import('./calc/CalcFonts'));
const CalcImages = React.lazy(() => import('./calc/CalcImages'));

function App() {

  const flyerSize = {
    w: 480,
    h: 670,
  }

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/fonts" component={Fonts} />
        <Route path="/editor/:id" component={(props) => <Editor flyerSize={flyerSize} {...props} />} />
        <Route path="/app" component={Queue} />
        <Route path="/calc/fonts" component={CalcFonts} />
        <Route path="/calc/images" component={CalcImages} />

        <Route component={() => <Gallery flyerSize={flyerSize} />} />
        
      </Switch>
    </Suspense>
  )
}

export default App;
