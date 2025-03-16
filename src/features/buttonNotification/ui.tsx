import React, { type FC } from 'react';
import { styles } from './styles';
import { CustomPressable } from '@/shared/ui/customPressable';
import { NotificationIcon } from '@/shared/icons';

const ButtonNotification: FC = () => {  
  return (
    <CustomPressable style={styles.container} onPress={() => {}} >
      <NotificationIcon />
    </CustomPressable>
  );
};

export { ButtonNotification };