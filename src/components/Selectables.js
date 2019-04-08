import React, { useContext, useCallback, useEffect } from 'react';
import styled from 'styled-components';
import { DispatchContext, SelectionContext } from '../containers/Queue';
import { DragSource } from 'react-dnd'
import DropZone from './DropZone';

function Selectables({items}) {
  const dispatch = useContext(DispatchContext);
  const selection = useContext(SelectionContext);
  const handleClick = useCallback(e => {
    e.stopPropagation();
    const index = e.currentTarget.dataset.index;
    const item = items[index]
    dispatch({type: 'SELECT', selection: item})
  }, [items]);

  const handleReorder = useCallback((target, source, isAfter) => {
    dispatch({type: 'REORDER', target, source, isAfter});
  }, [items]);

  const elements = items.filter(item => item.kind === 'element');


  return (
    <React.Fragment>
      {items.map((item, i) => (
        <Selectable
          key={item.id}
          item={item}
          index={i}
          onClick={handleClick}
          selected={selection === item}
          onReorder={handleReorder}
        />
      ))}

      
      {elements.map((item, i) => (
        <React.Fragment key={item.id}>
          {!item._computed.isFirst ? null :
            <DropZone
              onDrop={handleReorder}
              type="element"
              item={item}
              isAfter={false}
            />
          }
          <DropZone
            onDrop={handleReorder}
            type="element"
            item={item}
            isAfter={true}
          />
        </React.Fragment>
      ))}

    </React.Fragment>
  )
}

const source = {
  beginDrag(props) { return props.item },
  canDrag(props, monitor) {
    return props.item.kind === 'element' && props.item._parent.elements.length > 1
  }
}

function collectSource(connect, monitor) {
  return {
    connectDragSource: connect.dragSource(),
    connectDragPreview: connect.dragPreview(),
    isDragging: monitor.isDragging(),
  }
}

const Selectable = DragSource('selectable', source, collectSource)(
  ({
    item,
    index,
    selected,
    onClick, 
    connectDragSource,
    connectDragPreview,
    isDragging,
  }) => {
    useEffect(() => {
      const img = new Image();
      img.src = 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAMgAAAAJCAMAAABAMpO9AAAAA1BMVEUmLTyU/yHgAAAAFklEQVQ4y2NgGAWjYBSMglEwCkYBAwAHEQABial+VQAAAABJRU5ErkJggg=='
      img.onload = () => connectDragPreview(img);
    }, [])

    return connectDragSource(
      <div>
        <SelectableBox
          data-index={index}
          onClick={onClick}
          selected={selected}
          isDragging={isDragging}
          left={item._computed.bb.l}
          top={item._computed.bb.t}
          width={item._computed.bb.w}
          height={item._computed.bb.h}
          style={{
            left: (item._computed.bb.l) + 'px',
            top: (item._computed.bb.t) + 'px',
            height: (item._computed.bb.h) + 'px',
            width: (item._computed.bb.w) + 'px',
          }}
        />
      </div>
    )
  },
)

const SelectableBox = styled.div(props => ({
  position: 'absolute',
  background: props.isDragging ? '#ccc' : null,
  border: props.selected ? '1px solid ' + props.theme.colors.blue : null,

  '&:hover': {
    border: props.selected ? undefined : '2px solid ' + props.theme.colors.blue,
    boxSizing: 'border-box',
    // transform: 'translate3d(0, 0, 0)',
    // cursor: move;
    // box-shadow: 0 0 0 9999em rgba(0, 0, 0, 0.5);
    // border: 1px solid;
    // borderImageSource: 'url("data:image/gif;base64,R0lGODlhCgAKAJECAAAAAP///////wAAACH/C05FVFNDQVBFMi4wAwEAAAAh/wtYTVAgRGF0YVhNUDw/eHBhY2tldCBiZWdpbj0i77u/IiBpZD0iVzVNME1wQ2VoaUh6cmVTek5UY3prYzlkIj8+IDx4OnhtcG1ldGEgeG1sbnM6eD0iYWRvYmU6bnM6bWV0YS8iIHg6eG1wdGs9IkFkb2JlIFhNUCBDb3JlIDUuMy1jMDExIDY2LjE0NTY2MSwgMjAxMi8wMi8wNi0xNDo1NjoyNyAgICAgICAgIj4gPHJkZjpSREYgeG1sbnM6cmRmPSJodHRwOi8vd3d3LnczLm9yZy8xOTk5LzAyLzIyLXJkZi1zeW50YXgtbnMjIj4gPHJkZjpEZXNjcmlwdGlvbiByZGY6YWJvdXQ9IiIgeG1sbnM6eG1wTU09Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9tbS8iIHhtbG5zOnN0UmVmPSJodHRwOi8vbnMuYWRvYmUuY29tL3hhcC8xLjAvc1R5cGUvUmVzb3VyY2VSZWYjIiB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iIHhtcE1NOkRvY3VtZW50SUQ9InhtcC5kaWQ6OEI5RDc5MTFDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcE1NOkluc3RhbmNlSUQ9InhtcC5paWQ6OEI5RDc5MTBDNkE2MTFFM0JCMDZEODI2QTI4MzJBOTIiIHhtcDpDcmVhdG9yVG9vbD0iQWRvYmUgUGhvdG9zaG9wIENTNiAoTWFjaW50b3NoKSI+IDx4bXBNTTpEZXJpdmVkRnJvbSBzdFJlZjppbnN0YW5jZUlEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIiBzdFJlZjpkb2N1bWVudElEPSJ4bXAuZGlkOjAyODAxMTc0MDcyMDY4MTE4MDgzQzNDMjA5MzREQ0ZDIi8+IDwvcmRmOkRlc2NyaXB0aW9uPiA8L3JkZjpSREY+IDwveDp4bXBtZXRhPiA8P3hwYWNrZXQgZW5kPSJyIj8+Af/+/fz7+vn49/b19PPy8fDv7u3s6+rp6Ofm5eTj4uHg397d3Nva2djX1tXU09LR0M/OzczLysnIx8bFxMPCwcC/vr28u7q5uLe2tbSzsrGwr66trKuqqainpqWko6KhoJ+enZybmpmYl5aVlJOSkZCPjo2Mi4qJiIeGhYSDgoGAf359fHt6eXh3dnV0c3JxcG9ubWxramloZ2ZlZGNiYWBfXl1cW1pZWFdWVVRTUlFQT05NTEtKSUhHRkVEQ0JBQD8+PTw7Ojk4NzY1NDMyMTAvLi0sKyopKCcmJSQjIiEgHx4dHBsaGRgXFhUUExIREA8ODQwLCgkIBwYFBAMCAQAAIfkEBQoAAgAsAAAAAAoACgAAAhWEERkn7W3ei7KlagMWF/dKgYeyGAUAIfkEBQoAAgAsAAAAAAoACgAAAg+UYwLJ7RnQm7QmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYgLJHdiinNSAVfOEKoUCACH5BAUKAAIALAAAAAAKAAoAAAIRVISAdusPo3RAzYtjaMIaUQAAIfkEBQoAAgAsAAAAAAoACgAAAg+MDiem7Q8bSLFaG5il6xQAIfkEBQoAAgAsAAAAAAoACgAAAg+UYRLJ7QnQm7SmsCyVKhUAIfkEBQoAAgAsAAAAAAoACgAAAhCUYBLJDdiinNSEVfOEKoECACH5BAUKAAIALAAAAAAKAAoAAAIRFISBdusPo3RBzYsjaMIaUQAAOw==")',
    // borderImageSlice: 1.5,
    // borderImageRepeat: 'repeat'
  }
}))

export default Selectables;