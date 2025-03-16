import React, { type FC } from 'react';
import { Text, View } from 'react-native';
import { styles } from './styles';
import { observer } from 'mobx-react-lite';
import { profileModel } from '@/entities/profile';

const SubscribersProfile: FC = observer(() => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>
        <Text style={styles.count}>{profileModel.subscribers}</Text> подписчиков
      </Text>

      <Text style={[styles.text, {marginLeft: 12}]}>
        <Text style={styles.count}>{profileModel.subscriptions}</Text> подписок
      </Text>
    </View>
  );
});

export { SubscribersProfile };