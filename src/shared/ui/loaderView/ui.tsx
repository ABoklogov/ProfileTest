import React, { type FC, ReactNode } from 'react';
import { View, ActivityIndicator } from 'react-native';
import { COLORS } from '@/shared/constants';
import { styles } from './styles';

interface LoaderProps {
  isLoading: boolean;
  children?: ReactNode;
};

const LoaderView: FC<LoaderProps> = ({ isLoading, children }) => {
  return (
    <View style={styles.container}>
      {isLoading && (
        <View style={styles.backdrop}>
          <ActivityIndicator
            size="large"
            color={COLORS.PURPLE}
          />
        </View>
      )}
      {children}
    </View>
  );
};

export { LoaderView };