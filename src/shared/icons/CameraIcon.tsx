import React, { type FC } from 'react';
import Svg, { ClipPath, Defs, G, Path } from 'react-native-svg';
import { type IIconSVGProps } from '../types';

const CameraIcon: FC<IIconSVGProps> = ({ size = 32 }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
    >
      <G fill='#93A2C1' clipPath="url(#a)">
        <Path d="M16 20.267a4.267 4.267 0 1 0 0-8.534 4.267 4.267 0 0 0 0 8.534Z" />
        <Path d="M12 2.667 9.56 5.333H5.333A2.675 2.675 0 0 0 2.666 8v16c0 1.467 1.2 2.667 2.667 2.667h21.333c1.467 0 2.667-1.2 2.667-2.667V8c0-1.467-1.2-2.667-2.667-2.667H22.44L20 2.667h-8Zm4 20A6.67 6.67 0 0 1 9.333 16 6.67 6.67 0 0 1 16 9.333 6.67 6.67 0 0 1 22.666 16 6.67 6.67 0 0 1 16 22.667Z" />
      </G>
      <Defs>
        <ClipPath id="a">
          <Path fill="#fff" d="M0 0h32v32H0z" />
        </ClipPath>
      </Defs>
    </Svg>
  );
};

export { CameraIcon };
