import React, { useContext, useRef, useEffect, useLayoutEffect, memo } from 'react';
import Frame from './Frame';
import { Box, Flex } from 'rebass';
import { FixedSizeGrid as Grid } from 'react-window';
import { DispatchContext } from '../containers/Queue';
import Toolbar from './Frame/Toolbar';
import OpacityButton from './OpacityButton';
import CloseSvg from '../svg/close.svg';

const GridItem = ({ columnIndex, rowIndex, style, data }) => {
  const { flyers, selected, scale, onClick, onFavorite } = data;
  const flyer = flyers[rowIndex * COLUMNS + columnIndex];
  if(!flyer) return null;

  return (
    <div style={style}>
      <Box 
        my={FLYER_PY} 
        mx={FLYER_PX} 
      >
        <Toolbar 
          onClick={() => onFavorite(flyer)} 
          favorited={flyer.favorited}
          id={"#" + flyer.id}
        />
        <Frame 
          onClick={() => onClick(flyer)}
          className={`selectable ${selected === flyer && 'selected'}`}
          flyer={flyer}
          scale={scale}
        />
      </Box>
    </div>
  )
};

const TOOLBAR_HEIGHT = 16;
const FLYER_PX = 12;
const FLYER_PY = 20;
const PL = 12 + 36; // CanvasButton.width/2
const PR = 12;
const COLUMNS = 2;
function FrameGallery({flyers, size, selected, ...props}) {
  const ref = useRef();
  const dispatch = useContext(DispatchContext);
  const width = size.width - PL - PR;
  const columnWidth = width / COLUMNS
  const flyerSize = flyers[0] ? flyers[0].size : {};
  const scale = (columnWidth - FLYER_PX * 2) / flyerSize.w;
  const flyerHeight = flyerSize.h * scale + FLYER_PY * 2 + TOOLBAR_HEIGHT;

  useLayoutEffect(() => {
    const index = Math.max(flyers.indexOf(selected), 0)
    ref.current.scrollToItem({rowIndex: Math.floor(index / COLUMNS + .01), columnIndex: 0, align: 'center'})
  }, [flyers[0]])

  const data = {
    scale,
    flyers, 
    selected,
    onClick: flyer => {
      dispatch({type: 'SET_SECONDARY', secondary: flyer, preserveList: true});
    },
    onFavorite: flyer => {
      dispatch({type: 'TOGGLE_FAVORITE', flyer});
    }
  }

  return (
    <Flex 
      flexWrap="wrap" 
      pl={PL} 
      pr={PR} 
      justifyContent="center" 
      className="relative"
    >
      <Grid
        ref={ref}
        itemData={data}
        columnCount={COLUMNS}
        columnWidth={columnWidth}
        height={size.height}
        rowCount={Math.ceil(flyers.length / COLUMNS)}
        rowHeight={flyerHeight}
        width={width}
        onItemsRendered={r => dispatch({
          type: 'ON_GRID_SCROLL', 
          scrolledToIndex: r.visibleRowStopIndex * COLUMNS,
        })}
      >
        {GridItem}
      </Grid>
      {props.canClose &&
        <OpacityButton 
          color="dark"
          onClick={props.onCloseClick}
          style={closeStyle}
          children={
            <CloseSvg size={26} />
          }
        />
      }
    </Flex>
  )
}

export default memo(FrameGallery);

const closeStyle = {
  position: 'absolute',
  right: 10,
  top: 10,
}