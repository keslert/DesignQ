import React from 'react';

export default ({fill='currentColor', height}) => (
  <svg width={height * 24/51} height={height} viewBox='0 0 24 51' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M24 51V0H0L20 25.5L0 51H24Z' fill={fill} />
  </svg>
)