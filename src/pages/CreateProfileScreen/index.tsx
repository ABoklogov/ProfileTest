import React, { type FC } from 'react';
import { StatusBar, View } from 'react-native';
import { Page } from '@/shared/ui/page';
import { SelectPhotoBlock } from '@/widgets/selectPhotoProfile';
import { styles } from './styles';
import { FormCreateProfile } from '@/widgets/formCreateProfile';
import { FormDecorator } from '@/shared/decorators/formDecorator';
import { profileModel } from '@/entities/profile';
import { observer } from 'mobx-react-lite';

const CreateProfileScreen: FC = observer(() => {
  return (
    <Page style={styles.container} isLoading={profileModel.isLoading}>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
        hidden={false}
      />
      
      <FormDecorator>
        <SelectPhotoBlock />

        <View style={styles.form}>
          <FormCreateProfile 
            nickname={profileModel.nickname}
            name={profileModel.name}
            description={profileModel.description}
          />
        </View>
      </FormDecorator>
    </Page>
  );
});

export { CreateProfileScreen };