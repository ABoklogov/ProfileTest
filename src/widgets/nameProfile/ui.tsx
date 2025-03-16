import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { observer } from 'mobx-react-lite';
import { profileModel } from '@/entities/profile';

const NameProfile: FC = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{profileModel.name}</Text>
      <Text style={styles.nickname}>{profileModel.nickname}</Text>
    </View>
  );
});

export { NameProfile };