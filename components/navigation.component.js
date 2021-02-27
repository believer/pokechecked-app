import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';
import {StatusBar} from 'react-native';
import {schema} from '../app.json';
import {Games} from './games.component';
import {VideoModal} from './videoModal.component';

const {Navigator, Screen} = createStackNavigator();

const HomeNavigator = () => (
  <Navigator headerMode="none">
    <Screen name="Games" component={Games} />
    <Screen name="Video" component={VideoModal} />
  </Navigator>
);

const linking = {
  prefixes: [schema],
};
export const AppNavigator = () => {
  return (
    <NavigationContainer linking={linking}>
      <StatusBar />
      <HomeNavigator />
    </NavigationContainer>
  );
};
