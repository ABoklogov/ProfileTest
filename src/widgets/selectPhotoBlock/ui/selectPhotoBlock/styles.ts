import { COLORS } from "@/shared/constants";
import { STYLE_TEXT } from "@/shared/palettes";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    width: '100%',
    backgroundColor: COLORS.WHITE,
  },
  text: {
    ...STYLE_TEXT,
    textAlign: 'center',
  },
  photo: {
    marginTop: 4,
  }
});

export { styles };