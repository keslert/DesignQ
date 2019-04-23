import React, { useContext, useRef, useLayoutEffect, memo } from 'react';
import Frame from './Frame';
import { Box, Flex } from 'rebass';
import { VariableSizeGrid as Grid } from 'react-window';
import { DispatchContext } from '../containers/Queue';
import Toolbar from './Frame/Toolbar';
import OpacityButton from './OpacityButton';
import CloseSvg from '../svg/close.svg';
import { exportFlyer } from '../core/utils/export-utils';

const GridItem = ({ columnIndex, rowIndex, style, data }) => {
  const { 
    flyers, 
    selected, 
    scale, 
    onClick,
    onMouseDown,
    onMouseUp,
    columns,
  } = data;
  const flyer = flyers[rowIndex * columns + columnIndex];
  if(!flyer) return null;

  const ml = data.itemMarginX + (columnIndex === 0 ? data.marginL : 0);
  const mr = data.itemMarginX + (columnIndex === (columns - 1) ? data.marginR: 0)

  return (
    <div style={style}>
      <Box 
        my={data.itemMarginY + 'px'}
        ml={ml + 'px'} 
        mr={mr + 'px'} 
      >
        {!data.hideToolbar &&
          <Toolbar
            id={"#" + flyer.id}
            iconSize={0.8}
            onDownloadClick={() => data.onDownload(flyer)}
            // onCompareDown={() => data.onCompareDown(flyer)}
            // onCompareUp={data.onCompareUp}
            favorited={flyer.favorited}
            onFavoriteClick={() => data.onFavorite(flyer)}
          />
        }
        <Frame 
          onMouseDown={() => onMouseDown(flyer)}
          onMouseUp={onMouseUp}
          onMouseLeave={onMouseUp}
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
const SCROLLBAR_WIDTH = 8;

function FrameGallery({
  flyers, 
  size, 
  selected, 
  columns,
  canCompare=true,
  canDownload=true,
  canFavorite=true,
  hideToolbar,
  marginL=0,
  marginR=0,
  itemMarginY=20,
  itemMarginX=12,
  ...props
}) {
  const ref = useRef();
  const dispatch = useContext(DispatchContext);
  const columnWidth = (size.width - marginL - marginR - SCROLLBAR_WIDTH) / columns;
  const flyerSize = flyers[0] ? flyers[0].size : {};
  const scale = (columnWidth - itemMarginX * 2) / flyerSize.w;
  const rowHeight = flyerSize.h * scale + itemMarginY * 2 + (hideToolbar ? 0 : TOOLBAR_HEIGHT);

  const columnWidths = new Array(columns).fill().map((v, i) => (
    columnWidth + (i === 0 ? marginL : 0) + (i === columns - 1 ? marginR : 0)
  ))

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
    marginL,
    marginR: marginR + SCROLLBAR_WIDTH,
    itemMarginY,
    itemMarginX,
    onClick: props.onSelect,
    // onCompareDown: !canCompare ? null : flyer => {
    //   dispatch({type: 'SET_COMPARISON', flyer});
    // },
    // onCompareUp: !canCompare ? null : () => {
    //   dispatch({type: 'SET_COMPARISON', flyer: null});
    // },
    onDownload: !canDownload ? null : flyer => {
      exportFlyer(flyer);
    },
    onFavorite: !canFavorite ? null : flyer => {
      dispatch({type: 'TOGGLE_FAVORITE', flyer});
    },
    onMouseDown: flyer => {
      dispatch({type: 'SET_COMPARISON', flyer});
    },
    onMouseUp: () => {
      dispatch({type: 'SET_COMPARISON', flyer: null});
    }
  }

  return (
    <Box className="relative">
      <Grid
        ref={ref}
        itemData={data}
        columnCount={columns}
        columnWidth={i => columnWidths[i]}
        height={size.height}
        rowCount={Math.ceil(flyers.length / columns)}
        rowHeight={() => rowHeight}
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