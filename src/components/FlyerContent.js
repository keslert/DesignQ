import React from 'react';
import ContentGroup from './ContentGroup';
import Border from './Border';
import Background from './Background';

function FlyerContent({content}) {

  const style = {
    position: 'relative',
    width: '100%',
    height: '100%',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
  }

  const bodyStyle = {
    flex: 1, 
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    justifyContent: content.body.alignY || 'center',
  }

  const footerStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    /*
    Possible layout options for footer 
      1. Inline (unbalanced) [the content centering algorithm includes the footer]
      2. Inline (balanced) [fake the header to be the same size]
      4. Overlay (no space) [position: absolute]
      3. Overlay (takes up space) [position: absolute] {I don't think this exists}
    */
  }

  const headerStyle = {
    display: 'flex', 
    flexDirection: 'column', 
    alignItems: 'flex-start', 
    /*
    Possible layout options for header
      1. Inline (takes up space)
    */
  }

  return (
    <div style={style}>
      <Background background={content.background} />
      <Border border={content.border} />

      <div style={headerStyle}>
        <ContentGroup
          group={content.header}
        />
      </div>
      <div style={bodyStyle}>
        <ContentGroup
          group={content.body}
        />
      </div>
      <div style={footerStyle}>
        <ContentGroup
          group={content.footer}
          style={{
            bottom: 0,
            left: 0,
          }}
        />
      </div>
    </div>
  )
}

export default FlyerContent;

