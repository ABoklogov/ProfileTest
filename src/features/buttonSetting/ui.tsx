import React, { type FC } from 'react';
import { styles } from './styles';
import { CustomPressable } from '@/shared/ui/customPressable';
import { SettingIcon } from '@/shared/icons';

const ButtonSetting: FC = () => {  
  return (
    <CustomPressable style={styles.container} onPress={() => {}} >
      <SettingIcon />
    </CustomPressable>
  );
};

export { ButtonSetting };