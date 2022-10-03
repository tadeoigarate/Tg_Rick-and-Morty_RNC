import React from 'react';
import { createStackNavigator, StackNavigationProp } from '@react-navigation/stack';

import { HomeScreen } from '../screen/HomeScreen';
import { CharacterScreen } from '../screen/CharacterScreen';

import { Character } from '../interfaces/AllCharactersInterface';
import { User } from '../interfaces/UserInterface';


export type RootStackParams = {
  HomeScreens: undefined;
  SearchScreens:undefined;
  CharacterScreen: Character;
  ProfileScreens: undefined;
  EditProfileScreen: User;

}

export type StackNavigation = StackNavigationProp<RootStackParams>


const Stack = createStackNavigator<RootStackParams>();

export const Tab1 = () => {
  
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
        cardStyle: {
          backgroundColor: 'white'
        }
      }}
    >
      <Stack.Screen name="HomeScreens" component={ HomeScreen } />
      <Stack.Screen name="CharacterScreen" component={ CharacterScreen } />
    </Stack.Navigator>
  );
}