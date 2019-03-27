import React from 'react';
import Background from './Background';
import Surface from './Surface';
import Element from './Element';
import styled from 'styled-components';
import Selectables from './Selectables';

function Flyer({flyer, selectable}) {
  
  const groups = [
    flyer.content.header,
    flyer.content.body,
    flyer.content.footer,
  ].filter(g => g)
  
  const elements = groups.map(g => g.elements).flat();

  return (
    <S_Flyer key={flyer.id} title={flyer.title}>
      <Surface surface={flyer} />
      <Surface surface={flyer.content} />

      {groups.map(g => (
        <Surface key={g.type} surface={g} />
      ))}

      {elements.map(el => (
        <Element element={el} key={el.id} />
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
})