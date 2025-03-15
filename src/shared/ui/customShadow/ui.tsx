import React, { ReactNode, type FC } from "react";
import { ViewStyle } from "react-native";
import { Shadow } from 'react-native-shadow-2';
import { styles } from "./styles";

interface CustomShadowProps {
  style?: ViewStyle;
  children?: ReactNode;
  color?: string;
  distance?: number;
  offset?: [number, number];
};

const CustomShadow: FC<CustomShadowProps> = ({ 
  children,
  color = '#00000010',
  distance = 25,
  offset = [0, 15],
  style,
}) => {
  return (
    <Shadow
      distance={distance}
      startColor={color}
      offset={offset}
      style={[styles.shadow, style]}
    >
      {children}
    </Shadow>
  )
};

export { CustomShadow };