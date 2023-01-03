import React from 'react'
import { createStackNavigator } from '@react-navigation/stack';
import FavoritesScreens from './FavoritesScreens';
import { colors } from '../../res/colors';
const Stack = createStackNavigator();
const FavoritesStack = () => {
    return (
        <Stack.Navigator
        screenOptions={{
            headerStyle: {
                backgroundColor: colors.blackPearl,
                shadowColor: colors.blackPearl
            },
            headerTintColor: colors.white,
            headerTitleAlign: "center"
        }}
        >
            <Stack.Screen name="Favorites" component={FavoritesScreens}/>
        </Stack.Navigator>
    );
}

export default FavoritesStack;