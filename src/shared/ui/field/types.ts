import { KeyboardTypeOptions, TextInputProps, ViewStyle } from "react-native";

interface FieldProps extends ViewStyle {
  value?: string;
  defaultValue?: string;
  onChange: (value: string) => void;
  placeholder?: string;
  label?: string;
  rightLabel?: string;
  autoFocus?: boolean;
  autoComplete?: TextInputProps['autoComplete'];
  keyboardType?: KeyboardTypeOptions;
  secureTextEntry?: boolean;
  isSubmitted?: boolean;
  error?: string;
  errorMessage?: string;
  multiline?: boolean;
  stylesInput?: ViewStyle;
  editable?: boolean;
  numberOfLines?: number;
  required?: boolean;
}

export { type FieldProps };