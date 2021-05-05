import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from "react-native";
import AuthNavigator from './AuthNavigator';

const AppNavContainer = () => {
    return (
        <NavigationContainer>
            <Text>Hello world! This is index.js</Text>
            <AuthNavigator />
        </NavigationContainer >
    );
}

export default AppNavContainer;