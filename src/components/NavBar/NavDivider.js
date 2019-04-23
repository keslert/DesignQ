import React from 'react';
import ProgressBandSvg from '../../svg/progress-band.svg';

function NavDivider({selected, ...rest}) {
  const color = selected ? '#285FAA' : 'hsla(222, 19%, 24%, 1)';
  return (
    <ProgressBandSvg fill={color} height={51} />
  )
}
export default NavDivider;