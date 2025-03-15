import { type StyleProp, type ViewStyle } from 'react-native';

export interface IIconSVGProps {
  size?: number;
  color?: string;
  style?: StyleProp<ViewStyle>;
  active?: boolean;
  visible?: boolean;
};
