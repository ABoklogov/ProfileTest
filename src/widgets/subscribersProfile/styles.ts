import { COLORS, FONTS } from "@/shared/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'center',
    borderTopColor: COLORS.BORDER,
    borderBottomColor: COLORS.BORDER,
    borderTopWidth: 1,
    borderBottomWidth: 1,
    marginHorizontal: 15,
    paddingVertical: 10,
  },
  text: {
    fontFamily: FONTS.MEDIUM,
    fontSize: 13,
    lineHeight: 16,
    color: COLORS.DARK_GREY,
  },
  count: {
    fontFamily: FONTS.BOLD,
    color: COLORS.BLACK,
    fontSize: 14,
    lineHeight: 18,
  }
});

export { styles };