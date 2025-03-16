import { COLORS, FONTS } from "@/shared/constants";
import { STYLE_TEXT } from "@/shared/palettes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 55,
    width: 219,
    backgroundColor: COLORS.LIGHT_PURPLE,
    borderRadius: 25,
    overflow: 'hidden',
  },
  name: {
    fontFamily: FONTS.BOLD,
    fontSize: 16,
    lineHeight: 16,
    color: '#000',
    textAlign: 'center',
  },
  nickname: {
    ...STYLE_TEXT,
    color: '#000',
    marginTop: 1,
    textAlign: 'center',
  }
});

export { styles };