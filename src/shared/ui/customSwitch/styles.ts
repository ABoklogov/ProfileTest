import { COLORS } from '@/shared/constants';
import { STYLE_TEXT } from '@/shared/palettes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  text: {
    ...STYLE_TEXT,
    flex: 0.8,
    color: COLORS.BLACK,
  },
});

export { styles };