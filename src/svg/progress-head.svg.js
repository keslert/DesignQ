import React from 'react';

export default ({fill='currentColor', height}) => (
  <svg width={25/51 * height} height={height} viewBox='0 0 25 51' fill='red' xmlns='http://www.w3.org/2000/svg'>
    <path d='M5 51L25 25.5L5 0H0V51H5Z' fill={fill} />
  </svg>
)