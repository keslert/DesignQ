import React from 'react';

export default ({fill='currentColor', size}) => (
  <svg width={size} height={size * .75} viewBox='0 0 20 15' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <rect width='6' height='7' rx='1' fill={fill} />
    <rect x='7' width='6' height='7' rx='1' fill={fill} />
    <rect x='7' y='8' width='6' height='7' rx='1' fill={fill} />
    <rect x='14' width='6' height='7' rx='1' fill={fill} />
    <rect x='14' y='8' width='6' height='7' rx='1' fill={fill} />
    <rect y='8' width='6' height='7' rx='1' fill={fill} />
  </svg>
)