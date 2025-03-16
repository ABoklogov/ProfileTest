import React, { type FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { SubscribersProfile } from '../subscribersProfile';
import { DescriptionProfile } from '../descriptionProfile';
import { CustomButton } from '@/shared/ui/customButton';
import { observer } from 'mobx-react-lite';
import { profileModel } from '@/entities/profile';
import { useAppNavigation } from '@/shared/hooks';
import { SCREEN_MAIN } from '@/shared/constants';

const ContentProfile: FC = observer(() => {
  const navigation = useAppNavigation();
  
  const onChangeProfile = () => {
    navigation.navigate(SCREEN_MAIN.CREATE_PROFILE);
  };

  return (
    <View style={styles.container}>
      <View>
        <View style={styles.subscribers}>
          <SubscribersProfile/>
        </View>

        {profileModel.description && (
          <View style={styles.description}>
            <DescriptionProfile description={profileModel.description}/>
          </View>
        )}
      </View>

      <View style={styles.button}>
        <CustomButton 
          text='Заполнить профиль'
          onPress={onChangeProfile}
        />
      </View>
    </View>
  );
});

export { ContentProfile };