import React, { type FC } from 'react';
import { Page } from '@/shared/ui/page';
import { styles } from './styles';
import { StatusBar } from 'react-native';
import { COLORS } from '@/shared/constants';
import { HeaderProfile } from '@/widgets/headerProfile';

const ProfileScreen: FC = () => {
  return (
    <Page style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.LIGHT_PURPLE}
        barStyle="dark-content"
        hidden={false}
      />

      <HeaderProfile />
    </Page>
  );
};

export { ProfileScreen };