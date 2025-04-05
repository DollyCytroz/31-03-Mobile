import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import RotasBotao from './components/RotaBotao.js';
import Routes from './components/Routes.js'
import { NavigationContainer } from '@react-navigation/native';

export default function App() {
  return (
    <NavigationContainer>
      <Routes  />
    </NavigationContainer>
  );
}