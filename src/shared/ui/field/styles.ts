import { COLORS, RADIUS } from '@/shared/constants';
import { STYLE_TEXT } from '@/shared/palettes';
import { StyleSheet } from 'react-native';
import { HEIGHT, PADDING_VERTICAL } from './constants/fieldParams';

const styles = StyleSheet.create({
  container: {
    position: 'relative',
  },
  input: {
    ...STYLE_TEXT,
    fontSize: 16,
    borderWidth: 1,
    borderColor: COLORS.GREY,
    borderRadius: RADIUS.INPUT,
    height: HEIGHT,
    backgroundColor: COLORS.WHITE,
    textAlign: 'auto',
    paddingVertical: PADDING_VERTICAL,
  },
  errMsg: {
    position: 'absolute',
    top: '100%',
  },
  label: {
    ...STYLE_TEXT,
    marginBottom: 4,
    color: COLORS.BLACK
  },
  labelRequired: {
    ...STYLE_TEXT,
    color: COLORS.LIGHT_GREY,
  }
});

export { styles };