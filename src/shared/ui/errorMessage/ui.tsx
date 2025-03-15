import React, { type FC } from 'react';
import { Text } from "react-native";
import { styles } from './styles';

interface ErrorMessageProps {
  message: string;
};

const ErrorMessage: FC<ErrorMessageProps> = ({ message }) => (
  <Text style={styles.text}>
    {message}
  </Text>
);

export { ErrorMessage };