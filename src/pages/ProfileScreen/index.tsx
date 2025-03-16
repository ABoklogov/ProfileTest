import React, { type FC } from 'react';
import { Page } from '@/shared/ui/page';
import { styles } from './styles';
import { StatusBar, View } from 'react-native';
import { COLORS } from '@/shared/constants';
import { HeaderProfile } from '@/widgets/headerProfile';
import { ContentProfile } from '@/widgets/contentProfile';
import { NameProfile } from '@/widgets/nameProfile';

const ProfileScreen: FC = () => {
  return (
    <Page style={styles.container}>
      <StatusBar
        backgroundColor={COLORS.LIGHT_PURPLE}
        barStyle="dark-content"
        hidden={false}
      />
      <View style={styles.header}>
        <HeaderProfile />
      </View>

      <View style={styles.content}>
        <View style={styles.name}>
          <NameProfile />
        </View>
        <ContentProfile />
      </View>
    </Page>
  );
};

export { ProfileScreen };