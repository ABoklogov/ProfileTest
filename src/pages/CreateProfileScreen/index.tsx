import React, { type FC } from 'react';
import { View } from 'react-native';
import { Page } from '@/shared/ui/page';
import { SelectPhotoBlock } from '@/widgets/selectPhotoProfile';
import { styles } from './styles';
import { FormCreateProfile } from '@/widgets/formCreateProfile';
import { FormDecorator } from '@/shared/decorators/formDecorator';
import { profileModel } from '@/entities/profile';

const CreateProfileScreen: FC = () => {

  return (
    <Page style={styles.container}>
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
};

export { CreateProfileScreen };