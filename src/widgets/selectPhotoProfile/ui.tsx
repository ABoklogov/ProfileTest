import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { SelectPhoto } from '@/features/seleckPhoto';

const SelectPhotoBlock: FC = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Выберите фото</Text>
      
      <View style={styles.photo}>
        <SelectPhoto />
      </View>
    </View>
  );
};

export { SelectPhotoBlock };