import React, { 
  useRef, 
  useEffect, 
  useState, 
  useCallback, 
  useContext,
  memo,
} from 'react';
import Frame from '../components/Frame';
import styled from 'styled-components';
import theme from '../styles/theme';
import { Box } from 'rebass';
import { FixedSizeList as List } from 'react-window';
import { DispatchContext } from './Queue';
import StarSvg from '../svg/star.svg';
import HeartSvg from '../svg/heart.svg';

function Timeline({items, selected, width}) {
  const ref = useRef();
  const [preview, setPreview] = useState(false);
  const rootDispatch = useContext(DispatchContext);

  const handleMouseEnter = useCallback(e => {
    const item = items[e.currentTarget.dataset.index];
    if(Array.isArray(item)) {
      setPreview(false);
    } else {
      const parent = e.target.parentElement;
      const listEl = parent.parentElement.parentElement;
      const offset = parent.offsetLeft - listEl.scrollLeft + 2;
      const left = Math.min(width - 192, offset);
      setPreview({flyer: item, left});
    }
  }, [items]);

  const handleMouseLeave = useCallback(() => setPreview(false), []);
  const handleClick = useCallback(e => {
    const item = items[e.currentTarget.dataset.index];
    if(Array.isArray(item)) {
      rootDispatch({type: 'SET_LIST', list: item, skipHistory: true});
    } 
    else {
      rootDispatch({type: 'SET_VIEW_MODE', viewMode: 'comparison'});
      rootDispatch({type: 'SET_SECONDARY', secondary: item});
    }
  }, [items])


  useEffect(() => {
    ref.current.scrollToItem(items.length);
  }, [items])

  // useEffect(() => {
  //   ref.current.scrollToItem(selectedIndex);
  // }, [selectedIndex])

  return (
    <Box 
      width={1}
      bg="nearwhite" 
      style={{ borderTop: '1px solid ' + theme.colors.lightgray, position: 'relative' }}
      onMouseLeave={handleMouseLeave}
    >
      {preview && 
        <Preview left={preview.left}>
          <Frame 
            scale={.4}
            flyer={preview.flyer} 
          />
        </Preview>
      }
      <List
        ref={ref}
        itemData={{
          selected,
          onMouseEnter: handleMouseEnter,
          onClick: handleClick,
          items,
        }}
        className="tiny-scroll"
        height={21}
        width={width}
        itemCount={items.length}
        itemSize={12}
        layout="horizontal"
        children={TimelineItem}
      />
    </Box>
  )
}

export default memo(Timeline);

function TimelineItem({data, index, style}) {
  const { 
    items,
    onMouseEnter,
    onClick,
    selected,
  } = data;

  const item = items[index];
  const stage = item.stage;
  const color =  COLORS[stage.type];
  const showStar = !!item.upgradeTo
  const showHeart = item.favorited;
  return (
    <div style={style}>
      <Block
        data-index={index}
        onMouseEnter={onMouseEnter}
        onClick={onClick}
        selected={item === selected}
        color={color}
        children={
          <React.Fragment>
            {showStar && <StarSvg size={8} />}
            {showHeart && <HeartSvg size={8} />}
          </React.Fragment>
        }

      />
    </div>
  )
}

const Block = styled(Box)(props => ({
  cursor: 'pointer',
  height: '100%',
  transition: 'transform .15s',
  margin: "0 1px",
  width: "10px",
  textAlign: 'center',
  lineHeight: '6px',
  borderTop: props.selected ? '2px solid ' + props.theme.colors[props.color + '_dark'] : null,
  background: props.theme.colors[props.color + '_med'],
  color: props.theme.colors[props.color + '_dark'],
}))

const Preview = styled.div(props => ({
  display: 'flex',
  position: 'absolute',
  bottom: '21px',
  left: props.left + 'px',
}))

const COLORS = {
  content: 'green',
  layout: 'yellow',
  typography: 'orange',
  color: 'red',
  decoration: 'pink',
  polish: 'purple',
  export: 'blue',
  upgrade: 'dark',
  merge: 'off_dark',
};