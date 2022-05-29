import React from 'react';
import Svg, { Path } from 'react-native-svg';
import { SvgIconProps } from './types';

const LocationIcon = ({
  height,
  width,
  fill = '#000',
  accessibilityRole = 'image'
}: SvgIconProps) => {
  return (
    <Svg
      height={height}
      width={width}
      fill={fill}
      accessibilityRole={accessibilityRole}
      viewBox="0 0 384 512">
      <Path d="M384 192C384 279.4 267 435 215.7 499.2C203.4 514.5 180.6 514.5 168.3 499.2C116.1 435 0 279.4 0 192C0 85.96 85.96 0 192 0C298 0 384 85.96 384 192H384z" />
    </Svg>
  );
};

export default LocationIcon;
