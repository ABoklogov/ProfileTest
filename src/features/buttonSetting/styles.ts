import { COLORS } from "@/shared/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 48,
    width: 48,
    borderRadius: '50%',
    backgroundColor: COLORS.WHITE,
  },
});

export { styles };