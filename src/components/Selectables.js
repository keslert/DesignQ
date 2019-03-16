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
          key={item._computed.id}
          data-index={i}
          onClick={handleClick}
          selected={selection && selection.id === item.id}
          left={item._computed.bb.l}
          top={item._computed.bb.t}
          width={item._computed.bb.w}
          height={item._computed.bb.h}
        />
      ))}
    </React.Fragment>
  )
}

const Selectable = styled.div(props => ({
  position: 'absolute',
  left: (props.left - 1) + 'px',
  top: (props.top - 1) + 'px',
  height: (props.height + 2) + 'px',
  width: (props.width + 2) + 'px',
  border: props.selected ? '2px solid ' + props.theme.colors.blue : null,
  '&:hover': {
    border: '2px solid ' + props.theme.colors.blue,
  }

}))


export default Selectables;