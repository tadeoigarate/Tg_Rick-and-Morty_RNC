import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from './Tab1';
import { ProfileScreen } from '../screen/ProfileScreen';
import { EditProfileScreen } from '../screen/EditProfileScreen';

const Tab3 = createStackNavigator<RootStackParams>();

export const Tab3Screen = () => {
  return (
    <Tab3.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tab3.Screen name="ProfileScreens" component={ ProfileScreen } />
      <Tab3.Screen name="EditProfileScreen" component={ EditProfileScreen } />
    </Tab3.Navigator>
  );
}