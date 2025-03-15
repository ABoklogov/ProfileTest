import { COLORS } from "@/shared/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    position: 'relative',
    flex: 1,
  },
  backdrop: {
    position: 'absolute',
    zIndex: 999,
    top: 0,
    height: '100%',
    width: '100%',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: COLORS.BACKDROP,
  },
});

export { styles };