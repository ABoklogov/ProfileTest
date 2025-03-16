import { FONTS } from "@/shared/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  title: {
    fontFamily: FONTS.SEMI_BOLD,
    fontSize: 16,
    lineHeight: 21,
  },
  description: {
    fontFamily: FONTS.REGULAR,
    fontSize: 16,
    lineHeight: 21,
    marginTop: 12,
  }
});

export { styles };