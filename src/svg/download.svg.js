import React from 'react';

export default ({fill='currentColor', size}) => (
  <svg width={size * .8} height={size} viewBox='0 0 16 20' fill='none' xmlns='http://www.w3.org/2000/svg'>
    <path d='M13.8088 5.84578L15.2141 7.29795C15.4106 7.50096 15.4079 7.824 15.2082 8.02376L8.49037 14.7416C8.28827 14.9437 7.96061 14.9437 7.75851 14.7416L1.03842 8.02148C0.836324 7.81939 0.836324 7.49172 1.03842 7.28963L2.44775 5.8803C2.64925 5.6788 2.97573 5.67811 3.17807 5.87877L6.61801 9.29004V1.0175C6.61801 0.731693 6.8497 0.5 7.13551 0.5H9.11337C9.39918 0.5 9.63087 0.731693 9.63087 1.0175V9.27986L13.071 5.83973C13.2731 5.63764 13.6008 5.63764 13.8029 5.83973C13.8049 5.84173 13.8068 5.84375 13.8088 5.84578ZM1.31389 16.9578H14.935C15.1255 16.9578 15.28 17.1122 15.28 17.3028V19.475C15.28 19.6655 15.1255 19.82 14.935 19.82H1.31389C1.12335 19.82 0.968886 19.6655 0.968886 19.475V17.3028C0.968886 17.1122 1.12335 16.9578 1.31389 16.9578Z'
    fill={fill} />
  </svg>
)