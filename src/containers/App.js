import React, { Suspense } from 'react';
import { Flex, Box } from 'rebass';
import { Switch, Route } from 'react-router-dom';

const Fonts = React.lazy(() => import('./Fonts'));
const Editor = React.lazy(() => import('./Editor'));
const Gallery = React.lazy(() => import('./Gallery'));
const Queue = React.lazy(() => import('./Queue'));

function App() {

  return (
    <Suspense fallback={<div>Loading...</div>}>
      <Switch>
        <Route path="/fonts" component={Fonts} />
        <Route path="/editor" component={Editor} />
        <Route path="/app" component={Queue} />
        <Route path="/gallery" component={Gallery} />
        <Route component={Gallery} />
        
      </Switch>
    </Suspense>
  )
}

export default App;
