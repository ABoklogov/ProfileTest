import React, { type FC } from "react";
import { ActivityIndicator, View } from 'react-native';
import { styles } from "./styles";
import { COLORS } from "@/shared/constants";

interface LoaderProps {
  color?: string;
  size?: 'small' | 'large';
};

const Loader: FC<LoaderProps> = ({ 
  color = COLORS.PURPLE, 
  size = 'large' 
}) => (
  <View style={styles.loader}>
    <ActivityIndicator
      size={size}
      color={color}
    />
  </View>
);

export { Loader };