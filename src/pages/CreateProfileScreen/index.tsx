import React, { type FC } from 'react';
import { Text } from 'react-native';
import { Page } from '@/shared/ui/page';
import { CustomButton } from '@/shared/ui/customButton';

const CreateProfileScreen: FC = () => {

  return (
    <Page>
      <Text>CreateProfileScreen</Text>
      <CustomButton 
        text='Продолжить' 
        onPress={() => {}} 
        // disabled={true}
        theme='White'
      />
    </Page>
  );
};

export { CreateProfileScreen };