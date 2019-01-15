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

  const value = `${border.width}px solid ${border.color || 'transparent'}`;
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

export function getBorderPadding(border) {
  if(!border) return {};

  const s = border.sides;
  const value = `${border.width}px`;

  return {
    paddingTop: s.all || s.top ? value : null,
    paddingBottom: s.all || s.bottom ? value : null,
    paddingLeft: s.all || s.left ? value : null,
    paddingRight: s.all || s.right ? value : null,
  };
}