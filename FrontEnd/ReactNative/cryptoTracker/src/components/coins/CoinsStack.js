import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import CoinsScreen from './CoinsScreen';
import CoinDetailScreen from './coinDetail/CoinDetailScreen';
import { colors } from '../../res/colors';

const Stack = createStackNavigator();

const CoinsStack = () => {
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

            <Stack.Screen 
            name="Coins" 
            component={CoinsScreen}
            />


            <Stack.Screen 
            name="CoinDetail" 
            component={CoinDetailScreen}
            />


        </Stack.Navigator>
    )
}

export default CoinsStack;