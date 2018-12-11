import _ from 'lodash';

export function getBackgroundStyle(bg) {
  if(!bg) return null;

  switch(bg.type) {
    case 'image': return {
      background: `url(${bg.url}) no-repeat`,
      backgroundSize: `${(bg.size || 1) * 100}%`,
      backgroundPosition: `${(bg.x || .5) * 100}% ${(bg.y || .5) * 100}%`,
      filter: _.map(bg.filters, (v, k) => `${k}(${v})`).join(' ')
    };
    case 'solid': return {backgroundColor: bg.color};
    default: return {};
  }
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