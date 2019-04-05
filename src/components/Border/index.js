import React from 'react';
import { resolveColor } from '../../core/utils/render-utils';

// clip-path solution (without svg)
// https://bennettfeely.com/clippy/

function Border({border, bb}) {
  const c = border._computed;

/*
  x1  x2     x3   x4
y1 _______________ 
  |               |
y2|   |-------|   |
  |   |       |   |
  |   |       |   |
y3|   |-------|   |
  |               |
y4 _______________  w,h
*/

  const x1 = (c._lOffset) + 'px';
  const x2 = (c.l) + 'px';
  const x3 = `calc(100% - ${c.r}px)`; // (c.lOffset + c.w - c._r) + 'px';
  const x4 = `calc(100% - ${c._rOffset}px)` // (c.lOffset + c.w) + 'px';

  const y1 = (c._tOffset) + 'px';
  const y2 = (c.t) + 'px';
  const y3 = `calc(100% - ${c.b}px)`; // (c.tOffset + c.h - c._b) + 'px';
  const y4 = `calc(100% - ${c._bOffset}px)`; // (c.tOffset + c.h) + 'px';

  const clipPath = [
    x1+' '+y1,
    x1+' '+y4,
    x2+' '+y4,
    x2+' '+y2,
    x3+' '+y2,
    x3+' '+y3,
    x2+' '+y3,
    x2+' '+y4,
    x4+' '+y4,
    x4+' '+y1,
    x1+' '+y1,
  ].join(', ')

  const style = {
    position: 'absolute',
    background: border.background && resolveColor(border.background.color),
    left: 0,
    top: 0,
    width: '100%',
    height: '100%',
    clipPath: `polygon(${clipPath})`,
    WebkitClipPath: `polygon(${clipPath})`,
  }

  const wrapStyle = {
    position: 'absolute',
    left: `${bb.l}px`,
    top: `${bb.t}px`,
    height: `${bb.h}px`,
    width: `${bb.w}px`,
  }

  return (
    <div style={wrapStyle}>
      <div
        id="border"
        style={style}
      />
    </div>
  )
}
export default Border;