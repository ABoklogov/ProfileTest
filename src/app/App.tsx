import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routing } from './router';
import { NavigationContainer } from '@react-navigation/native';
import { LoaderView } from '@/shared/ui/loaderView';

const App: FC = () => {
  return (
    <SafeAreaProvider>
      <NavigationContainer fallback={<LoaderView isLoading={true} />}>
        <Routing />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export { App };
