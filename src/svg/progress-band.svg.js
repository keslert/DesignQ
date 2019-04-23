import React from 'react';

export default ({fill='currentColor', height}) => (
  <svg width={height * 35/51} height={height} viewBox='0 0 35 51' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d="M15 51L35 25.5L15 0H0L20 25.5L0 51H15Z" fill={fill} />
  </svg>
)