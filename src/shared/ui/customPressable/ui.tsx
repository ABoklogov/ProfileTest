import React, { type FC } from 'react';
import { 
  ViewStyle, 
  type StyleProp, 
  type Insets, 
  TouchableOpacity
} from 'react-native';

interface CustomPressableProps {
  onPress?: () => void;
  style?: StyleProp<ViewStyle>;
  disabled?: boolean; 
  children: React.ReactNode;
  hitSlop?: Insets;
};

const CustomPressable: FC<CustomPressableProps> = ({
  onPress, 
  style,
  children,
  disabled,
  hitSlop
}) => {
  return (
    <TouchableOpacity
      onPress={!disabled ? onPress : () => {}}
      style={style}
      activeOpacity={0.5}
      hitSlop={hitSlop}
    >
      {children}
    </TouchableOpacity>
  );
};

export { CustomPressable };