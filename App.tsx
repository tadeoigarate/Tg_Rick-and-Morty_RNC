import 'react-native-gesture-handler';

import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Tabs } from './src/stackNavigation/Tabs';
import { AuthProvider } from './src/context/AuthContext';
import AsyncStorage from '@react-native-async-storage/async-storage';

const AppState = ({ children }: any ) => {
  return (
    <AuthProvider>
      { children }
    </AuthProvider>
  )
}

export default function App () {

  let token
 async () => {
  token = await AsyncStorage.getItem('token')
 }
  return (
    <NavigationContainer>
      <AppState>
        <Tabs />
      </AppState>
    </NavigationContainer>
  );
}