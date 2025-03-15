import React, { type FC } from 'react';
import Svg, { Path } from 'react-native-svg';
import { type IIconSVGProps } from '../types';
import { COLORS } from '../constants';

const PlusIcon: FC<IIconSVGProps> = ({ size = 24, color = '#FE5A57' }) => {
  return (
    <Svg
      width={size}
      height={size}
      fill="none"
    >
      <Path
        fill={color}
        d="M12.5 4a1 1 0 0 0-1 1v6h-6a1 1 0 1 0 0 2h6v6a1 1 0 1 0 2 0v-6h6a1 1 0 1 0 0-2h-6V5a1 1 0 0 0-1-1Z"
      />
    </Svg>
  );
};

export { PlusIcon };
