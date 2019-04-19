import React, { useContext, useRef, useLayoutEffect, memo } from 'react';
import Frame from './Frame';
import { Box, Flex } from 'rebass';
import { FixedSizeGrid as Grid } from 'react-window';
import { DispatchContext } from '../containers/Queue';
import Toolbar from './Frame/Toolbar';
import OpacityButton from './OpacityButton';
import CloseSvg from '../svg/close.svg';

const GridItem = ({ columnIndex, rowIndex, style, data }) => {
  const { 
    flyers, 
    selected, 
    scale, 
    onClick, 
    columns,
  } = data;
  const flyer = flyers[rowIndex * columns + columnIndex];
  if(!flyer) return null;

  return (
    <div style={style}>
      <Box 
        mt={data.frameMarginT + 'px'}
        mx={data.frameMarginX + 'px'} 
      >
        <Frame 
          onClick={() => onClick(flyer)}
          className={`selectable ${selected === flyer && 'selected'}`}
          flyer={flyer}
          scale={scale}
        />
        {!data.hideToolbar &&
          <Toolbar
            id={"#" + flyer.id}
            onDownloadClick={() => data.onDownload(flyer)}
            onCompareDown={() => data.onCompareDown(flyer)}
            onCompareUp={data.onCompareUp}
            favorited={flyer.favorited}
            onFavoriteClick={() => data.onFavorite(flyer)}
          />
        }
      </Box>
    </div>
  )
};

const TOOLBAR_HEIGHT = 16;

function FrameGallery({
  flyers, 
  size, 
  selected, 
  columns,
  canCompare=true,
  canDownload=true,
  canFavorite=true,
  hideToolbar,
  frameMarginT=20,
  frameMarginX=12,
  ...props
}) {
  const ref = useRef();
  const dispatch = useContext(DispatchContext);
  const columnWidth = size.width / columns;
  const flyerSize = flyers[0] ? flyers[0].size : {};
  const scale = (columnWidth - frameMarginX * 2) / flyerSize.w;
  const rowHeight = flyerSize.h * scale + frameMarginT + (hideToolbar ? 0 : TOOLBAR_HEIGHT);

  useLayoutEffect(() => {
    const index = Math.max(flyers.indexOf(selected), 0)
    ref.current.scrollToItem({rowIndex: Math.floor(index / columns + .01), columnIndex: 0, align: 'center'})
  }, [flyers[0]])

  const data = {
    scale,
    flyers, 
    selected,
    columns,
    hideToolbar,
    frameMarginT,
    frameMarginX,
    onClick: props.onSelect,
    onCompareDown: !canCompare ? null : flyer => {
      dispatch({type: 'SET_COMPARISON', flyer});
    },
    onCompareUp: !canCompare ? null : () => {
      dispatch({type: 'SET_COMPARISON', flyer: null});
    },
    onDownload: !canDownload ? null : flyer => {
      dispatch({type: 'DOWNLOAD_FLYER', flyer});
    },
    onFavorite: !canFavorite ? null : flyer => {
      dispatch({type: 'TOGGLE_FAVORITE', flyer});
    }
  }

  return (
    <Box className="relative">
      <Grid
        ref={ref}
        itemData={data}
        columnCount={columns}
        columnWidth={columnWidth}
        height={size.height}
        rowCount={Math.ceil(flyers.length / columns)}
        rowHeight={rowHeight}
        width={size.width}
        onItemsRendered={r => dispatch({
          type: 'ON_GRID_SCROLL', 
          scrolledToIndex: r.visibleRowStopIndex * columns,
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
    </Box>
  )
}

export default memo(FrameGallery);

const closeStyle = {
  position: 'absolute',
  right: 10,
  top: 10,
}