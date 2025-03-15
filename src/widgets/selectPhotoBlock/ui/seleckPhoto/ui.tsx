import React, { type FC } from 'react';
import { View } from 'react-native';
import { styles } from './styles';
import { CustomImage } from '@/shared/ui/customImage';
import { CustomPressable } from '@/shared/ui/customPressable';
import { CustomShadow } from '@/shared/ui/customShadow';
import { PlusIcon } from '@/shared/icons';

const SelectPhoto: FC = () => {
  const onSelectPhoto = () => {
    
  };

  return (
    <View style={styles.container}>
      <View style={styles.containerPhoto}>
        <CustomImage 
          picture={''} 
          width={100}
          height={100}
          styleContainer={styles.photo}
        />

        <View style={styles.wrapperButton}>
          <CustomPressable onPress={onSelectPhoto}>
            <CustomShadow 
              style={styles.shadow}
              offset={[0, 10]}
              color={'#404D6910'}
            >
              <PlusIcon />
            </CustomShadow>
          </CustomPressable>
        </View>
      </View>
    </View>
  );
};

export { SelectPhoto };