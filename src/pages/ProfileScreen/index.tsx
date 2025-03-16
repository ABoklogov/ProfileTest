import React, { type FC } from 'react';
import { Page } from '@/shared/ui/page';
import { styles } from './styles';
import { Text } from 'react-native';
import { profileModel } from '@/entities/profile';

const ProfileScreen: FC = () => {

  return (
    <Page style={styles.container}>
      <Text>{profileModel.name}</Text>
      <Text>{profileModel.nickname}</Text>
    </Page>
  );
};

export { ProfileScreen };