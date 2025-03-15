import React, { FC, useMemo, useState } from 'react';
import { Pressable, Text, TextStyle, ViewStyle } from 'react-native';
import { styles } from './styles';
import { Loader } from '@/shared/ui/loader';
import { COLORS } from '@/shared/constants';
import { CustomShadow } from '../customShadow';

interface CustomButtonProps {
  text: string;
  onPress: () => void;
  disabled?: boolean;
  style?: ViewStyle;
  styleText?: TextStyle;
  theme?: 'Purple' | 'White';
  loader?: boolean;
  colorLoader?: string;
};

interface IPropsShadow {
  distance: number;
  offset: [number, number];
};

const CustomButton: FC<CustomButtonProps> = ({ 
  text, 
  onPress, 
  disabled = false,
  theme = 'Purple',
  style,
  styleText,
  loader = false,
  colorLoader = COLORS.WHITE,
}) => {
  const [isPress, setIsPress] = useState(false);

  const togglePress = () => {
    setIsPress(!isPress);
  };
  
  const shadowProps = useMemo(() => {
    let props: IPropsShadow = {
      offset: [0, 15],
      distance: 25
    };

    if (disabled || theme === 'White')  {
      props = {
        offset: [0, 0],
        distance: 0
      }
    };
    if (isPress) {
      props = {
        offset: [0, 15],
        distance: 25
      };
    };
    return props
  }, [disabled, theme, isPress]);
  
  return (
    <CustomShadow 
      color={`${COLORS.PURPLE}20`}
      {...shadowProps}
    >
      <Pressable 
        onPress={(disabled || loader) ? () => {} : onPress} 
        onPressIn={togglePress}
        onPressOut={togglePress}
        style={[
          styles.button, 
          styles[`button${isPress ? 'Active' : theme}`], 
          disabled && styles.disabledButton, 
          style,
        ]}
        disabled={disabled}
      >
        {loader ? (
          <Loader color={colorLoader} size='small' />
        ) : (
          <Text style={[
              styles.text, 
              styleText, 
              styles[`text${isPress ? 'Active' : theme}`],
              disabled && styles.disabledText,
            ]}
          >
            {text}
          </Text>
        )}
      </Pressable>
    </CustomShadow>
  )
};

export { CustomButton };