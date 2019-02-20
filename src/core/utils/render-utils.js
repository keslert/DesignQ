import _ from 'lodash';

export function getBackgroundStyle(bg) {
  if(!bg) return null;

  const background = _.filter([
    bg.url && `url(${bg.url}) no-repeat`,
    bg.color,
  ]).join(',');

  return {
    background,
    backgroundSize: `${bg.zoom ? `${bg.zoom * 100}%` : 'cover'}`,
    backgroundPositionX: `${(_.isNumber(bg.x) ? bg.x : .5) * 100}%`,
    backgroundPositionY: `${(_.isNumber(bg.y) ? bg.y : .5) * 100}%`,
    filter: _.map(bg.filters, (v, k) => `${k}(${v})`).join(' '),
    backgroundBlendMode: bg.backgroundBlendMode,
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
    case 'top':
    case 'left': return 'flex-start';
    case 'bottom':
    case 'right' : return 'flex-end';
    default: return 'center';
  }
}


export function getUnitStyle(u) {
  if(!u) return null;
  return u.value + u.unit;
}

export function getWidth(width, {ml, mr}) {
  return `calc(${getUnitStyle(width)} - ${ml + mr}px)`
}

export function getBorderStyles(border) {
  if(!border) return {};

  const color = border.color || 'transparent';

  return {
    borderTop: border.top ? `${border.top}px solid ${color}` : null,
    borderBottom: border.bottom ? `${border.bottom}px solid ${color}` : null,
    borderLeft: border.left ? `${border.left}px solid ${color}` : null,
    borderRight: border.right ? `${border.right}px solid ${color}` : null,
  };
}