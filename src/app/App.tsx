import React, { FC } from 'react';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routing } from './router';
import { NavigationContainer } from '@react-navigation/native';
import { LoaderView } from '@/shared/ui/loaderView';
import { StatusBar } from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const App: FC = () => {
  console.log(AsyncStorage.getAllKeys());
  
  return (
    <SafeAreaProvider>
      <StatusBar
        backgroundColor={'#fff'}
        barStyle="dark-content"
        hidden={false}
      />
      
      <NavigationContainer fallback={<LoaderView isLoading={true} />}>
        <Routing />
      </NavigationContainer>
    </SafeAreaProvider>
  );
};

export { App };
