import React from 'react';
import { 
  getBackgroundStyle, 
  getBorderStyles, 
  getUnitStyle,
  textAlignToFlexAlign,
} from '../core/utils/render-utils';
import ContentGroup from './ContentGroup';

function Flyer({flyer}) {
  
  const flyerStyle = {
    position: 'relative',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    // alignItems: 'flex-start',
    width: '100%',
    height: '100%',
    userSelect: 'none',
    overflow: 'hidden',
    ...getBorderStyles(flyer.border),
    // ...getFilterStyle?
  }

  const bgStyle = {
    position: 'absolute',
    top: 0,
    left: 0,
    width: '100%',
    height: '100%',
    ...getBackgroundStyle(flyer.background),
  }

  const contentStyle = {
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    justifyContent: 'center',
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
      <div id="overlay" style={overlayStyle} />
    </div>
  )
}

export default Flyer;

