import { COLORS } from '@/shared/constants';
import { STYLE_TEXT } from '@/shared/palettes';
import { StyleSheet } from 'react-native';

const styles = StyleSheet.create({
  text: {
    ...STYLE_TEXT,
    color: COLORS.RED,
  },
});

export { styles };