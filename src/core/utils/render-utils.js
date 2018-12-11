export function getBackgroundStyle(bg) {
  if(!bg) return null;

  switch(bg.type) {
    case 'image': return `url(${bg.url}) no-repeat`;
    case 'solid': return bg.color;
    default: return 'none';
  }
}

export function getColorStyle(c) {
  if(!c) return null;
  switch(c.type) {
    default: return c.color
  }
}

export function getUnitStyle(u) {
  if(!u) return null;
  return u.value + u.unit;
}

export function getBorderStyles(border) {
  if(!border) return {};

  const value = `${border.width}px solid ${border.color}`;
  if(border.edges.all) {
    return {border: value}
  }
  return {
    borderTop: border.edges.top ? value : null,
    borderBottom: border.edges.bottom ? value : null,
    borderLeft: border.edges.left ? value : null,
    borderRight: border.edges.right ? value : null,
  };
}