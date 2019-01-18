import React from 'react';
import { 
  getBackgroundStyle, 
  getBorderStyles, 
  getBorderPadding,
} from '../core/utils/render-utils';
import ContentGroup from './ContentGroup';
import Border from './Border';

function Flyer({flyer}) {
  
  const flyerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    userSelect: 'none',
    overflow: 'hidden',
    background: '#fff',
    // ...getBorderPadding(flyer.border),
    // ...getFilterStyle?
  }

  const innerStyle = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }

  const bgStyle = {
    position: 'absolute',
    left: `${flyer.border._computed.l}px`,
    right: `${flyer.border._computed.r}px`,
    top: `${flyer.border._computed.t}px`,
    bottom: `${flyer.border._computed.b}px`,
    ...getBackgroundStyle(flyer.background),
  }

  const contentStyle = {
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    justifyContent: flyer.content.alignY || 'center',
  }

  const overlayStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    ...getBackgroundStyle(flyer.overlay),
  }

  const footerStyle = {
    /*
    Possible layout options for footer 
      1. Inline (unbalanced) [the content centering algorithm includes the footer]
      2. Inline (balanced) [fake the header to be the same size]
      4. Overlay (no space) [position: absolute]
      3. Overlay (takes up space) [position: absolute] {I don't think this exists}
    */
  }

  const headerStyle = {
    /*
    Possible layout options for header
      1. Inline (takes up space)
    */
  }

  return (
    <div style={flyerStyle}>
      {flyer.border && <Border border={flyer.border} />}
      <div style={innerStyle}>
        <div style={bgStyle} />
        <ContentGroup
          group={flyer.header}
        />
        <div style={contentStyle}>
          <ContentGroup
            group={flyer.content}
          />
        </div>
        <ContentGroup
          group={flyer.footer}
          style={{
            bottom: 0,
            left: 0,
          }}
        />
      </div>
      {flyer.overlay && <div id="overlay" style={overlayStyle} />}
    </div>
  )
}

export default Flyer;

