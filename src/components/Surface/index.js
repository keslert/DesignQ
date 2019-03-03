import React from 'react';
import Background from '../Background';
import Border from '../Border';
import Decor from '../Decor';

function Surface({surface}) {
  const bb = surface._computed.bb;
  return (
    <React.Fragment>
      {(true || surface.background) && <Background background={surface.background} bb={bb} />}
      {surface.decor && <Decor decor={surface.decor} bb={bb} />}
      {surface.border && <Border border={surface.border} bb={bb} />}
    </React.Fragment>
  )
}
export default Surface;