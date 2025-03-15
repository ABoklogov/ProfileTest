import React, { FC, memo, useMemo, useState } from 'react';
import { View, TextInput, Text } from 'react-native';
import { type FieldProps } from './types';
import { ErrorMessage } from '@/shared/ui/errorMessage';
import { styles } from './styles';
import { COLORS } from '@/shared/constants';
import { PADDING_HORIZONT } from './constants/fieldParams';

const Field: FC<FieldProps> = memo(
({
  autoFocus,
  onChange,
  value = '',
  placeholder,
  label,
  rightLabel,
  autoComplete = 'off',
  keyboardType = 'default',
  isSubmitted = false,
  errorMessage = '',
  multiline = false,
  stylesInput,
  editable = true,
  numberOfLines,
  defaultValue = '',
  required,
  ...fieldProps
}) => {
  const [isFocus, setIsFocus] = useState(false);

  const borderColor = useMemo(() => {
    let colorBorder = COLORS.GREY;

    if (isSubmitted && !errorMessage)
      colorBorder = COLORS.PURPLE;
    else if (isSubmitted && errorMessage)
      colorBorder = COLORS.LIGHT_RED;
    else if (isFocus)
      colorBorder = COLORS.PURPLE;

    return colorBorder;
  }, [isSubmitted, errorMessage, isFocus]);

  return (
    <View>
      <View style={styles.header}>
        {label && (
          <Text style={styles.label}>
            {label}
            {required && <Text style={styles.labelRequired}> (обязательно)</Text>}
          </Text>
        )}
        {rightLabel && (
          <Text style={styles.rightLabel}>{rightLabel}</Text>
        )}
      </View>

      <View style={styles.container}>
        <TextInput
          {...fieldProps}
          style={{
            ...styles.input,
            ...stylesInput,
            borderColor,
            paddingLeft: PADDING_HORIZONT,
            opacity: editable ? 1 : 0.5
          }}
          autoFocus={autoFocus}
          keyboardType={keyboardType}
          placeholder={placeholder}
          defaultValue={value}
          onChangeText={onChange}
          autoComplete={autoComplete}
          placeholderTextColor={COLORS.DARK_GREY}
          cursorColor={COLORS.BLACK}
          multiline={multiline}
          editable={editable}
          numberOfLines={numberOfLines}
          onBlur={() => setIsFocus(false)}
          onFocus={() => setIsFocus(true)}
          {...fieldProps}
        />

        {Boolean(errorMessage) && (
          <View style={styles.errMsg}>
            <ErrorMessage message={errorMessage} />
          </View>
        )}
      </View>
    </View>
  );
});

export { Field };