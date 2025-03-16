import { COLORS } from "@/shared/constants";
import { Platform, StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'space-between',
    backgroundColor: COLORS.WHITE,
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  subscribers: {
    marginTop: 48,
  },
  description: {
    marginTop: 42,
    marginHorizontal: 21,
  },
  button: {
    marginHorizontal: 15,
    marginBottom: Platform.OS === 'ios' ? 40 : 20,
  }
});

export { styles };