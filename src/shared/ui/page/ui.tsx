import React, { type FC, ReactNode } from 'react';
import { View, ViewStyle } from 'react-native';
import { LoaderView } from '@/shared/ui/loaderView';
import { styles } from './styles';

interface PageProps {
  children?: ReactNode;
  isLoading?: boolean;
  style?: ViewStyle;
};

const Page: FC<PageProps> = (props) => {
  const { 
    children, 
    isLoading = false,
    style,
  } = props;

  return (
    <View style={[styles.container, style]}>
      <LoaderView isLoading={isLoading} {...props}>
        {children}
      </LoaderView>
    </View>
  );
};

export { Page };