import React, { type FC } from "react";
import { Text, View } from "react-native";
import { Switch } from "react-native-switch";
import { COLORS } from "@/shared/constants";
import { styles } from "./styles";

interface CustomShadowProps {
  label: string;
  value: boolean;
  onChange: () => void;
};

const CustomSwitch: FC<CustomShadowProps> = ({ 
  label,
  value = false,
  onChange
}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{label}</Text>
      <Switch
        renderActiveText={false}
        renderInActiveText={false}
        circleSize={27}
        circleBorderActiveColor={COLORS.PURPLE}
        circleBorderInactiveColor={'#EAEAEA'}
        backgroundActive={COLORS.PURPLE}
        backgroundInactive={'#EAEAEA'}
        circleActiveColor={COLORS.WHITE}
        circleInActiveColor={COLORS.WHITE}
        onValueChange={onChange}
        value={value}
        switchWidthMultiplier={1.7}
        switchLeftPx={3}
        switchRightPx={3} 
      />
    </View>
  )
};

export { CustomSwitch };