import React from 'react';

import { createStackNavigator } from '@react-navigation/stack';
import { RootStackParams } from './Tab1';
import { SearchScreen } from '../screen/SearchScreen';
import { CharacterScreen } from '../screen/CharacterScreen';
import { ProfileScreen } from '../screen/ProfileScreen';

const Tab2 = createStackNavigator<RootStackParams>();

export const Tab2Screen = () => {
  return (
    <Tab2.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Tab2.Screen name="HomeScreens" component={ SearchScreen } />
      <Tab2.Screen name="CharacterScreen" component={ CharacterScreen } />
    </Tab2.Navigator>
  );
}
