import _ from 'lodash';

export function getBackgroundStyle(bg) {
  if(!bg) return null;

  return {
    background: `url(${bg.url}) no-repeat`,
    backgroundSize: `${bg.size ? `${bg.size * 100}%` : 'cover'}`,
    backgroundPositionX: `${(_.isNumber(bg.x) ? bg.x : .5) * 100}%`,
    backgroundPositionY: `${(_.isNumber(bg.y) ? bg.y : .5) * 100}%`,
    filter: _.map(bg.filters, (v, k) => `${k}(${v})`).join(' '),
    backgroundBlendMode: bg.backgroundBlendMode,
    backgroundColor: bg.color
  };
}

export function getColorStyle(c) {
  if(!c) return null;
  switch(c.type) {
    default: return c.color
  }
}

export function textAlignToFlexAlign(align) {
  switch(align) {
    case 'left': return 'flex-start';
    case 'right' : return 'flex-end';
    default: return 'center';
  }
}

export function getUnitStyle(u) {
  if(!u) return null;
  return u.value + u.unit;
}

export function getBorderStyles(border) {
  if(!border) return {};

  const value = `${border.width}px solid ${border.color}`;
  if(border.sides.all) {
    return {border: value}
  }
  return {
    borderTop: border.sides.top ? value : null,
    borderBottom: border.sides.bottom ? value : null,
    borderLeft: border.sides.left ? value : null,
    borderRight: border.sides.right ? value : null,
  };
}