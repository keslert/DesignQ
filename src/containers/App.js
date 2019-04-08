import React, { Suspense } from 'react';
import { Flex, Box } from 'rebass';
import { Switch, Route } from 'react-router-dom';
import { DragDropContextProvider } from 'react-dnd'
import html5Backend from 'react-dnd-html5-backend'

const Fonts = React.lazy(() => import('./Fonts'));
const Editor = React.lazy(() => import('./Editor'));
const Gallery = React.lazy(() => import('./Gallery'));
const Queue = React.lazy(() => import('./Queue'));
const ImagePalette = React.lazy(() => import('./ImagePalette'));
const ImagePicker = React.lazy(() => import('./ImagePicker'))
const CalcFonts = React.lazy(() => import('./calc/CalcFonts'));
const CalcImages = React.lazy(() => import('./calc/CalcImages'));
const ContentGallery = React.lazy(() => import('./test/ContentGallery'));
const ImageProcessing = React.lazy(() => import('./test/ImageProcessing'));


// const LayoutGallery = React.lazy(() => import('./test/LayoutGallery'));

const loadStyle = {
  fontSize: '24px',
  height: '100vh',
  fontWeight: 'bold',
}
function App() {
  
  const flyerSize = { w: 480, h: 670 };
  
  return (
    <DragDropContextProvider backend={html5Backend}>
      <Suspense fallback={<Flex style={loadStyle} alignItems="center" justifyContent="center">Loading...</Flex>}>
        <Switch>
          <Route path="/fonts" component={Fonts} />
          <Route path="/editor/:id" component={(props) => <Editor flyerSize={flyerSize} {...props} />} />
          <Route path="/gallery" component={(props) => <Gallery flyerSize={flyerSize} {...props} />} />
          <Route path="/app" component={props => <Queue flyerSize={flyerSize} {...props} />} />
          <Route path="/image-palette" component={ImagePalette} />
          <Route path="/unsplash" component={ImagePicker} />
          <Route path="/calc/fonts" component={CalcFonts} />
          <Route path="/calc/images" component={CalcImages} />
          <Route path="/test/layout" component={props => <ContentGallery flyerSize={flyerSize} {...props} />} />
          <Route path="/test/image-processing" component={props => <ImageProcessing flyerSize={flyerSize} {...props} />} />

          <Route component={() => <div>DQ</div>} />
          
        </Switch>
      </Suspense>
    </DragDropContextProvider>
  )
}

export default App;
