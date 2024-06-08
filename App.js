/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 */

import React from 'react';
import {SafeAreaView, Text} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import MainNavigation from './navigation/MainNavigation';

const App = () => (
  <NavigationContainer>
    <MainNavigation />
  </NavigationContainer>
);

export default App;
