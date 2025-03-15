import React, { type FC } from 'react';
import { View } from 'react-native';
import { Page } from '@/shared/ui/page';
import { SelectPhotoBlock } from '@/widgets/selectPhotoBlock';
import { styles } from './styles';
import { FormCreateProfile } from '@/widgets/formCreateProfile';
import { FormDecorator } from '@/shared/decorators/formDecorator';

const CreateProfileScreen: FC = () => {

  return (
    <Page style={styles.container}>
      <FormDecorator>
        <SelectPhotoBlock />

        <View style={styles.form}>
          <FormCreateProfile />
        </View>
      </FormDecorator>
    </Page>
  );
};

export { CreateProfileScreen };