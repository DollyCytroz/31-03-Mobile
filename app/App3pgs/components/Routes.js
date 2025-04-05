import * as React from 'react';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { MaterialCommunityIcons } from '@expo/vector-icons';

import Home from '../components/Home';
import Perfil from '../components/Perfil';
import Playlist from '../components/Playlist';

const Tab = createBottomTabNavigator();

export default function Routes() {
    return (
      <Tab.Navigator
        initialRouteName="Home"
        screenOptions={{
          tabBarActiveTintColor: '#b94646',
          tabBarStyle: {
            backgroundColor: '#121212',
            borderTopColor: '#1DB954',
          },
          tabBarInactiveTintColor: '#aaa',
          headerShown: false, // Desabilita o cabeçalho globalmente
        }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          options={{
            tabBarLabel: 'Home',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="home" color={color} size={size} />
            ),
          }}
        />
        
        <Tab.Screen
          name="Playlist"
          component={Playlist}
          options={{
            tabBarLabel: 'Playlist',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="bell" color={color} size={size} />
            ),
          }}
        />
  
        <Tab.Screen
          name="Perfil"
          component={Perfil}
          options={{
            tabBarLabel: 'Perfil',
            tabBarIcon: ({ color, size }) => (
              <MaterialCommunityIcons name="account" color={color} size={size} />
            ),
          }}
        />
      </Tab.Navigator>
    );
  }