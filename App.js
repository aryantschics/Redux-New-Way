/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import type {Node} from 'react';
import {
  SafeAreaView,
  StatusBar,
  View,
  Text
} from 'react-native';

import {createStackNavigator} from '@react-navigation/stack';
import MediaPosts from '../blogPosts/src/screens/MediaPosts';
import {NavigationContainer} from '@react-navigation/native';
import { Provider } from '../blogPosts/src/context/MediaContext';

const Stack = createStackNavigator();

const App: () => Node = () => {
  return (
    <SafeAreaView style={{flex: 1, backgroundColor: 'white'}}>
      <StatusBar barStyle={'light-content'} />
          <Provider>
            <NavigationContainer>
              <Stack.Navigator>
                <Stack.Screen name="Media" component={MediaPosts} />
              </Stack.Navigator>
            </NavigationContainer>
          </Provider>
    </SafeAreaView>
  );
};

export default App;
