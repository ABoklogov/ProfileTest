import React, { FC } from 'react';
import { Text, View } from 'react-native';
import { SafeAreaProvider } from 'react-native-safe-area-context';
import { Routing } from './router';
import { NavigationContainer } from '@react-navigation/native';


const App: FC = () => {


  return (
    <SafeAreaProvider>
      <NavigationContainer fallback={'Загрузка...'}>
        <Routing />
      </NavigationContainer>
    </SafeAreaProvider>
  );
}

export { App };
