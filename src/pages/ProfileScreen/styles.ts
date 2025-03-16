import { COLORS } from "@/shared/constants";
import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.LIGHT_PURPLE,
  },
  content: {
    position: 'relative',
    flex: 1,
    marginTop: 36,
  },
  name: {
    position: 'absolute',
    zIndex: 1,
    left: '50%',
    transform: [
      { translateY: '-50%' }, 
      { translateX: '-50%' }
    ]
  }
});

export { styles };