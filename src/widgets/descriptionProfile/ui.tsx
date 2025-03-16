import React, { type FC } from 'react';
import { Text } from 'react-native';
import { styles } from './styles';

interface DescriptionProfileProps {
  description: string;
};

const DescriptionProfile: FC<DescriptionProfileProps> = ({ description }) => {
  return (
    <>
      <Text style={styles.title}>Описание</Text>
      <Text style={styles.description}>{description}</Text>
    </>
  );
};

export { DescriptionProfile };