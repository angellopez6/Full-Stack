/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  Image,
  SafeAreaView,
  ScrollView,
  StatusBar,
  StyleSheet,
  Text,
  useColorScheme,
  View,
} from 'react-native';
import { NavigationContainer } from '@react-navigation/native'
import CoinsStack from './src/components/coins/CoinsStack';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { colors } from './src/res/colors';
import FavoritesStack from './src/components/favorites/FavoritesStack';

const Tab = createBottomTabNavigator();

const App = () => {
  return (
    <NavigationContainer>
     <Tab.Navigator
        screenOptions={{
          headerShown: false,
          tabBarActiveTintColor: "royalblue",
          tabBarInactiveTintColor: colors.white,
          tabBarStyle:{
            backgroundColor: colors.blackPearl
          }
        }}
     >
        <Tab.Screen    
          name="Coin"
          component={CoinsStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={ {tintColor: color, width: size, height: size} }
                source={require("./src/assets/bank.png")}
              />
            )
          }}
        />

        <Tab.Screen    
          name="Favorites"
          component={FavoritesStack}
          options={{
            tabBarIcon: ({ size, color }) => (
              <Image
                style={ {tintColor: color, width: size, height: size} }
                source={require("./src/assets/star.png")}
              />
            )
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
    );
};

export default App;