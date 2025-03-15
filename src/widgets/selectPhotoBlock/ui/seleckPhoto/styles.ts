import { COLORS } from "@/shared/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
  },
  containerPhoto: {
    position: 'relative',
  },
  photo: {
    borderRadius: '50%',
  },
  wrapperButton: {
    position: 'absolute',
    zIndex: 1,
    bottom: -3,
    right: -13,
  },
  shadow: {
    alignItems: 'center',
    justifyContent: 'center',
    height: 48,
    width: 48,
    backgroundColor: COLORS.WHITE,
    borderRadius: 48
  }
});

export { styles };