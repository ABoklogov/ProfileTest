import React, { type FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { ButtonSetting } from '@/features/buttonSetting';
import { ButtonNotification } from '@/features/buttonNotification';
import { observer } from 'mobx-react-lite';
import { CustomImage } from '@/shared/ui/customImage';
import { profileModel } from '@/entities/profile';

const HeaderProfile: FC = observer(() => {
  return (
    <View style={styles.container}>
      <ButtonNotification />
      <CustomImage 
        picture={profileModel.picture} 
        width={82}
        height={82}
        styleContainer={styles.photo}
        naturalSize={false}
      />
      <ButtonSetting />
    </View>
  );
});

export { HeaderProfile };