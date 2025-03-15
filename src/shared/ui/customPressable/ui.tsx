import React, { type FC } from 'react';
import { 
  Pressable,
  ViewStyle, 
  type StyleProp, 
  type Insets 
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
    <Pressable
      onPress={onPress}
      style={style}
      disabled={disabled}
      hitSlop={hitSlop}
    >
      {children}
    </Pressable>
  );
};

export { CustomPressable };