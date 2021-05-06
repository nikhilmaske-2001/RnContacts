import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { Text } from "react-native";
import AuthNavigator from './AuthNavigator';
import DrawerNavigator from './DrawerNavigator';

const AppNavContainer = () => {
    return (
        <NavigationContainer>
            {/* <Text>Hello world! This is index.js</Text> */}
            {/* <AuthNavigator /> */}
            <DrawerNavigator />
        </NavigationContainer >
    );
}

export default AppNavContainer;