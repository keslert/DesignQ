import React, { useContext, useCallback } from 'react';
import styled from 'styled-components';
import { DispatchContext, SelectionContext } from '../containers/Queue';

function Selectables({items}) {
  const dispatch = useContext(DispatchContext);
  const selection = useContext(SelectionContext);
  const handleClick = useCallback(e => {
    e.stopPropagation();
    const index = e.target.dataset.index;
    const item = items[index]
    dispatch({type: 'SELECT', selection: item})
  }, [items]);

  return (
    <React.Fragment>
      {items.map((item, i) => (
        <Selectable
          key={item.id}
          data-index={i}
          onClick={handleClick}
          selected={selection === item}
          left={item._computed.bb.l}
          top={item._computed.bb.t}
          width={item._computed.bb.w}
          height={item._computed.bb.h}
          style={{
            left: (item._computed.bb.l - 1) + 'px',
            top: (item._computed.bb.t - 1) + 'px',
            height: (item._computed.bb.h + 2) + 'px',
            width: (item._computed.bb.w + 2) + 'px',
          }}
        />
      ))}
    </React.Fragment>
  )
}

const Selectable = styled.div(props => ({
  position: 'absolute',
  border: props.selected ? '2px solid ' + props.theme.colors.blue : null,
  '&:hover': {
    border: '2px solid ' + props.theme.colors.blue,
  }
}))


export default Selectables;