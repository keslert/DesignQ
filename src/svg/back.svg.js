import React from 'react';

export default ({fill='currentColor', size}) => (
  <svg width={size * .5} height={size} viewBox='0 0 4 8' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M3 1L1.24489 3.25795C1.16729 3.3565 1.1057 3.47374 1.06367 3.60292C1.02164 3.7321 1 3.87066 1 4.0106C1 4.15054 1.02164 4.2891 1.06367 4.41828C1.1057 4.54746 1.16729 4.6647 1.24489 4.76325L3 7'
    stroke={fill} strokeWidth='1.25' strokeLinecap='round' />
  </svg>
)

