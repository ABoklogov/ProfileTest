import { COLORS, RADIUS } from '@/shared/constants';
import { STYLE_TEXT_BUTTON } from '@/shared/palettes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  button: {
    justifyContent: 'center',
    alignItems: 'center',
    height: 50,
    borderWidth: 1,
    borderRadius: RADIUS.BUTTON,
  },
  text: {
    ...STYLE_TEXT_BUTTON,
    textAlignVertical: 'center',
  },
  disabledButton: {
    backgroundColor: COLORS.LIGHT_GREY,
    borderColor: COLORS.LIGHT_GREY,
  },
  buttonPurple: {
    backgroundColor: COLORS.PURPLE,
    borderColor: COLORS.PURPLE,
  },
  buttonWhite: {
    backgroundColor: '#fff',
    borderColor: COLORS.PURPLE,
  },
  buttonActive: {
    backgroundColor: COLORS.ACTIVE_PURPLE,
    borderColor: COLORS.ACTIVE_PURPLE,
  },
  textPurple: {
    color: '#fff',
  },
  textWhite: {
    color: COLORS.PURPLE,
  },
  textActive: {
    color: '#fff',
  },
  disabledText: {
    color: '#fff',
  },
});

export { styles };