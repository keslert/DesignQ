import React from 'react';
import Background from './Background';
import Surface from './Surface';
import Element from './Element';
import styled from 'styled-components';
import Selectables from './Selectables';
import MDSpinner from 'react-md-spinner';

function Flyer({flyer, scale, selectable}) {

  if(flyer.pending) {
    return (
      <div style={pendingStyle}>
        <MDSpinner singleColor="#262d3c" />
      </div>
    )
  }

  
  const groups = [
    flyer.content.header,
    flyer.content.body,
    flyer.content.footer,
  ].filter(g => g)
  
  const elements = groups.map(g => g.elements).flat();

  return (
    <S_Flyer 
      id={flyer.id} 
      key={flyer.id} 
      title={process.env.NODE_ENV === 'development' ? `${flyer.title}-${flyer.id}` : null}
    >
      <Surface surface={flyer} />
      <Surface surface={flyer.content} />

      {groups.map(g => (
        <Surface key={g.type} surface={g} />
      ))}

      {elements.map(el => (
        <Element 
          key={el.id} 
          scale={scale}
          element={el}
        />
      ))}

      {selectable && 
        <Selectables
          items={[
            flyer,
            flyer.content,
            ...groups,
            ...elements,
          ]}
        />
      }
      
      {flyer.overlay && <Background background={flyer.overlay} />}
    </S_Flyer>
  )
}

export default Flyer;

const S_Flyer = styled.div({
  position: 'relative',
  width: '100%',
  height: '100%',
  userSelect: 'none',
  overflow: 'hidden',
  background: '#ffffff',
  fontVariant: 'normal',
})

const pendingStyle = {
  display: 'flex', 
  height: '100%', 
  justifyContent: 'center', 
  alignItems: 'center', 
  flexDirection: 'column',
}