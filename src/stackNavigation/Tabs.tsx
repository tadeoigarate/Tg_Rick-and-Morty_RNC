import React, { useContext } from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/Ionicons';

import { Tab1 } from './Tab1';

import { Tab2Screen } from './Tab2';
import { AuthContext } from '../context/AuthContext';
import { LoginScreen } from '../screen/LoginScreen';
import { Tab3Screen } from './Tabs3';

const Tab = createBottomTabNavigator();



export const Tabs = () => {

    const { status } = useContext( AuthContext );
  return (

    <Tab.Navigator
        screenOptions={
          {headerShown: false}
        }
        sceneContainerStyle={{
            backgroundColor: 'white'
        }}>

{
        (status !== "authenticated")
          ?(
            <Tab.Screen 
                name="LoginScreen" 
                component={ LoginScreen }
                options={{
                  tabBarLabel: "Login",
                    tabBarIcon: ({ color }) => (
                        <Icon 
                        color={ color } 
                        size={ 25 } 
                        name="log-in-outline"
                        />
                        )
                }} />
          )
          : (
            <>
            <Tab.Screen 
        name="HomeScreen" 
        component={ Tab1 }
        options={{
            tabBarLabel: "List",
            tabBarIcon: ({ color }) => (
                <Icon 
                color={ color } 
                size={ 25 } 
                name="list-outline"
                />
                )
            }}
            />

      <Tab.Screen 
        name="SearchScreen" 
        component={ Tab2Screen } 
        options={{
            tabBarLabel: "Search",
            tabBarIcon: ({ color }) => (
                <Icon 
                color={ color } 
                size={ 25 } 
                name="search-outline"
                />
                )
            }}
            />

<Tab.Screen 
        name="ProfileScreen" 
        component={ Tab3Screen } 
        options={{
            tabBarLabel: "Profile",
            tabBarIcon: ({ color }) => (
                <Icon 
                color={ color } 
                size={ 25 } 
                name="person-outline"
                />
                )
            }}
            />
            </>
          )
    }
      
    </Tab.Navigator>
  );
}