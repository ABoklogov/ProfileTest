import React, { type FC } from 'react';
import Svg, { Defs, LinearGradient, Path, Stop } from 'react-native-svg';
import { type IIconSVGProps } from '../types';

const NotificationIcon: FC<IIconSVGProps> = ({ size = 20 }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
    >
      <Path
        fill="url(#a)"
        d="M10 18.333c1.051 0 1.904-.886 1.904-1.979H8.096c0 1.093.853 1.98 1.904 1.98Zm6.41-4.63c-.575-.641-1.65-1.607-1.65-4.77 0-2.404-1.622-4.327-3.808-4.799V3.49c0-.547-.426-.99-.952-.99s-.952.443-.952.99v.644C6.862 4.606 5.24 6.529 5.24 8.932c0 3.164-1.075 4.13-1.65 4.772a.987.987 0 0 0-.257.671c.004.507.387.99.956.99H15.71c.57 0 .953-.483.956-.99a.987.987 0 0 0-.257-.671Z"
      />
      <Defs>
        <LinearGradient
          id="a"
          x1={16.667}
          x2={-0.226}
          y1={2.5}
          y2={8.822}
          gradientUnits="userSpaceOnUse"
        >
          <Stop offset={0.016} stopColor="#7134F3" />
          <Stop offset={1} stopColor="#4F34F3" />
        </LinearGradient>
      </Defs>
    </Svg>
  );
};

export { NotificationIcon };
