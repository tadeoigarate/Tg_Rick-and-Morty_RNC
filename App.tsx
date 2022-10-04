import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/stackNavigation/Tabs';
import { AuthProvider } from './src/context/AuthContext';

const AppState = ({ children }: any ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default function App () {

  return (
    <NavigationContainer>
      <AppState>
        <Tabs />
      </AppState>
    </NavigationContainer>
  );
}